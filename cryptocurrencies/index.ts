import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import { ICurrencyExchangeRate, IIntradayQuote, IQuote, IRequest } from "../core/interfaces";
import { CryptoFunctions } from "./enums";


// CURRENCY_EXCHANGE_RATE
export const exchangeRate = (params: ICurrencyExchangeRate) =>
  fetchAPI({
    ...params,
    function: CryptoFunctions.cryptoExchangeRate
  });

// CRYPTO_RATING
export const rating = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: CryptoFunctions.cryptoRating
  });

// CRYPTO_INTRADAY
export const intraday = (params: IIntradayQuote) =>
  fetchIntradayQuote({
    ...params,
    function: CryptoFunctions.cryptoIntraday,
  });

// DIGITAL_CURRENCY_DAILY
export const daily = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: CryptoFunctions.cryptoDaily
  });

// DIGITAL_CURRENCY_WEEKLY
export const weekly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: CryptoFunctions.cryptoWeekly
  });

// DIGITAL_CURRENCY_MONTHLY
export const monthly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: CryptoFunctions.cryptoMonthly
  });

export default {
  exchangeRate,
  rating,
  intraday,
  daily,
  weekly,
  monthly,
};
