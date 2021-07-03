export default class AlphaVantage {
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
