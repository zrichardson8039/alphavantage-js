import axios from "axios";
import { URL } from "./constants";
import { IIntradayQuote, IQuote } from "./interfaces";

export function fetchAPI<T>(params: T) {
  return axios.get(URL.query, params);
}

export const fetchQuote = (params: IQuote) => fetchAPI<IQuote>(params);

export const fetchIntradayQuote = (params: IIntradayQuote) =>
  fetchAPI<IIntradayQuote>(params);
