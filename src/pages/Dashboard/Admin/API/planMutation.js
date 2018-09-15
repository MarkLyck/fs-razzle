import _ from 'lodash'
import { planIds } from 'common/constants'

export const mutatePlanData = (file, updatePlan, updateSuccesfullUploads, oldPlan, finished) => {
  console.log('oldPlanClone before updating', file.name, JSON.parse(JSON.stringify(oldPlan)))
  let planId
  if (file.name.indexOf('basic') > -1 || file.name.indexOf('entry') > -1) planId = planIds.ENTRY
  else if (file.name.indexOf('premium') > -1) planId = planIds.PREMIUM
  else if (file.name.indexOf('business') > -1) planId = planIds.BUSINESS
  else if (file.name.indexOf('fund') > -1) planId = planIds.FUND

  let backtestedData = oldPlan.backtestedData
  let latestSells = oldPlan.latestSells
  let portfolioYields = oldPlan.portfolioYields
  let launchStatistics = oldPlan.launchStatistics
  let statistics = oldPlan.statistics
  let suggestions = oldPlan.suggestions

  if (file.name.indexOf('weekly') > -1) {
    // keep model "trades" from suggestions
    const modelSuggestions = suggestions.filter(sugg => sugg.model)
    // concat suggestions with new suggestions
    suggestions = file.data.actionable.concat(modelSuggestions)
  } else if (file.name.indexOf('monthly') > -1) {
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
  } else if (file.name.indexOf('annual') > -1) {
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
      portfolio: file.data.portfolio || oldPlan.portfolio,
      portfolioYields,
      statistics,
      launchStatistics,
      suggestions,
    },
  })
    .then(({ data }) => {
      oldPlan = data.updatePlan
      console.log('updatePlan', file.name, oldPlan)
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
