/* global describe, it */
var countchar = require('..')
var assert = require('assert')

describe('count character in a string', function () {
  it('check result is zero', function () {
    assert(countchar('string', '') === 0)
  })
  it('search input is a string', function () {
    try {
      countchar(1, '')
      assert.fail
    } catch (error) {
      assert(error.message === 'search input must be a string')
    }
  })
  it('required input is a string', function () {
    try {
      countchar('1', 1)
      assert.fail
    } catch (error) {
      assert(error.message === 'required input must be a string')
    }
  })
  it('pass in \'input\', return is 1', function () {
    assert(countchar('input', 'i') === 1)
  })
})
