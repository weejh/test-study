function isEven (number) {
  if (typeof number !== 'number') {
    throw Error('must be a number')
  }
  return number % 2 === 0
}

module.exports = isEven
