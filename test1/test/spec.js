/* global describe, it */
var download = require('..')
var assert = require('assert')
var sinon = require('sinon')

describe('download', function () {
  it('check url', function () {
    var url = 'http://asia1.com'
    assert(download(url))
  })

  it('check url is empty - fail', function () {
    try {
      download('')
      assert.fail
    } catch (error) {
      assert(error.message === 'must be a vaild url')
    }
  })

  it('download', function () {
    var stub = sinon.stub(global, 'fetch')
    stub.withArgs('/what').returns('ok')

    assert(download('/what') === 'ok')

    stub.restore()
  })
})
