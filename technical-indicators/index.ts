import { fetchAPI } from "../core";
import { TechnicalFunctions } from "../core/enums";
import { IRequest } from "../core/interfaces";

export const sma = (params: IRequest) => {
  fetchAPI({
    ...params,
    function: TechnicalFunctions.sma
  });
};