/*-- CORE --*/
import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import FUNCTIONS from "../core/enums";

/*-- FOREX --*/
import { ICurrencyExchangeRate } from "./interfaces";

// CURRENCY_EXCHANGE_RATE
export const currencyExchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI(params);

// FX_INTRADAY
export const fxIntraday = (params) =>
  fetchIntradayQuote({
    ...params,
    function: FUNCTIONS.fxIntraday,
  });

// FX_DAILY
export const fxDaily = (params) =>
  fetchQuote({
    ...params,
    function: FUNCTIONS.fxDaily
  });

// FX_WEEKLY
export const fxWeekly = (params) =>
  fetchQuote({
    ...params,
    function: FUNCTIONS.fxWeekly
  });

// FX_MONTHLY
export const fxMonthly = (params) =>
  fetchQuote({
    ...params,
    function: FUNCTIONS.fxMonthly});

export default {
  currencyExchangeRate,
  fxIntraday,
  fxDaily,
  fxWeekly,
  fxMonthly,
};
