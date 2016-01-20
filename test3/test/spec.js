/* global describe, it */
var assert = require('assert')
var shuffleAndSplit = require('shuffle-and-split')
var _ = require('lodash')

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

  it('number of group ranging from zero to length of input array', function () {
    var inputArray = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('')
    var numberOfgroup = Math.round(Math.random() * inputArray.length + 1)
    var result = shuffleAndSplit(inputArray, numberOfgroup)
    assert(result.length !== inputArray.length)
  })

  it('check for randomness', function () {
    var inputArray = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('')
    var numberOfgroup = Math.round(Math.random() * 1000) + inputArray.length

    var result1 = shuffleAndSplit(inputArray, numberOfgroup)
    var result2 = shuffleAndSplit(inputArray, numberOfgroup)

    assert(!_.isEqual(result1, result2))
  })
})
