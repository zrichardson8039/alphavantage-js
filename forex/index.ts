import { fetchAPI, fetchIntradayQuote, fetchQuote } from "../core";
import { ForexFunctions } from "./enums";
import { IForexExchangeRate, IForexIntraday, IForexQuote } from "./interfaces";


export const exchangeRate = (params: IForexExchangeRate) =>
  fetchAPI({
    ...params,
    function: ForexFunctions.exchangeRate
  });

export const intraday = (params: IForexIntraday) =>
  fetchIntradayQuote({
    ...params,
    function: ForexFunctions.intraday,
  });

export const daily = (params: IForexQuote) =>
  fetchQuote({
    ...params,
    function: ForexFunctions.daily
  });

export const weekly = (params: IForexQuote) =>
  fetchQuote({
    ...params,
    function: ForexFunctions.weekly
  });

export const monthly = (params: IForexQuote) =>
  fetchQuote({
    ...params,
    function: ForexFunctions.monthly
  });

export default {
  exchangeRate,
  intraday,
  daily,
  weekly,
  monthly,
};
