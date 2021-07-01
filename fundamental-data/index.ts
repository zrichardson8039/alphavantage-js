import { fetchAPI } from "../core";
import { IRequest } from "../core/interfaces";
import { FundamentalFunctions } from "./enums";


export const overview = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.overview
  });

export const earnings = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.earnings
  });

export const incomeStatement = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.incomeStatement
  });

export const balanceSheet = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.balanceSheet
  });

export const cashFlow = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.cashFlow,
  });

export const listingStatus = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.listingStatus
  });

export const earningsCalendar = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.earningsCalendar
  })

export const ipoCalendar = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FundamentalFunctions.ipoCalendar
  });

export default {
  overview,
  earnings,
  incomeStatement,
  balanceSheet,
  cashFlow,
  listingStatus,
  earningsCalendar,
  ipoCalendar,
};
