import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'

const RiskManagement = () => (
    <Section>
        <SectionTitle>Risk management</SectionTitle>
        <p>
            Formula Stocks moderates risk, and we believe it yields a lower degree of risk than passive stock market investments.
            We prefer situations where the perceived reward is significantly larger than the perceived risk, or we have some form of
            margin of safety.<br /><br />

            One way to measure the risk of using Formula Stocks' Entry product, is to look at its win/loose ratio: 90% of all
            historical investments have been successful. This is highly unusual and compares to 59% elsewhere.<br /><br />

            Another way is the so-called Gain-to-Pain Ratio, which measures exactly what the name indicates. It is 1.318 for Entry,
            which indicates far more gain than pain.<br /><br />

            The Sortino Ratio is yet another way to measure risk. It is 3.017 for Formula Stocks Entry, indicating high reward and
            low risk.<br /><br />

            We can also examine the average gain from a winning stock which is +65%, while the average loss from a losing stock is
            only -18%. Add to this that Entry also wins 90.08% of the time and only looses 9.92% of the time. This leads us to a
            mathematical expectation of (0.90 * 65) - (0.10 * 18) = +56.77%. Taking an average of 2.24 years we correct for this to
            get an expected annualized return of 25.34%.
        </p>
    </Section>
)

export default RiskManagement
