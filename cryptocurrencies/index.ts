import { fetchAPI } from "../core";
import { FUNCTIONS } from "../core/enums";
import { IQuote, IIntradayQuote } from "../core/interfaces";
import { ICurrencyExchangeRate, ICryptoRating } from "./interfaces";

const fetchQuote = (params: IQuote) => fetchAPI<IQuote>(params);
const fetchIntradayQuote = (params: IIntradayQuote) =>
  fetchAPI<IIntradayQuote>(params);

export default {
  /* Exchange Rate */
  currencyExchangeRate: (params: ICurrencyExchangeRate) =>
    fetchAPI<ICurrencyExchangeRate>(params),

  /* Rating */
  cryptoRating: (params: ICryptoRating) => fetchAPI<ICryptoRating>(params),

  /* Intraday */
  cryptoIntraday: (params) =>
    fetchIntradayQuote({
      ...params,
      function: FUNCTIONS.currencyExchangeRate,
    }),

  /* Daily */
  digitalCurrencyDaily: fetchQuote,

  /* Weekly */
  digitalCurrencyWeekly: fetchQuote,

  /* Monthly */
  digitalCurrencyMonthly: fetchQuote,
};
