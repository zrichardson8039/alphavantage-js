import { fetchAPI } from "../core";
import { TechnicalFunctions } from "./enums";
import { IAdosc, IApo, IBBands, IMacd, IMacdExt, IMama, ISar, IStoch, IStochF, ITechnical, IUltosc } from "./interfaces";

export const sma = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.sma
  });

export const ema = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.ema
  });

export const wma = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.wma
  });

export const dema = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.dema
  });

export const tema = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.tema
  });

export const trima = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.trima
  });

export const kama = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.kama
  });

export const mama = (params: IMama) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.mama
  });

export const vwap = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.vwap
  });

export const t3 = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.t3
  });

export const macd = (params: IMacd) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.macd
  });

export const macdext = (params: IMacdExt) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.macdext
  });

export const stoch = (params: IStoch) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.stoch
  });

export const stochf = (params: IStochF) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.stochf
  });

export const rsi = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.rsi
  });

export const stochrsi = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.stochrsi
  });

export const willr = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.willr
  });

export const adx = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.adx
  });

export const adxr = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.adxr
  });

export const apo = (params: IApo) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.apo
  });

export const ppo = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.ppo
  });

export const mom = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.mom
  });

export const bop = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.bop
  });

export const cci = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.cci
  });

export const cmo = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.cmo
  });

export const roc = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.roc
  });

export const aroon = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.aroon
  });

export const aroonosc = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.aroonosc
  });

export const mfi = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.mfi
  });

export const trix = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.trix
  });

export const ultosc = (params: IUltosc) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.ultosc
  });

export const dx = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.dx
  });

export const minusDI = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.minusDI
  });

export const plusDI = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.plusDI
  });

export const minusDM = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.minusDM
  });

export const plusDM = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.minusDI
  });

export const bbands = (params: IBBands) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.bbands
  });

export const midpoint = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.midpoint
  });

export const midprice = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.midprice
  });

export const sar = (params: ISar) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.sar
  });

export const trange = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.trange
  });

export const atr = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.atr
  });

export const natr = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.natr
  });

export const ad = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.ad
  });

export const adosc = (params: IAdosc) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.adosc
  });

export const obv = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.obv
  });

export const htTrendline = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.htTrendline
  });

export const htSine = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.htSine
  });

export const htTrendmode = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.htTrendmode
  });

export const htDCperiod = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.htDCperiod
  });

export const htDCphase = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.htDCphase
  });

export const htPhasor = (params: ITechnical) =>
  fetchAPI({
    ...params,
    function: TechnicalFunctions.htPhasor
  });