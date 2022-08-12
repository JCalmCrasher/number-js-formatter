const lookup = [
  { value: 1, symbol: '' },
  { value: 1e3, symbol: 'k' },
  { value: 1e6, symbol: 'm' },
  { value: 1e9, symbol: 'bn' },
  { value: 1e12, symbol: 'tn' }
] as const;

export default lookup;
