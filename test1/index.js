var fetch = require('isomorphic-fetch')

function download (url) {
  return fetch(url)
}

module.exports = download
