import cryptocurrencies from './cryptocurrencies';
import forex from './forex';
import fundamentals from './fundamentals';
import stocks from './stocks';
import technicals from './technicals';


export class AlphaVantage {
  private apikey;

  constructor(apikey) {
    this.apikey = apikey;
  }

  api(fn, params) {
    return Promise.resolve(fn({
      ...params,
      apikey: this.apikey
    }));
  }
}

export default {
  cryptocurrencies,
  forex,
  fundamentals,
  stocks,
  technicals,
};
