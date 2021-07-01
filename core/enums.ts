export enum GlobalFunctions {
  globalQuote="GLOBAL_QUOTE",
  symbolSearch="SYMBOL_SEARCH",
}

export enum Interval {
  one = "1min",
  five = "5min",
  fifteen = "15min",
  thirty = "30min",
  sixty = "60min",
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}

export enum SeriesType {
  close = "close",
  open = "open",
  high = "high",
  low = "low",
}

export enum DataType {
  csv = "csv",
  json = "json",
}

export enum OutputSize {
  compact = "compact",
  full = "full",
}

export default {
  ...GlobalFunctions,
  ...FundamentalFunctions,
  ...TimeSeriesFunctions,
  ...TechnicalFunctions
};