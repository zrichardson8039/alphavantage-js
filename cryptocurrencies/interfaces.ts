export interface ICurrencyExchangeRate {
    function: string;
    from_currency: string;
    to_currency: string;
    apikey: string;
}

export interface ICryptoRating {
    function: string;
    symbol: string;
    apikey: string;
}
