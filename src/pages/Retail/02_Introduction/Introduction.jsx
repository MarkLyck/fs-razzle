import React from 'react'
import PropTypes from 'prop-types'

import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Disclaimer from 'components/Legal/Disclaimer'
import DualBarChart from 'components/Charts/DualBarChart'

const Introduction = ({ winRatio, portfolioReturn, portfolioYields, planName }) => {

    let returns2016, returns2017
    if (portfolioYields && portfolioYields.length) {
        let janBalance2016, decBalance2016, janBalance2017, decBalance2017
        portfolioYields.forEach(point => {
            if (point.date.year === "2016") {
                if (point.date.month === '1') { janBalance2016 = point.balance }
                else if (point.date.month === '12') { decBalance2016 = point.balance }
            } else if (point.date.year === "2017") {
                if (point.date.month === '1') { janBalance2017 = point.balance }
                else if (point.date.month === '12') { decBalance2017 = point.balance }
            }
        })
        returns2016 = (decBalance2016 - janBalance2016) / janBalance2016 * 100
        returns2017 = (decBalance2017 - janBalance2017) / janBalance2017 * 100
    }
    
    return (
        <Section>
            <SectionTitle>Invest intelligently</SectionTitle>
            <Beside>
                <div>
                    <p>
                        Formula Stocks offers a better way to invest. We forecast which stocks will go up,
                        before they go up. {Math.floor(winRatio)}% of the time we have made such an estimate,
                        it has proved a successful long term investment. You simply buy these stocks in your own account.
                        <br /><br />

                        Investing using these estimates, cumulative returns since 2009 have been {portfolioReturn}%<sup>*</sup>
                        vs. the S&P500's 225%. Our Entry portfolio returned {returns2017.toFixed(2)}% in 2017
                        and {returns2016.toFixed(2)}% in 2016. Powered by Artificial Intelligence forecasting, this
                        performance strongly exceeds the 6-7% average returns typically expected from the stock market.
                        <br /><br />
                    </p>
                    <p>
                        Join us to better your returns, save on fees, and moderate your risk.
                        Sign up for a 30-day free trial without any obligations.
                    </p>
                    <Disclaimer><sup>*</sup>Past performance is not neccesarily indicative of future results.</Disclaimer>
                </div>
                <DualBarChart
                    primaryStatistic={Math.floor(winRatio)}
                    secondaryStatistic={59}
                    primaryName={planName}
                    secondaryName="Market"
                    primaryHeight={Math.floor(winRatio)}
                    secondaryHeight={59}
                    description="Winners in %"
                    unit="%"
                />
            </Beside>
        </Section>
    )
}

Introduction.defaultProps = {
    winRatio: 90,
    portfolioReturn: 500,
    planName: 'entry',
}

Introduction.propTypes = {
    winRatio: PropTypes.number,
    portfolioReturn: PropTypes.number,
    planName: PropTypes.string,
}

export default Introduction
