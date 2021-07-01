import { DataType, Interval, OutputSize, SeriesType, Slice } from "./enums";

export interface IRequest {
  function: string;
  symbol?: string;
  apikey: string;
}

export interface IQuote extends IRequest {
  outputsize?: OutputSize;
  datatype?: DataType;
}

export interface IIntradayQuote extends IQuote {
  adjusted?: boolean;
  interval: Interval;
  slice?: Slice;
}
