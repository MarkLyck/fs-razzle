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
    const markup = renderStylesToString(renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    ))

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
            <html lang="">
            <head>
                <title>Formula Stocks</title>

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="manifest" href="/manifest.json">
                
                <meta name="theme-color" content="#ED5B5F">
                <meta name="description" content="Formula Stocks">
  
                <meta property="og:type" content="website">
                <meta property="og:description" content="Beat the stock market using quantitative analysis.">
                <meta property="og:site_name" content="Formula Stocks">
                <meta property="og:locale" content="en_us">
                <meta property="og:url" content="Formula Stocks">
                <meta property="og:title" content="Formula Stocks">

                ${assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''}
                ${process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`}
            </head>
            <body>
                <div id="root">${markup}</div>
            </body>
        </html>`
      )
    }
  })

export default server