import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import DualBarChart from 'components/Charts/DualBarChart'
import DualUpDownChart from 'components/Charts/DualUpDownChart'

const Statistics = ({ winRatio, planName, avgGain, avgLoss }) => (
    <Section>
        <SectionTitle>Statistics</SectionTitle>
        <Beside>
            <Left data-center>
                <DualBarChart
                    primaryStatistic={Math.floor(winRatio) || 90}
                    secondaryStatistic={59}
                    primaryName={planName || 'entry'}
                    secondaryName="Market"
                    primaryHeight={Math.floor(winRatio) || 90}
                    secondaryHeight={59}
                    description="Winners in %"
                    unit="%"
                />
                <p>
                    Historically, 89-92% of our recommendations have been successful. If you had bought random high-quality stocks,
                    only approx. 59% of these would have earned a positive return. A staggering difference.
                </p>
            </Left>
            <Right data-center>
                <DualBarChart
                    primaryStatistic={36}
                    secondaryStatistic={12}
                    primaryName={planName || 'entry'}
                    secondaryName="Market"
                    primaryHeight={90}
                    secondaryHeight={30}
                    description="Outperforming years"
                />
                <p>
                    Recommendations and model portfolio are based on timeless and proven investment principles,
                    mathematical probabilities, and sound logic. The model portfolio has outperformed the S&P 500
                    in 75% of all years.
                </p>
            </Right>
        </Beside>
        <Beside>
            <Left data-center>
                <DualUpDownChart
                    primaryStatistic={Math.floor(avgGain) || 0}
                    secondaryStatistic={Math.floor(avgLoss) || 0}
                    primaryName="Win"
                    secondaryName="Loss"
                    primaryHeight={Math.floor(avgGain) || 0}
                    secondaryHeight={Math.floor(avgLoss) || 0}
                    unit="%"
                    description="Avg. win/loss per stock"
                />
            </Left>
            <Right data-center>
                <DualBarChart
                    primaryStatistic={Math.floor(winRatio) || 0}
                    secondaryStatistic={100 - Math.floor(winRatio) || 0}
                    primaryName="Wins"
                    secondaryName="Losses"
                    primaryHeight={Math.floor(winRatio) || 0}
                    secondaryHeight={100 - Math.floor(winRatio) || 0}
                    unit="%"
                    description="Win/loss ratio"
                />
            </Right>
        </Beside>
        <p>
            We specialize in high-probability investments – a high probability of long-term gain combined with a low probability of
            loss. We prefer to buy good businesses at fair prices with a margin of safety, shielding us from some downside,
            while enjoying the upside of owning businesses that earn a meaningful return on capital.
        </p>
    </Section>
)

Statistics.defaultProps = {
    avgGain: 0,
    avgLoss: 0,
}

Statistics.propTypes = {
    winRatio: PropTypes.number,
    avgGain: PropTypes.number,
    avgLoss: PropTypes.number,
    planName: PropTypes.string,
}

export default Statistics
