import { injectGlobal } from 'emotion'

/* eslint-disable max-len */

injectGlobal`
    @font-face {
        font-family: 'proxima-nova';
        font-display: fallback;
        src: url('/fonts/proxima-nova/ProximaNova-Regular.otf');
        font-weight: 400;
    }
    @font-face {
        font-family: 'proxima-nova';
        font-display: fallback;
        src: url('/fonts/proxima-nova/ProximaNova-Light.otf');
        font-weight: 100;
    }
    @font-face {
        font-family: 'proxima-nova';
        font-display: fallback;
        src: url('/fonts/proxima-nova/ProximaNova-Bold.otf');
        font-weight: 700;
    }
    @font-face {
        font-family: 'proxima-nova';
        font-display: fallback;
        src: url('/fonts/proxima-nova/ProximaNova-Semibold.otf');
        font-weight: 600;
    }
    @font-face {
        font-family: 'BLOKK';
        font-display: block;
        src: url('/fonts/BLOKK/BLOKKNeue-Regular.otf');
        font-weight: 400;
    }

    a[href="http://www.amcharts.com"] {
        display: none !important;
    }

    /**
     * YUI 3.5.0 - reset.css (http://developer.yahoo.com/yui/3/cssreset/)
     * https://cssreset.com/
     * Copyright 2012 Yahoo! Inc. All rights reserved.
     * http://yuilibrary.com/license/
     */
    /*
        TODO will need to remove settings on HTML since we can't namespace it.
        TODO with the prefix, should I group by selector or property for weight savings?
    */
    html {
        font-family: 'proxima-nova', sans-serif;
        box-sizing: border-box;
    }
    body{
        overflow-x: hidden;
    }
    /*
        TODO remove settings on BODY since we can't namespace it.
    */
    /*
        TODO test putting a class on HEAD.
            - Fails on FF.
    */
    body,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    code,
    form,
    fieldset,
    legend,
    input,
    textarea,
    p,
    blockquote,
    th,
    td {
        margin:0;
        padding:0;
    }
    table {
        border-collapse:collapse;
        border-spacing:0;
    }
    fieldset,
    img {
        border:0;
    }
    /*
        TODO think about hanlding inheritence differently, maybe letting IE6 fail a bit...
    */
    address,
    caption,
    cite,
    code,
    dfn,
    em,
    strong,
    th,
    var {
        font-style:normal;
        font-weight:normal;
    }
    
    ol,
    ul {
        list-style:none;
    }
    
    caption,
    th {
        text-align:left;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size:100%;
        font-weight:normal;
    }
    q:before,
    q:after {
        content:'';
    }
    abbr,
    acronym {
        border:0;
        font-variant:normal;
    }
    /* to preserve line-height and selector appearance */
    sup {
        vertical-align:text-top;
    }
    sub {
        vertical-align:text-bottom;
    }
    input,
    textarea,
    select {
        font-family:inherit;
        font-size:inherit;
        font-weight:inherit;
    }
    /*to enable resizing for IE*/
    input,
    textarea,
    select {
        *font-size:100%;
    }
    /*because legend doesn't inherit in IE */
    legend {
        color:#000;
    }

    a {
        text-decoration: none;
        color: #27A5F9;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    p {
        line-height: 1.5;
    }

    button {
        outline: none;
        &:hover {
            cursor: pointer;
        }
    }

    .modal-overlay {
        left: 0;
        position: fixed;
        top: 0;
        background: rgba(0,0,0, 0.5);
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    /* Slider */
    .slick-slider
    {
        position: relative;

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
    }

    .slick-list
    {
        position: relative;

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

        display: block;
        margin-left: auto;
        margin-right: auto;
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
        display: none;
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
    /* Slider */
.slick-loading .slick-list
{
    background: #fff url('./ajax-loader.gif') center center no-repeat;
}

/* Icons */
@font-face
{
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;

    src: url('./fonts/slick.eot');
    src: url('./fonts/slick.eot?#iefix') format('embedded-opentype'), url('./fonts/slick.woff') format('woff'), url('./fonts/slick.ttf') format('truetype'), url('./fonts/slick.svg#slick') format('svg');
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
