import { fetchIntradayQuote, fetchQuote } from "../core";
import { IIntradayQuote, IQuote } from "../core/interfaces";
import { TimeSeriesFunctions } from "./enums";


export const intraday = (params: IIntradayQuote) =>
  fetchIntradayQuote({
    ...params,
    function: TimeSeriesFunctions.intraday
  });

export const intradayExtended = (params: IIntradayQuote) =>
  fetchIntradayQuote({
    ...params,
    function: TimeSeriesFunctions.intradayExtended
  });

export const daily = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.daily
  });

export const dailyAdjusted = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.dailyAdjusted
  });

export const weekly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.weekly
  });

export const weeklyAdjusted = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.weeklyAdjusted
  });

export const monthly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.monthly
  });

export const monthlyAdjusted = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.monthlyAdjusted
  });

export default {
  intraday,
  intradayExtended,
  daily,
  dailyAdjusted,
  weekly,
  weeklyAdjusted,
  monthly,
  monthlyAdjusted,
};