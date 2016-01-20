/* global describe, it */
var assert = require('assert')
var shuffleAndSplit = require('shuffle-and-split')

describe('shuffle-and-split', function () {
  it('check for input, it is must an array', function () {
    try {
      shuffleAndSplit('', 3)
      assert.fail
    } catch (error) {
      assert(error.message === 'input must be an array')
    } finally {
      assert(true)
    }
  })

  it('check for input, it is must a number', function () {
    try {
      shuffleAndSplit([1, 2, 3], [])
      assert.fail
    } catch (error) {
      assert(error.message === 'input must be a number')
    } finally {
      assert(true)
    }
  })

  // it('check for input, it is must > 0', function () {
  //   try {
  //     shuffleAndSplit([1, 2, 3], -1)
  //     assert.fail
  //   } catch (error) {
  //     assert(error.message === 'input must be greater than or equal to zero')
  //   } finally {
  //     assert(true)
  //   }
  // })

  it('return correct number of array', function () {
    assert(shuffleAndSplit([1, 2, 3], 3).length === 3)
  })

  it('length of input array must be equal ', function () {
    var result = shuffleAndSplit([1, 2, 3], 3)
    assert(result.length === 3)
  })
})
