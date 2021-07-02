export class AlphaVantage {
  private apikey;

  constructor(apikey) {
    this.apikey = apikey;
  }

  api(fn, params) {
    fn({
      ...params,
      apikey: this.apikey
    });
  }
}
