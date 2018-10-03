import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'

const RiskManagement = ({ winRatio, avgGain, avgLoss, sortinoRatio }) => {
  const winRatioDecimal = (winRatio / 100).toFixed(2)
  const calculationResult = (winRatioDecimal * avgGain - (1 - winRatioDecimal) * avgLoss).toFixed(2)

  const calculation = `(${winRatioDecimal} * ${avgGain.toFixed(2)}) - (${(1 - winRatioDecimal).toFixed(
    2
  )} * ${avgLoss.toFixed(2)})`

  return (
    <Section>
      <SectionTitle>Risk management</SectionTitle>
      <p>
        Formula Stocks moderates risk, and we believe it yields a lower degree of risk than passive stock market
        investments. We prefer situations where the perceived reward is significantly larger than the perceived risk, or
        we have some form of margin of safety.
        <br />
        <br />
        One way to measure the risk of using Formula Stocks' Entry product, is to look at its win/loose ratio:{' '}
        <b>+{winRatio.toFixed(2)}%</b> of all historical investments have been successful. This is highly unusual and
        compares to 59% elsewhere.
        <br />
        <br />
        Another way is the so-called Gain-to-Pain Ratio, which measures exactly what the name indicates. It is 1.318 for
        Entry, which indicates far more gain than pain.
        <br />
        <br />
        The Sortino Ratio is yet another way to measure risk. It is {sortinoRatio.toFixed(4)} for Formula Stocks Entry,
        indicating high reward and low risk.
        <br />
        <br />
        We can also examine the average gain from a winning stock which is +{avgGain.toFixed(2)}
        %, while the average loss from a losing stock is only -{avgLoss.toFixed(2)}
        %. Add to this that Entry also wins {winRatio.toFixed(2)}% of the time and only loses{' '}
        {(100 - winRatio).toFixed(2)}% of the time. This leads us to a mathematical expectation of {calculation} =
        <b> +{calculationResult}%</b>. Taking an average of 2.2 years we correct for this to get an expected annualized
        return of <b>+{(calculationResult / 2.2).toFixed(2)}%</b>.
      </p>
    </Section>
  )
}

export default RiskManagement
