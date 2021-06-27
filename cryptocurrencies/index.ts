import { CurrencyFunctions } from "../core/enums";
import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import { ICurrencyExchangeRate, IRequest } from "../core/interfaces";


// CURRENCY_EXCHANGE_RATE
export const exchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI({
    ...params,
    function: CurrencyFunctions.currencyExchangeRate
  });

// CRYPTO_RATING
export const rating = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: CurrencyFunctions.cryptoRating
  });

// CRYPTO_INTRADAY
export const intraday = (params) =>
  fetchIntradayQuote({
    ...params,
    function: CurrencyFunctions.cryptoIntraday,
  });

// DIGITAL_CURRENCY_DAILY
export const daily = (params) =>
  fetchQuote({
    ...params,
    function: CurrencyFunctions.digitalCurrencyDaily
  });

// DIGITAL_CURRENCY_WEEKLY
export const weekly = (params) =>
  fetchQuote({
    ...params,
    function: CurrencyFunctions.digitalCurrencyWeekly
  });

// DIGITAL_CURRENCY_MONTHLY
export const monthly = (params) =>
  fetchQuote({
    ...params,
    function: CurrencyFunctions.digitalCurrencyMonthly
  });

export default {
  exchangeRate,
  rating,
  intraday,
  daily,
  weekly,
  monthly,
};
