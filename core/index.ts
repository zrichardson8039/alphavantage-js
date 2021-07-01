import axios from "axios";
import { URL } from "./constants";
import { IIntradayQuote, IQuote, IRequest } from "./interfaces";

export function fetchAPI<IRequest> (params: IRequest) {
  return axios.get(URL.query, params);
}

export const fetchQuote = (params: IQuote) =>
  fetchAPI<IQuote>(params);

export const fetchIntradayQuote = (params: IIntradayQuote) =>
  fetchAPI<IIntradayQuote>(params);

export default {
  fetchAPI,
  fetchQuote,
  fetchIntradayQuote,
};
