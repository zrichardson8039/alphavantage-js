# AlphaVantage

This is a wrapper for the [AlphaVantage API](https://www.alphavantage.co/documentation/) that makes use of TypeScript and exports various enums and interfaces from each respective model for easier typing. I have no affiliation with AlphaVantage and no attribution is required to use this library.

## Installation

```bash
npm install @zrichardson/alphavantage

yarn add @zrichardson/alphavantage
```

## Usage

The AlphaVantage module exports a class that can be instantiated with your API key to enable you to make API calls without having to provide your key on every call.

```javascript
import AlphaVantage from '@zrichardson/alphavantage';

const alpha = AlphaVantage('your-api-key');

alpha.cryptocurrencies.exchangeRate({
  apikey: 'your-api-key',
  symbol: 'BTC',
});
```

Alternatively, you may import methods individually and call them without first instantiating an AlphaVantage object.

```javascript
import { exchangeRate } from '@zrichardson/alphavantage/cryptocurrencies';

exchangeRate({
  apikey: 'your-api-key',
  symbol: 'BTC',
});
```

## Cryptocurrencies

## Forex

## Fundamentals

## Stocks

## Technicals
