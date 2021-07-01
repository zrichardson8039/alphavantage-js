import { IIntradayQuote, IQuote } from "../core/interfaces";

export interface ICryptoExchangeRate {
  function: string;
  from_currency: string;
  to_currency: string;
  apikey: string;
}

export interface ICryptoQuote extends IQuote {
  market: string;
}

export interface ICryptoIntraday extends IIntradayQuote {
  market: string;
}