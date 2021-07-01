import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import { IRequest } from "../core/interfaces";
import { CryptoFunctions } from "./enums";
import { ICryptoExchangeRate, ICryptoIntraday, ICryptoQuote } from "./interfaces";


export const exchangeRate = (params: ICryptoExchangeRate) =>
  fetchAPI({
    ...params,
    function: CryptoFunctions.exchangeRate
  });

export const rating = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: CryptoFunctions.rating
  });

export const intraday = (params: ICryptoIntraday) =>
  fetchIntradayQuote({
    ...params,
    function: CryptoFunctions.intraday,
  });

export const daily = (params: ICryptoQuote) =>
  fetchQuote({
    ...params,
    function: CryptoFunctions.daily
  });

export const weekly = (params: ICryptoQuote) =>
  fetchQuote({
    ...params,
    function: CryptoFunctions.weekly
  });

export const monthly = (params: ICryptoQuote) =>
  fetchQuote({
    ...params,
    function: CryptoFunctions.monthly
  });

export default {
  exchangeRate,
  rating,
  intraday,
  daily,
  weekly,
  monthly,
};
