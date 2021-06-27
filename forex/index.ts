import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import FUNCTIONS from "../core/enums";
import { ICurrencyExchangeRate } from "./interfaces";

export const currencyExchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI<ICurrencyExchangeRate>(params);

export const fxIntraday = (params) =>
  fetchIntradayQuote({
    ...params,
    function: FUNCTIONS.fxIntraday,
  });

export const fxDaily = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.fxDaily });

export const fxWeekly = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.fxWeekly });

export const fxMonthly = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.fxMonthly });

export default {
  currencyExchangeRate,
  fxIntraday,
  fxDaily,
  fxWeekly,
  fxMonthly,
};
