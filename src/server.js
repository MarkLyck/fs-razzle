import App from './App'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}
    const markup = renderStylesToString(
      renderToString(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      )
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
            <html lang="en">
            <head>
                <title>Formula Stocks</title>

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#4ea4f2">
                <link rel="shortcut icon" href="/favicons/favicon.ico">
                <meta name="apple-mobile-web-app-title" content="Formula Stocks">
                <meta name="application-name" content="Formula Stocks">
                <meta name="msapplication-TileColor" content="#2d89ef">
                <meta name="msapplication-config" content="/favicons/browserconfig.xml">
                <meta name="theme-color" content="#ffffff">
                <link rel="manifest" href="/manifest.json">
                
                <meta name="description" content="Formula Stocks">
                <meta property="og:type" content="website">
                <meta property="og:description" content="Beat the stock market using quantitative analysis.">
                <meta property="og:site_name" content="Formula Stocks">
                <meta property="og:locale" content="en_us">
                <meta property="og:url" content="Formula Stocks">
                <meta property="og:title" content="Formula Stocks">

                <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700" rel="stylesheet">

                ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
                ${
                  process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.vendor.js}" defer></script>`
                    : `<script src="${assets.vendor.js}" defer crossorigin></script>`
                }
                ${
                  process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.vendors.js}" defer></script>`
                    : `<script src="${assets.vendors.js}" defer crossorigin></script>`
                }
                ${
                  process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`
                }
                
            </head>
            <body>
                <div id="root">${markup}</div>

                <!-- Intercom -->
                <script>
                  (function() {var w=window;var ic=w.Intercom;
                  if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{
                  var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};
                  w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;
                  s.src='https://widget.intercom.io/widget/i194mpvo';var x=d.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{
                  w.addEventListener('load',l,false);}}})()
                </script>

                <!-- Hotjar -->
                <script>
                  (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:399997,hjsv:5};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
                </script>

                <!-- Google Analytics -->
                <script>
                  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                  ga('create', 'UA-68151102-1', 'auto');
                  ga('send', 'pageview');
                </script>
            </body>
        </html>`
      )
    }
  })

export default server
