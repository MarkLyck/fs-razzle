import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { overlayClass, AppBar, fullScreenModalStyles, LegalContainer } from '../styles'
import { List } from './styles'

const FAQ = ({ open, hide }) => (
  <Modal isOpen onRequestClose={() => {}} overlayClassName={overlayClass} css={fullScreenModalStyles}>
    <AppBar>
      <h2>Frequently Asked Questions</h2>
      <button onClick={hide}>
        <FontAwesomeIcon icon={['far', 'times']} />
      </button>
    </AppBar>
    <LegalContainer>
      <h3>What do I get with a Formula Stocks subscription?</h3>
      <p>
        With a Formula Stocks subscription you get access to a secure dashboard (login area accessible via our website).
        Here you can follow the development in our portfolio of carefully selected stocks. On a regular basis we provide
        new stock purchase and sale recommendations (and additional information about the given stocks), which you can
        use to buy/sell stocks via your own broker/bank.
      </p>

      <h3>How do I begin to invest?</h3>
      <div>
        It depends on how you wish to use Formula Stocks. There are multiple ways.
        <List>
          <li>Mirror the model portfolio, and update your stock portfolio once a month accordingly.</li>
          <li>Use Formula Stocks recommendations when they appear and build a portfolio step by step.</li>
          <li>
            The experienced investor may also alternatively choose to perform additional analysis, effectively using
            Formula Stocks as a high-quality generator of vetted investment ideas.
          </li>
        </List>
      </div>

      <h3>How often are new stocks recommended for purchase or sale?</h3>
      <p>
        New recommendations generally appear on a weekly basis. Accessing these once a month is sufficient for most
        investors. The number of weekly recommendations depends on market conditions. Formula Stocks looks for great
        opportunities in the markets; sometimes we locate only few, sometimes we locate many.
      </p>

      <h3>How many new investment candidates are available?</h3>
      <p>
        The availability of new investment candidates is a function of the available investments we can locate in the
        markets with a sufficient degree of certainty. We buy stocks like you buy steaks in the supermarket. We
        generally prefer high quality and low prices. The market does not always accommodate our preferences, and the
        number of candidates does vary greatly with the price level of the general market. If pickings are slim, we may
        prefer a partial cash position for a while.
      </p>

      <h3>How often do I need to think about my portfolio?</h3>
      <p>
        You need to check for recommendations or alternatively rebalance your portfolio once a month. At least, if you
        want your portfolio to match the Formula Stocks portfolio exactly. This is not a requirement, though. A loosely
        managed portfolio or simply single, handpicked investments can perform just as well. We recommend a monthly
        checkup. If your personality is more in tune with frequent attention to investments, our purchase
        recommendations are updated on a weekly basis. The strategies trade once a month. (This allows one full month
        for accumulation or distribution of larger positions without unduly impacting price).
      </p>

      <h3>Do I enter my other portfolio positions in the app/website?</h3>
      <p>
        No. Formula Stocks is not aware of your actual positions. Formula Stocks displays an optimized model portfolio
        per plan and tracks its performance over time.
      </p>

      <h3>What does a Formula Stocks purchase recommendation include?</h3>
      <p>
        Purchase recommendations are vetted from a quantitative, value, growth, and business analytics standpoint.
        Artificial Intelligence (deep learning) is applied within this process and more than 400 primary data points are
        considered by our Business Analytics software. When you receive a recommendation, you can access certain
        quantitative data. We do not write up subjective investment opinions, we are preferential to hard quantitative
        fact, statistics, business analysis, probability estimation and math in general. We generally outperform
        subjective investment opinions using our approach, as we avoid bias.
      </p>

      <h3>How does Formula Stocks compare to passive index-investing?</h3>
      <p>
        Extremely favorably. Passive investment strategies, or index-investing, is simply investing in more or less all
        stocks available (or a subset of these). The outcome can only be average by definition. Since it is a given,
        that out of 5.000 stocks, one is the best, and one is the worst, and all of the other fall somewhere in between,
        and since it is possible for us to quantify to a reasonable extent, which is in either end of this spectrum, a
        priori, it is a deeply flawed strategy to simply invest in all stocks. Surely, it makes sense to invest more
        intelligently, allocating capital towards good businesses and avoiding bad businesses. A superficial argument
        can be made for passive investment on the basis of not requiring resources or thinking hence low fees. But for
        informed participants, this argument is negated completely by the performance attainable by an active strategy
        such as Formula Stocks which equally operates with a low fee structure. It makes no sense to aim simply for an
        average return, when it is possible to achieve an above-average return, net of fees at a risk-level which has
        generally been lower than that of passive investing.
      </p>

      <h3>Do you have differentiated products?</h3>
      <p>
        Yes. ENTRY is our retail product. PREMIUM is a premium product which has generally delivered higher returns. For
        CIOs, CEOs, accredited investors, family offices we offer BUSINESS as a niche product with emphasis on high
        performance and extremely high reward vs. low risk. For institutional capital needs please inquire about our
        FUND product which has particular emphasis on scalability and moderate volatility. Each product differ
        materially, and please be aware that www.formulastocks.com display statistics for the Entry product only.
      </p>

      <h3>Which and how many stocks are covered by your service?</h3>
      <p>
        We do not supply a full list of all the potential stocks analyzed by our systems. It covers many thousands of
        stocks, however, ranging from micro-cap to mega-cap companies in all sectors within the United States and
        Canada. You can invest in these regardless of your country of residence.
      </p>

      <h3>How much can I expect in investment returns?</h3>
      <p>
        Formula Stocks can, like everyone else, not answer this question. We can optimize the odds for you to outperform
        the market averages. Historically, we have tended to outperform the market averages in both bear and bull
        markets. What we do is to improve the odds very significantly. But we do not control the outcome. The longer one
        is invested with Formula Stocks, however, the better the odds of success, as the outcomes converge more and more
        with the positively skewed odds over time.
      </p>

      <h3>What about volatility?</h3>
      <p>
        Formula Stocks selections typically have smaller drawdowns over time than the S&P 500 and higher net returns.
        But due to smaller portfolio sizes and more concentration, the results mar possibly be more volatile in the
        shorter term. Refer to the Omega risk/reward benchmark found elsewhere on our website for more detail.
      </p>

      <h3>Can I expect a quick return on my investment?</h3>
      <p>
        Generally no. It does happen that recommendations go straight up. But most of the time they do not. The creation
        of business value takes time, measured in quarters or years. Formula Stocks does not speculate on timing-related
        issues. We buy real businesses when it makes good sense to buy them, and we hold them until sufficient value has
        been created in the business or a better opportunity reveals itself. We may occasionally be early, and we may
        occasionally not buy at the very bottom; thus, one may well experience an initial waiting period before a
        positive return emerges. Either way, patience and the ability to stick to the plan, enduring some volatility at
        times, are significant elements of achieving long-term success in any form of investing. This is well known to
        long-term value investors: Short-term volatility may precede long-term gain.
      </p>

      <h3>What risks do I incur when investing with Formula Stocks?</h3>
      <p>
        It is difficult to give a precise answer to this question. Generally, one incurs the risk of investing in stocks
        in a general sense. However, this risk is somewhat reduced, based upon the fact that Formula Stocks
        recommendations have much better than average odds of success and a reasonable margin of safety. At the same
        time, our portfolios are more concentrated than, say, the S&P 500. Consequently, our portfolios are sometimes
        more volatile than a basket of 500 stocks. However, we do not consider volatility as risk, in a strict sense,
        although some investors do. (We have yet to meet an investor who frowns upon volatility to the upside when
        experiencing outsized gains). Please refer to the Omega graph found on our website for a comparison of
        risk/reward relative to the general market. Any investment involves risk. See our Terms and Conditions.
      </p>

      <h3>What can I save using Formula Stocks instead of other products?</h3>
      <p>
        Formula Stocks offers a low, flat, and transparent fee, which does not scale with volume. What you can save
        depends on what you pay in fees elsewhere, and the degree with which Formula Stocks products outperform your
        alternative choices. This can be complicated to calculate, as many funds have a number of different costs, some
        of which can be grouped into sales charges, expense ratios, transaction commissions, and redemption fees. Hedge
        funds and alternative investment vehicles often include a large performance fee as well. Formula Stocks is
        usually by far the less expensive method, sometimes by a very large factor. It however depends on the amount of
        capital deployed. From a saver’s perspective, the Formula Stocks model can be seen as an IKEA-like model. You
        buy inexpensive prefabricated parts (strategy and technology), do the final assembly yourself (purchase and sale
        of equities), and obtain very significant savings in the process.
      </p>

      <h3>Do you offer an investment fund/ETF with which one can invest directly?</h3>
      <p>No, not at this point in time. Please contact us if you are interested.</p>

      <h3>How do I pay for a membership?</h3>
      <p>Usually with a credit card, although other options exist for BUSINESS and FUND members.</p>

      <h3>Is there a trial period available?</h3>
      <p>We offer a free trial for a one-month period with full access to our ENTRY plan.</p>

      <h3>Is there a minimum period of subscription?</h3>
      <p>
        No. ENTRY and PREMIUM products are monthly subscriptions, whereas BUSINESS and FUND are yearly subscriptions.
        Once a period begins, it is non-refundable. You can cancel your subscription any time before a new period
        starts.
      </p>

      <h3>
        Do I have to choose the portfolio suggested by Formula Stocks, or can I continue with my current portfolio?
      </h3>
      <p>This is entirely up to you. You can freely mix and match with any other portfolio, stock, or product.</p>

      <h3>Can your products be used in any country?</h3>
      <p>
        Yes, absolutely. We cater to an international audience, and the stocks we prefer are available for purchase in
        all countries.
      </p>

      <h3>Is your stock selection USA only?</h3>
      <p>
        Not at all. Formula Stocks analyzes most public US companies, a significant part of Canadian companies, and some
        larger international companies with an ADR (American Depositary Receipt). These are international companies
        which trade on the US exchanges, as if they were US stocks, even though the company itself may be located in any
        country in the world. These stocks can be traded very effectively from anywhere, no matter where you a located
        geographically.
      </p>

      <h3>What about currencies?</h3>
      <p>
        We use USD as a base currency for the sake of simplicity. No matter what your local currency is, you can easily
        use Formula Stocks anywhere in the world.
      </p>

      <h3>Does Formula Stocks offer direct brokerage services or investment advisory services?</h3>
      <p>No.</p>

      <h3>How does the Formula Stocks portfolios tie in with my existing asset allocation?</h3>
      <p>
        Formula Stocks offer sound diversification both in terms of stocks, sectors, and strategies. As you have full
        access to the Formula Stocks portfolio, you can judge the exact portfolio composition for yourself. Adding
        high-probability investment ideas should be a plus for any portfolio. You can either simply run your portfolio
        as a 1:1 mirror of our model portfolio, or freely mix and match specific investments with your pre-existing
        selections, in order to match your preferred asset allocation model.
      </p>

      <h3>Does Formula Stocks short stocks?</h3>
      <p>No.</p>

      <h3>Relatively few active investment managers beat the market averages. What makes Formula Stocks different?</h3>
      <p>
        We offer something that most investors do not have access to. Our proprietary IIT™ quantifies the risks and
        reward, odds of success, and the presumed future alpha of every investment candidate. It quantifies over 400
        data points about every single business that we analyze. We use artificial intelligence software developed
        through af 15 year timespan, to accurately asses the odds of making any one investment. The AI runs on a
        supercomputer and possesses knowledge that is not available elsewhere. Deep learning is a process of learning
        from the consequences of ones actions, which in turn enables one to improve future decisionmaking. Historically
        this has lead us to outperform the market returns 88% of the time on a yearly basis (backtested 1970-2009,
        actual returns 2009-2018, vs. S&P500).
      </p>

      <h3>Why are there fewer current portfolio positions than indicated as average?</h3>
      <p>
        The average number of concurrent portfolio positions over time are for Fund: 163, Business: 50, Premium: 96,
        Basic: 177. However, unlike an index fund Formula Stocks does not invest in stocks regardless of conditions. We
        only invest, when we see attractive probabilities for success. This means that the cheaper the markets get, of
        course the more diverse the portfolio becomes. Conversely, when the markets are expensive, fewer good
        investments can be located, and portfolio size tends to decrease. Toward a price peak the number of positions
        dwindle, as they are sold (for a profit), converted into cash, preparing for the next market cycle, when an
        inevitable correction materializes, and the portfolio once again expands.
      </p>

      <h3>How is the model portfolio updated?</h3>
      <p>
        We recalibrate our model portfolio once a month. This involves purchasing new positions, selling existing
        positions, and adjusting position sizes. Once the decisions have been made, we allow for one full month to
        perform the actual trading required; this month is our "trading window" to allow slow accumulation or
        distribution of larger positions, without affecting price much. By using a longer time period, the price impact
        can be minimized. The recommendations are slightly different, as these are updated weekly, and change in content
        more frequently. A recommendation may appear some time before it is included in the model portfolio.
      </p>

      <h3>What are the size limits/AUM limits?</h3>
      <p>
        Memberships ENTRY and PREMIUM are designed for retail, with which relatively low individual AUMs are
        intrinsically expected. BUSINESS is designed for medium size capital, typically a corporation, CEO, CFO,
        accredited or sophisticated investor, etc., and institutional capital is specifically not allowed in this
        context. FUND is designed for institutional capital, capable of very large AUMs. It is important not to attempt
        to use retail or BUSINESS memberships with institutional size capital. The required liquidity is available only
        in the FUND model, with sufficient diversification to satisfy all institutional requirements.
      </p>

      <h3>What about institutional capital?</h3>
      <p>
        Only our FUND membership is designed to handle institutional capital. It should cope with AUM sizes well beyond
        the largest fund AUMs. FUND is designed to maintain an adequate diversification level, with significant
        liquidity available for market operations, which can satisfy institutional requirements, including the ability
        to accumulate or distribute positions without affecting a large market impact. Contact us for further
        information.
      </p>

      <h3>How can you state results from 1970, when Formula Stocks development first began in 2003?</h3>
      <p>
        Our methods are fully quantifiable and built upon a timeless investment philosophy. This means that Formula
        Stocks methods will work on any opportunity set (any set of available stocks at any point in history, both past
        and future), and that the exact results of the past can be quantified with great accuracy. Our input is the
        market opportunity set regardless of time or macro. Our decisionmakring process is based on artificial
        intelligence, and timeless in nature. The output is a set of fully quantifiable business decisions. Tracking the
        financial results of executing these decisions later on is both easy and accurate. Pre-2009 results are
        backtested, results stated post our initial launch in 2009 match actual experience.
      </p>

      <h3>Do you recommend stocks with which you have any form of affiliation or interest?</h3>
      <p>
        Absolutely not. Formula Stocks operates under very strict ethical standards. We will never recommend anything in
        which we have a vested interest. We receive no compensation from any parties. We never sell or allow any third
        parties access to our customers data nor our visitors interaction with our website. Formula Stocks employees are
        allowed to invest using the products for personal retirement purposes, alongside members through the website.
      </p>
    </LegalContainer>
  </Modal>
)

FAQ.propTypes = {
  open: PropTypes.bool,
  hide: PropTypes.func,
}

export default FAQ
