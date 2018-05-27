import React from 'react'
import Return from './Return'
import { ReturnsContainer, Divider } from './styles'

const AnnualReturns = ({ portfolioYields }) => {
    let additionalMonths = 1
    // if (portfolioYields.slice(-13)[0].date.month === moment().format('M')) {
    //     additionalMonths = 2
    // }
    const fiveYearStart = portfolioYields.slice(-((12 * 5) + additionalMonths))[0].balance
    const threeYearStart = portfolioYields.slice(-((12 * 3) + additionalMonths))[0].balance
    const twoYearStart = portfolioYields.slice(-((12 * 2) + additionalMonths))[0].balance
    const oneYearStart = portfolioYields.slice(-12 - additionalMonths)[0].balance
    const lastBalance = portfolioYields[portfolioYields.length - 1].balance

    return (
        <ReturnsContainer>
            <Return title="5 years" returnSince={(((lastBalance - fiveYearStart) / fiveYearStart) * 100).toFixed(2)} />
            <Divider />
            <Return title="36 months" returnSince={(((lastBalance - threeYearStart) / threeYearStart) * 100).toFixed(2)} />
            <Divider />
            <Return title="24 months" returnSince={(((lastBalance - twoYearStart) / twoYearStart) * 100).toFixed(2)} />
            <Divider />
            <Return title="12 months" returnSince={(((lastBalance - oneYearStart) / oneYearStart) * 100).toFixed(2)} />
        </ReturnsContainer>
    )
}

export default AnnualReturns