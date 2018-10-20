import _ from 'lodash'
import { planIds } from 'common/constants'
import plansData from './plansData'

export const mutatePlanData = (file, updatePlan, updateSuccesfullUploads, planName, finished) => {
  let planId
  if (planName === 'entry') planId = planIds.ENTRY
  else if (planName === 'premium') planId = planIds.PREMIUM
  else if (planName === 'business') planId = planIds.BUSINESS
  else if (planName === 'fund') planId = planIds.FUND

  let { backtestedData, latestSells, portfolioYields, launchStatistics, statistics, suggestions } = plansData[planName]

  if (file.name.includes('weekly')) {
    // keep model "trades" from suggestions
    const modelSuggestions = suggestions.filter(sugg => sugg.model)
    // concat suggestions with new suggestions
    suggestions = file.data.actionable.concat(modelSuggestions)
  } else if (file.name.includes('monthly')) {
    // update portfolioYields
    portfolioYields = file.data.logs

    // add to latestSells (& pop if more than 10)
    file.data.actionable.forEach(sugg => {
      if (sugg.action === 'SELL') {
        const newSell = {
          originalPrice: sugg.original_purchase,
          sellPrice: sugg.suggested_price,
          ticker: sugg.ticker,
          name: sugg.name || sugg.systemname,
          return: Number((((sugg.suggested_price - sugg.original_purchase) * 100) / sugg.original_purchase).toFixed(2)),
        }
        latestSells = [newSell].concat(latestSells)
        if (latestSells.length > 10) {
          latestSells.pop()
        }
      }
    })

    // Make sure latestSells is unique
    const latestSellTickers = latestSells.map(sell => sell.ticker)
    latestSells = latestSells.filter((sell, pos) => latestSellTickers.indexOf(sell.ticker) === pos)

    // concat model suggestions "trades"
    const weeklySuggestions = suggestions.filter(sugg => !sugg.model)
    let modelSuggestions = []
    if (file.data.actionable) {
      modelSuggestions = file.data.actionable.map(sugg => {
        sugg.model = true
        return sugg
      })
    }

    suggestions = weeklySuggestions.concat(modelSuggestions)

    // update percentInCash
    const percentInCash = file.data.portfolio[file.data.portfolio.length - 1].percentage_weight
    // update statistics
    launchStatistics = _.merge(launchStatistics, file.data.statistics, { percentInCash })
  } else if (file.name.includes('annual')) {
    statistics = _.clone(statistics)
    statistics.winRatio = 100 - (statistics.negatives / (statistics.positives + statistics.negatives)) * 100
    statistics = _.merge(statistics, file.data.statistics)
    backtestedData = file.data.logs
  }

  updatePlan({
    variables: {
      id: planId,
      backtestedData,
      latestSells,
      portfolio: file.data.portfolio || plansData[planName].portfolio,
      portfolioYields,
      statistics,
      launchStatistics,
      suggestions,
    },
  })
    .then(({ data }) => {
      plansData[planName] = data.updatePlan
      updateSuccesfullUploads()
      finished(null)
    })
    .catch(err => {
      console.error('failed updating plan', err)

      finished(err)
    })
}

export const extractJSONFromFile = file =>
  new Promise(resolve => {
    const receivedJSON = (fileName, e) => {
      const lines = e.target.result
      const data = JSON.parse(lines)
      resolve({ data, name: fileName })
    }

    const fr = new FileReader()
    fr.onload = receivedJSON.bind(null, file.name)
    fr.readAsText(file)
  })
