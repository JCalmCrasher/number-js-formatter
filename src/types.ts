type IMillion = 'm' | 'mil' | 'mill' | 'mln';
type IBillion = 'b' | 'bn' | 'bil' | 'bill' | 'bln';
type ITrillion = 't' | 'tn' | 'tln' | 'trn' | 'tril' | 'trill';

export interface ILookup {
  value: number;
  symbol: ILookupSymbol | ILookupSymbol[];
  label: ILookupLabel;
}

export type ILookupLabel =
  | 'unit'
  | 'ten'
  | 'hundred'
  | 'thousand'
  | 'million'
  | 'billion'
  | 'trillion';

export type ILookupSymbol = '' | 'k' | IMillion | IBillion | ITrillion;

export interface FormatOptions {
  noOfDigitsAfterDecimal: 0 | 1 | 2 | 3 | 4;
  form?: '-il' | '-ill' | '-ln' | 'default';
}
