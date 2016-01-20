/* global describe, it */
var download = require('..')
var assert = require('assert')

describe('download', function () {
  it('check url', function () {
    var url = 'http://asia1.com'
    assert(download(url))
  })
  it('check url is empty - fail', function () {
    try {
      return download('')
    } catch (error) {
      assert(error.message === 'must be a vaild url')
    }
  })
})
