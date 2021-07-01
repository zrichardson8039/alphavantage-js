import { SeriesType } from "../core/enums";
import { IIntradayQuote } from "../core/interfaces";
import { MaType } from "./enums";

export interface ITechnical extends IIntradayQuote {
  time_period?: number;
  series_type?: SeriesType;
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
  fastmatype: MaType;
  slowmatype: MaType;
  signalmatype: MaType;
}