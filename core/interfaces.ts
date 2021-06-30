export interface IRequest {
  function: string;
  symbol: string;
  apikey: string;
}

export interface IQuote extends IRequest {
    market: string;
}

export interface IIntradayQuote extends IQuote {
    interval: string;
    slice?: string;
    outputsize?: string;
    datatype?: JSON;
}

export interface ITechnical extends IRequest {
  interval: string;
  time_period: number;
  series_type: string;
}

export interface ICurrencyExchangeRate {
  function: string;
  from_currency: string;
  to_currency: string;
  apikey: string;
}