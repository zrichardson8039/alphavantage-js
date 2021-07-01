import { IIntradayQuote, IQuote } from "../core/interfaces";

export interface IForexExchangeRate {
  function: string;
  from_currency: string;
  to_currency: string;
  apikey: string;s
}

export interface IForexQuote extends IQuote {
  from_symbol: string;
  to_symbol: string;
}

export interface IForexIntraday extends IIntradayQuote {
  from_symbol: string;
  to_symbol: string;
}