import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import { FUNCTIONS } from "../core/enums";
import { ICurrencyExchangeRate, ICryptoRating } from "./interfaces";

const currencyExchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI<ICurrencyExchangeRate>(params);

const cryptoRating = (params: ICryptoRating) => fetchAPI<ICryptoRating>(params);

const cryptoIntraday = (params) =>
  fetchIntradayQuote({
    ...params,
    function: FUNCTIONS.currencyExchangeRate,
  });

const digitalCurrencyDaily = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.digitalCurrencyDaily });

const digitalCurrencyWeekly = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.digitalCurrencyWeekly });

const digitalCurrencyMonthly = (params) =>
  fetchQuote({ ...params, function: FUNCTIONS.digitalCurrencyMonthly });

export default {
  currencyExchangeRate,
  cryptoRating,
  cryptoIntraday,
  digitalCurrencyDaily,
  digitalCurrencyWeekly,
  digitalCurrencyMonthly,
};
