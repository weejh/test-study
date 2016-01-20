/* global describe, it */
var isEven = require('..')
var assert = require('assert')

describe('isEven', function () {
  it('check number is even', function () {
    var even = Math.round(Math.random() * 1000000) * 2
    assert(isEven(even))
  })
  it('check number is odd', function () {
    var odd = Math.round(Math.random() * 1000000) * 2 + 1
    assert(!isEven(odd))
  })
  it('check number is string - fail', function () {
    try {
      isEven('abc')
      assert.fail
    } catch (error) {
      assert(error.message === 'must be a number')
    }
  })
  it('check number is null - fail', function () {
    try {
      isEven(null)
      assert.fail
    } catch (error) {
      assert(error.message === 'must be a number')
    }
  })
  it('check number is not passed in - fail', function () {
    try {
      isEven()
      assert.fail
    } catch (error) {
      assert(error.message === 'must be a number')
    } finally {
      assert(true)
    }
  })
})
