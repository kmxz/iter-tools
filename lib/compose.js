function compose (fns) {
  return Array.from(fns)
    .reduce((f, g) => (...args) => f(g(...args)))
}

module.exports = compose
