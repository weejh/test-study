function countchar (sTring, inputS) {
  if (typeof sTring !== 'string') throw Error('search input must be a string')
  if (typeof inputS !== 'string') throw Error('required input must be a string')
  var counTer = 0
  sTring.split('').forEach(e => {
    if (e === inputS) counTer = counTer + 1
  })
  return counTer
}

module.exports = countchar
