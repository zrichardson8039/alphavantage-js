import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import FUNCTIONS from "../core/enums";
import { ICurrencyExchangeRate, ICryptoRating } from "./interfaces";

export const currencyExchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI<ICurrencyExchangeRate>(params);

export const cryptoRating = (params: ICryptoRating) =>
  fetchAPI<ICryptoRating>(params);

export const cryptoIntraday = (params) =>
  fetchIntradayQuote({
    ...params,
    function: FUNCTIONS.cryptoIntraday,
  });

export const digitalCurrencyDaily = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.digitalCurrencyDaily });

export const digitalCurrencyWeekly = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.digitalCurrencyWeekly });

export const digitalCurrencyMonthly = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.digitalCurrencyMonthly });

export default {
  currencyExchangeRate,
  cryptoRating,
  cryptoIntraday,
  digitalCurrencyDaily,
  digitalCurrencyWeekly,
  digitalCurrencyMonthly,
};
