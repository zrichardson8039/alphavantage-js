import { DataType, Interval, OutputSize } from "./enums";

export interface IRequest {
  function: string;
  symbol: string;
  apikey: string;
}

export interface IQuote extends IRequest {
  market?: string;
  outputsize?: OutputSize;
  datatype?: DataType;
}

export interface IIntradayQuote extends IQuote {
  adjusted?: boolean;
  interval: Interval;
  slice?: string;
}

export interface ITechnical extends IRequest {
  datatype?: DataType;
  interval: Interval;
  time_period: number;
  series_type: string;
}

export interface ICurrencyExchangeRate {
  function: string;
  from_currency: string;
  to_currency: string;
  apikey: string;
}