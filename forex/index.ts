import { CurrencyFunctions } from "../core/enums";
import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import { ICurrencyExchangeRate, IIntradayQuote, IQuote } from "../core/interfaces";

// CURRENCY_EXCHANGE_RATE
export const exchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI({
    ...params,
    function: CurrencyFunctions.currencyExchangeRate
  });

// FX_INTRADAY
export const intraday = (params: IIntradayQuote) =>
  fetchIntradayQuote({
    ...params,
    function: CurrencyFunctions.fxIntraday,
  });

// FX_DAILY
export const daily = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: CurrencyFunctions.fxDaily
  });

// FX_WEEKLY
export const weekly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: CurrencyFunctions.fxWeekly
  });

// FX_MONTHLY
export const monthly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: CurrencyFunctions.fxMonthly
  });

export default {
  exchangeRate,
  intraday,
  daily,
  weekly,
  monthly,
};
