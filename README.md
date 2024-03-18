## intro

This is a simple webapp that gets the top 5 cryptocurrencies from the CoinGecko API, you are able to select the ones you want to follow and it will save them to local storage.

## Technologies used

I've used Create T3 App to create the project, it uses React, TypeScript, and TailwindCSS. As it has a good and clean structure to start a project. Axios was used to make the requests to the API and Redux to manage the state of the app.

## How to run project locally

1. Install pnpm

```bash
npm install -g pnpm
```

2. Install dependencies

```bash
pnpm install
```

3. Run the app

```bash
pnpm start
```

4. Open your browser and go to `http://localhost:3000`

! Don't refresh the page too many times, because the API has a limit of requests per minute. (although it saves to local storage there might be a time that the browser decides to clear it.)
