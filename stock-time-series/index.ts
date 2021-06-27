import { fetchIntradayQuote, fetchQuote } from "../core";
import { TimeSeriesFunctions } from "../core/enums";
import { IIntradayQuote, IQuote, IRequest } from "../core/interfaces";

// INTRADAY
export const intraday = (params: IIntradayQuote) =>
  fetchIntradayQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesIntraday
  });

// INTRADAY_EXTENDED
export const intradayExtended = (params: IIntradayQuote) =>
  fetchIntradayQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesIntraday
  });

// DAILY
export const daily = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesDaily
  });

// DAILY_ADJUSTED
export const dailyAdjusted = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesDailyAdjusted
  });

// WEEKLY
export const weekly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesWeekly
  });

// WEEKLY_ADJUSTED
export const weeklyAdjusted = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesWeeklyAdjusted
  });

// MONTHLY
export const monthly = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesMonthly
  });

// MONTHLY_ADJUSTED
export const monthlyAdjusted = (params: IQuote) =>
  fetchQuote({
    ...params,
    function: TimeSeriesFunctions.timeSeriesMonthlyAdjusted
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