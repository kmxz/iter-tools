const iter = require('./iter')

function filter (func, iterable) {
  function * curriedFilter (i) {
    let c = 0
    for (const item of iter(i)) {
      if (func(item, c++)) {
        yield item
      }
    }
  }
  if (iterable) {
    return curriedFilter(iterable)
  }
  return curriedFilter
}

module.exports = filter
