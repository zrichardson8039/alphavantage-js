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
    outputsize?: string;
    datatype?: JSON;
}