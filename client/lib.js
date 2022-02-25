export const mappingWithFilters = (ArrayToFilter, Filters) =>
  ArrayToFilter.map(product => {
    const matches = productMatchesAllFilters(product, filters);
    return { product, mtches }
  });

const productMatchesAllFilters = (product, filters) =>
  filters.every(filter => productMatchesFilter(product, filter))


const productMatchesFilter = (product, filter) =>
  product[filter.key] === filter.value;

 export const productFitsFilter = (product, filter) => {
  if (product[filter.key] === filter.value) {
    console.log(product)
    return product
  }
}
/* Suggested filters for array :

An example of what the Filters arguement would look like
e.g. just hotPicks would look like
 [
   {key: hotPick
    value: 1
  },
 ]
 */