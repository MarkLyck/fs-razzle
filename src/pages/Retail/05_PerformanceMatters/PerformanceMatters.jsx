import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Comparison from './Comparison'

const PerformanceMatters = () => (
    <Section data-offwhite>
        <SectionTitle>Why performance matters</SectionTitle>
        <p>
            Assume that you would like to get an ~18% yearly return. After all, who would not? Through the
            effects of compounding this would be much, much more rewarding than the standard 6% you normally
            expect from stocks. Example in a tax free account:
        </p>
        <Comparison />
        <p>
            So you see, 18% in this example is 25 times better than 6%. Compounding is an exponential function,
            that makes time work for you.<br /><br />

            Certainty of any future rate of return is impossible, since the future has not happened yet. However,
            we could examine 3 different ways in which it might have been possible to obtain similar results historically:<br /><br />

            1) Using leverage 2 times equity. That might have provided the return in good years, but a crisis year
            likely would have destroyed the capital. Risk is simply too high.<br /><br />

            2) A hedge fund with 18% return from inception, likely indicates high fees, e.g. 2% of capital + 20% of results.
            Implied leverage means a higher risk proposition.<br /><br />

            3) Or, you could simply have used Formula Stocks. 18% was the average return over the last 50 years. No leverage.
            Low fee.
        </p>
    </Section>
)

export default PerformanceMatters
