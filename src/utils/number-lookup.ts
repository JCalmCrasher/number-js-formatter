import { ILookup } from '@/types';

const lookup: ILookup[] = [
  { value: 1e2, symbol: '', label: 'hundred' },
  { value: 1e3, symbol: 'k', label: 'thousand' },
  { value: 1e6, symbol: ['m', 'mil', 'mill', 'mln'], label: 'million' },
  { value: 1e9, symbol: ['bn', 'bil', 'bill', 'bln'], label: 'billion' },
  {
    value: 1e12,
    symbol: ['tn', 'tril', 'trill', 'tln'],
    label: 'trillion'
  }
];

export default lookup;
