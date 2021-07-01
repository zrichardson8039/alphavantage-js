import { SeriesType } from "../core/enums";
import { IIntradayQuote } from "../core/interfaces";
import { MaType } from "./enums";

export interface ITechnical extends IIntradayQuote {
  time_period: number;
  series_type: SeriesType;
}

export interface IMama extends ITechnical {
  fastlimit?: number;
  slowlimit?: number;
}

export interface IMacd extends ITechnical {
  fastperiod?: number;
  slowperiod?: number;
  signalperiod?: number;
}

export interface IMacdExt extends IMacd {
  fastmatype?: MaType;
  slowmatype?: MaType;
  signalmatype?: MaType;
}

export interface IStoch extends ITechnical {
  fastkperiod?: number;
  slowkperiod?: number;
  slowdperiod?: number;
  slowkmatype?: MaType;
  slowdmatype?: MaType;
}

export interface IStochF extends ITechnical {
  fastkperiod?: number;
  fastdperiod?: number;
  fastdmatype?: MaType;
}

export interface IApo extends ITechnical {
  fastperiod?: number;
  slowperiod?: number;
  matype?: MaType;
}

export interface IUltosc extends ITechnical {
  timeperiod1?: number;
  timeperiod2?: number;
  timeperiod3?: number;
}

export interface IBBands extends ITechnical {
  nbdevup?: number;
  nbdevdn?: number;
  matype?: MaType;
}

export interface ISar extends ITechnical {
  acceleration?: number;
  maximum?: number;
}

export interface IAdosc extends ITechnical {
  fastperiod?: number;
  slowperiod?: number;
}