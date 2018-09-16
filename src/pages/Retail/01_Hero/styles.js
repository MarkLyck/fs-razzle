import styled from 'react-emotion'
import { css, keyframes } from 'emotion'

// This returns a animation
const typedjsBlink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
`

export const Title = styled.h1`
  margin-bottom: 16px;
`

const slickStyles = () => css`
  .slick-slide {
    height: 650px;
    max-height: 650px;
  }

  @media (max-width: 800px) {
    .slick-slide {
      height: 400px;
      max-height: 400px;
    }
  }
`

export const HeroContainer = styled.div`
  margin-top: 64px;
  position: relative;
  ${slickStyles};
`

export const Bold = styled.span`
  font-weight: bold;
`
/* eslint-disable */
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4;
  background: -moz-linear-gradient(top, rgba(0, 4, 56, 0.2) 30%, rgba(125, 185, 232, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 4, 56, 0.2) 30%,
    rgba(125, 185, 232, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 4, 56, 0.2) 30%,
    rgba(125, 185, 232, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d000438', endColorstr='#007db9e8',GradientType=0 ); /* IE6-9 */
`
/* eslint-enable */

export const Content = styled.div`
  position: absolute;
  top: 100px;
  z-index: 5;
  margin: 0 32px;
  .text-content {
    color: #fff;
    margin: 0 32px;
  }
  .type-wrap {
    font-weight: 700;
    font-size: 2.5em;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-end;
    p {
      line-height: 1;
    }
  }
  h1 {
    font-size: 2em;
    font-weight: 100;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
  .typed-cursor {
    opacity: 1;
    animation: ${typedjsBlink} 0.7s infinite;
    -webkit-animation: ${typedjsBlink} 0.7s infinite;
    animation: ${typedjsBlink} 0.7s infinite;
  }
  .bold {
    font-weight: bold;
  }

  @media (max-width: 742px) {
    h1 {
      font-size: 1.8rem;
    }
    .type-wrap {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 506px) {
    margin: 0;
    h1 {
      font-size: 1.4rem;
    }
    .type-wrap {
      font-size: 1.4rem;
    }
    .typed-cursor {
      display: none;
    }
  }
`

export const SliderImage = styled.div`
  position: absolute;
  top: 0;
  height: 650px;
  max-height: 650px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;

  @media (max-width: 800px) {
    height: 400px;
    max-height: 400px;
  }
`
