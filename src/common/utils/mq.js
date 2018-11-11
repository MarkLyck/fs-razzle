import { css } from 'emotion'

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 'max-width: 576px',
  medium: 'max-width: 768px',
  large: 'max-width: 992px',
  xLarge: 'max-width: 1200px',
  // String values will be used as is
  tallPhone: '(max-width: 360px) and (min-height: 740px)',
}

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

export default mq
