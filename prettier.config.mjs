export default {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  importOrder: ['react', '<THIRD_PARTY_MODULES>', '^~/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
