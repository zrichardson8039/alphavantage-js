/*-- CORE --*/
import { fetchAPI } from "../core";
import FUNCTIONS from "../core/enums";
import { IRequest } from "../core/interfaces";


// COMPANY_OVERVIEW
export const companyOverview = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.overview
  });

// EARNINGS
export const earnings = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.earnings
  });

// INCOME_STATEMENT
export const incomeStatement = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.incomeStatement
  });

// BALANCE_SHEET
export const balanceSheet = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.balanceSheet
  });

// CASH_FLOW
export const cashFlow = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.cashFlow,
  });

// LISTING & DELISTING STATUS
export const listingStatus = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.listingStatus
  });

// EARNINGS_CALENDAR
export const earningsCalendar = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.earningsCalendar
  })

// IPO_CALENDAR
export const ipoCalendar = (params: IRequest) =>
  fetchAPI({
    ...params,
    function: FUNCTIONS.ipoCalendar
  });

export default {
  companyOverview,
  earnings,
  incomeStatement,
  balanceSheet,
  cashFlow,
  listingStatus,
  earningsCalendar,
  ipoCalendar,
};