declare type IMillion = 'm' | 'mil' | 'mill' | 'mln';
declare type IBillion = 'b' | 'bn' | 'bil' | 'bill' | 'bln';
declare type ITrillion = 't' | 'tn' | 'tln' | 'trn' | 'tril' | 'trill';
export interface ILookup {
    value: number;
    symbol: ILookupSymbol | ILookupSymbol[];
    label: ILookupLabel;
}
export declare type ILookupLabel = 'thousand' | 'million' | 'billion' | 'trillion';
export declare type ILookupSymbol = 'k' | IMillion | IBillion | ITrillion;
export interface FormatOptions {
    noOfDigitsAfterDecimal: 0 | 1 | 2 | 3 | 4;
    form?: '-il' | '-ill' | '-ln' | 'default';
}
export {};
