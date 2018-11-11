import { css } from 'emotion'
import styled from 'react-emotion'

const altStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    font-size: 2rem;
  }
  h4 {
    margin-top: 16px;
  }
`

export const LoadingContainer = styled.div`
  ${altStyle} svg {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
  }
  h4 {
    color: ${props => props.theme.colors.black};
  }
`

export const FailedContainer = styled.div`
  ${altStyle} margin: 16px;
  color: ${props => props.theme.colors.black};
  border-radius: 6px;
  border: 2px dashed ${props => props.theme.colors.lightGray};
  text-align: center;
`

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  .suggestion-graph {
    height: 100%;
  }
  br {
    display: none;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .ticker-name {
      color: ${props => props.theme.colors.primary};
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
    }
    .SELL-ticker-name {
      color: ${props => props.theme.colors.secondary};
    }
    .balloon-value {
      font-size: 1rem;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
`
/* eslint-disable */
export const GraphOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 24px;
  z-index: 1;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100 */
  background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */

  @media (max-width: 600px) {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fafafa+0,ffffff+100&1+0,0+100 */
    background: -moz-linear-gradient(left, rgba(250, 250, 250, 1) 0%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(250, 250, 250, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(250, 250, 250, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafafa', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
  }
`
