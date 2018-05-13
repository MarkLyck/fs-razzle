import { injectGlobal } from 'emotion'

injectGlobal`
    @font-face {
        font-family: 'proxima-nova';
        src: url('/fonts/proxima-nova/ProximaNova-Regular.otf');
        font-weight: 400;
    }
    @font-face {
        font-family: 'proxima-nova';
        src: url('/fonts/proxima-nova/ProximaNova-Light.otf');
        font-weight: 100;
    }
    @font-face {
        font-family: 'proxima-nova';
        src: url('/fonts/proxima-nova/ProximaNova-Bold.otf');
        font-weight: 700;
    }
    @font-face {
        font-family: 'proxima-nova';
        src: url('/fonts/proxima-nova/ProximaNova-Semibold.otf');
        font-weight: 600;
    }
    @font-face {
        font-family: 'BLOKK';
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
`