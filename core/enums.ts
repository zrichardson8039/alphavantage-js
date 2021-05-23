enum GlobalFunctions {
  globalQuote="GLOBAL_QUOTE",
  symbolSearch="SYMBOL_SEARCH",
}

enum CurrencyFunctions {
  currencyExchangeRate="CURRENCY_EXCHANGE_RATE",
  cryptoRating="CRYPTO_RATING",
  cryptoIntraday="CRYPTO_INTRADAY",
  digitalCurrencyDaily="DIGITAL_CURRENCY_DAILY",
  digitalCurrencyWeekly="DIGITAL_CURRENCY_WEEKLY",
  digitalCurrencyMonthly="DIGITAL_CURRENCY_MONTHLY",
  fxIntraday="FX_INTRADAY",
  fxDaily="FX_DAILY",
  fxWeekly="FX_WEEKLY",
  fxMonthly="FX_MONTHLY",
}

enum FundamentalFunctions {
  overview="OVERVIEW",
  earnings="EARNINGS",
  incomeStatement="INCOME_STATEMENT",
  balanceSheet="BALANCE_SHEET",
  cashFlow="CASH_FLOW",
  listingStatus="LISTING_STATUS",
  earningsCalendar="EARNINGS_CALENDAR",
  ipoCalendar="IPO_CALENDAR",

}

enum TimeSeriesFunctions {
  timeSeriesIntraday="TIME_SERIES_INTRADAY",
  timeSeriesIntradayExtended="TIME_SERIES_INTRADAY_EXTENDED",
  timeSeriesDaily="TIME_SERIES_DAILY",
  timeSeriesDailyAdjusted="TIME_SERIES_DAILY_ADJUSTED",
  timeSeriesWeekly="TIME_SERIES_WEEKLY",
  timeSeriesWeeklyAdjusted="TIME_SERIES_WEEKLY_ADJUSTED",
  timeSeriesMonthly="TIME_SERIES_MONTHLY",
  timeSeriesMonthlyAdjusted="TIME_SERIES_MONTHLY_ADJUSTED",
}

enum TechnicalFunctions {
  sma="SMA",
  ema="EMA",
  wma="WMA",
  dema="DEMA",
  tema="TEMA",
  trima="TRIMA",
  kama="KAMA",
  mama="MAMA",
  vwap="VWAP",
  t3="T3",
  macd="MACD",
  macdext="MACDEXT",
  stoch="STOCH",
  stochf="STOCHF",
  rsi="RSI",
  stochrsi="STOCHRSI",
  willr="WILLR",
  adx="ADX",
  adxr="ADXR",
  apo="APO",
  ppo="PPO",
  mom="MOM",

}

export const FUNCTIONS = {
  ...GlobalFunctions,
  ...CurrencyFunctions,
  ...FundamentalFunctions,
  ...TimeSeriesFunctions,
};

export default {
  FUNCTIONS
};