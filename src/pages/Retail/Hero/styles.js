import styled from 'react-emotion'
import { keyframes } from 'emotion'
import Slider from 'react-slick'

// This returns a animation
const typedjsBlink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
`

export const HeroContainer = styled.div`
    position: relative;
    height: 650px;
`

export const Bold = styled.span`
    font-weight: bold;
`

export const Overlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 4;
    background: -moz-linear-gradient(top,  rgba(0,4,56,0.2) 30%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,4,56,0.2) 30%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,4,56,0.2) 30%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d000438', endColorstr='#007db9e8',GradientType=0 ); /* IE6-9 */
`

export const Content = styled.div`
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    width: 100%;
    max-width: calc(1160px + 64px);
    margin: 0 32px;
    .text-content {
        color: #fff;
        max-width: calc(100% - 80px);
        z-index: 5;
        width: 100%;
        max-width: 1224px;
        margin: 0 32px;
    }
    .type-wrap {
        font-weight: 700;
        font-size: 2.5em;
        text-shadow: 0 2px 2px rgba(0,0,0,.3);
    }
    h1 {
        font-size: 2em;
        font-weight: 100;
        text-shadow: 0 2px 2px rgba(0,0,0,.3);
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
`

export const SliderImage = styled.div`
    height: calc(100vh - 120px);
    max-height: 650px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${props => props['data-image']});
    width: 100%;
`

export const StyledSlider = styled(Slider)`
    position: relative;
    height: 100%;
    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;

    .slick-list
    {
        position: relative;
        height: 100%;
        display: block;
        overflow: hidden;

        margin: 0;
        padding: 0;
    }
    .slick-list:focus
    {
        outline: none;
    }
    .slick-list.dragging
    {
        cursor: pointer;
        cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list
    {
        -webkit-transform: translate3d(0, 0, 0);
           -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
             -o-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
    }

    .slick-track
    {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        display: block;
    }
    .slick-track:before,
    .slick-track:after
    {
        display: table;

        content: '';
    }
    .slick-track:after
    {
        clear: both;
    }
    .slick-loading .slick-track
    {
        visibility: hidden;
    }

    .slick-slide
    {
        float: left;

        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide
    {
        float: right;
    }
    .slick-slide img
    {
        height: 100%;
        display: block;
    }
    .slick-slide.slick-loading img
    {
        display: none;
    }
    .slick-slide.dragging img
    {
        pointer-events: none;
    }
    .slick-initialized .slick-slide
    {
        display: block;
    }
    .slick-loading .slick-slide
    {
        visibility: hidden;
    }
    .slick-vertical .slick-slide
    {
        display: block;

        height: auto;

        border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }

    /* Arrows */
    .slick-prev,
    .slick-next
    {
        font-size: 0;
        line-height: 0;

        position: absolute;
        top: 50%;

        display: block;

        width: 20px;
        height: 20px;
        padding: 0;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);

        cursor: pointer;

        color: transparent;
        border: none;
        outline: none;
        background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus
    {
        color: transparent;
        outline: none;
        background: transparent;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before
    {
        opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before
    {
        opacity: .25;
    }

    .slick-prev:before,
    .slick-next:before
    {
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;

        opacity: .75;
        color: white;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev
    {
        left: -25px;
    }
    [dir='rtl'] .slick-prev
    {
        right: -25px;
        left: auto;
    }
    .slick-prev:before
    {
        content: '←';
    }
    [dir='rtl'] .slick-prev:before
    {
        content: '→';
    }

    .slick-next
    {
        right: -25px;
    }
    [dir='rtl'] .slick-next
    {
        right: auto;
        left: -25px;
    }
    .slick-next:before
    {
        content: '→';
    }
    [dir='rtl'] .slick-next:before
    {
        content: '←';
    }

    /* Dots */
    .slick-dotted.slick-slider
    {
        margin-bottom: 30px;
    }

    .slick-dots
    {
        position: absolute;
        bottom: -25px;

        display: block;

        width: 100%;
        padding: 0;
        margin: 0;

        list-style: none;

        text-align: center;
    }
    .slick-dots li
    {
        position: relative;

        display: inline-block;

        width: 20px;
        height: 20px;
        margin: 0 5px;
        padding: 0;

        cursor: pointer;
    }
    .slick-dots li button
    {
        font-size: 0;
        line-height: 0;

        display: block;

        width: 20px;
        height: 20px;
        padding: 5px;

        cursor: pointer;

        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
    }
    .slick-dots li button:hover,
    .slick-dots li button:focus
    {
        outline: none;
    }
    .slick-dots li button:hover:before,
    .slick-dots li button:focus:before
    {
        opacity: 1;
    }
    .slick-dots li button:before
    {
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;

        position: absolute;
        top: 0;
        left: 0;

        width: 20px;
        height: 20px;

        content: '•';
        text-align: center;

        opacity: .25;
        color: black;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before
    {
        opacity: .75;
        color: black;
    }
`
