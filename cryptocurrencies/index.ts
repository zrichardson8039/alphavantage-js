/*-- CORE --*/
import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import FUNCTIONS from "../core/enums";
import { IRequest } from "../core/interfaces";

/*-- CRYPTOCURRENCY --*/
import { ICurrencyExchangeRate } from "./interfaces";


// CURRENCY_EXCHANGE_RATE
export const currencyExchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI(params);

// CRYPTO_RATING
export const cryptoRating = (params: IRequest) =>
  fetchAPI(params);

// CRYPTO_INTRADAY
export const cryptoIntraday = (params) =>
  fetchIntradayQuote({
    ...params,
    function: FUNCTIONS.cryptoIntraday,
  });

// DIGITAL_CURRENCY_DAILY
export const digitalCurrencyDaily = (params) =>
  fetchQuote({ 
    ...params,
    function: FUNCTIONS.digitalCurrencyDaily
  });

// DIGITAL_CURRENCY_WEEKLY
export const digitalCurrencyWeekly = (params) =>
  fetchQuote({
    ...params,
    function: FUNCTIONS.digitalCurrencyWeekly
  });

// DIGITAL_CURRENCY_MONTHLY
export const digitalCurrencyMonthly = (params) =>
  fetchQuote({
    ...params,
    function: FUNCTIONS.digitalCurrencyMonthly
  });

export default {
  currencyExchangeRate,
  cryptoRating,
  cryptoIntraday,
  digitalCurrencyDaily,
  digitalCurrencyWeekly,
  digitalCurrencyMonthly,
};
