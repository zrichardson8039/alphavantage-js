export interface IQuote {
    function: string;
    symbol: string;
    market: string;
    apikey: string;
}

export interface IIntradayQuote extends IQuote {
    interval: string;
    outputsize?: string;
    datatype?: JSON;
}