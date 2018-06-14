import React, { Component } from 'react'
// import InputRange from 'react-input-range'
// import 'react-input-range/lib/css/index.css'
import business from './business.json'
import premium from './premium.json'
import { HistoryContainer, Range } from './styles'

console.log('data', business)

class History extends Component {
  state = {
    startDate: { month: '12', year: '2016' },
    endDate: { month: '3', year: '2018' },
    value: 0,
  }

  render() {
    const { portfolioYields } = this.props
    const { startDate, endDate } = this.state

    const points = premium.portfolioYields.filter(point => {
      if (point.date.month === startDate.month && point.date.year === startDate.year) {
        return true
      } else if (point.date.month === endDate.month && point.date.year === endDate.year) {
        return true
      }
      return false
    })

    const startBalance = points[0].balance
    const endBalance = points[1].balance

    const decrease = startBalance - endBalance
    const percentDecrease = (decrease / startBalance) * 100

    console.log('percentIncrease', percentDecrease < 0 ? Math.abs(percentDecrease) : `-${percentDecrease}%`)

    return (
      <HistoryContainer>
        <Range
          minValue={0}
          maxValue={portfolioYields.length}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </HistoryContainer>
    )
  }
}

export default History
