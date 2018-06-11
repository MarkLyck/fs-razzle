![repo-banner](https://github.com/MarkLyck/fs-razzle/blob/master/public/media/icons/logo_horizontal.svg)

[![Build Status](https://travis-ci.org/MarkLyck/fs-razzle.svg?branch=master)](https://travis-ci.org/MarkLyck/fs-razzle)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Formula Stocks is a stock recommendation service, that gives you recommendations on what to buy, for how much and when you should sell it. These recommendations are based on a deep learning algorithm that selects winning stocks +90% of the time. With an average annual interest rate of 20-35% depending on the product you choose.

![screenshot](https://github.com/MarkLyck/fs-razzle/blob/master/public/media/images/screenshots/suggestions.png)

This is currently in development for version 2, which is NOT live yet.

To see the current production version see here: [https://formulastocks.com](https://formulastocks.com).

### Technologies used

- React 16.3 (very little state-management needed, so the new Context will do over Redux for this application)
- GraphQL (with GraphCool as a backend, (to be moved to Prisma))
- react-apollo to integrate with GraphQL (handles all CRUD on the graphQL endpoint, no need for state management for this.)
- now.zeit for deployments
- emotion.sh for css-in-js (simular to styled-components but faster and the dynamic styles are great)
- fontAwesome 5 Pro (for icons)
- fecha for time management as it's much smaller than Moment, and we mostly just need it for formatting.
- draft.js for rich-text-editing (article system)
- Immutable.js (to be added after MVP)
- Flow.js (to be added after MVP, ideally ASAP)

## Quick Start

```bash
git clone https://github.com/MarkLyck/fs-razzle.git
cd fs-razzle
yarn && yarn start
```

Then open http://localhost:3000/ to see the application.

Useful commands:

### `npm start` or `yarn start`

Runs the project in development mode.  
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

### `npm run build` or `yarn build`

Builds the app for production to the build folder.

The build is minified and the filenames include the hashes, ready for deployment

### `npm run start:prod` or `yarn start:prod`

Runs the compiled app in production.

You can again view the application at `http://localhost:3000`

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm start -- --inspect` or `yarn start -- --inspect`

To debug the node server, you can use `razzle start --inspect`. This will start the node server and enable the inspector agent. For more information, see [this](https://nodejs.org/en/docs/inspector/).

### `npm start -- --inspect-brk` or `yarn start -- --inspect-brk`

To debug the node server, you can use `razzle start --inspect-brk`. This will start the node server, enable the inspector agent and Break before user code starts. For more information, see [this](https://nodejs.org/en/docs/inspector/).

---

#### Author

- [Mark Lyck](https://twitter.com/marklyck)
