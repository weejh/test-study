/* globals it describe*/
var assert = require('assert')
var sumOfEvenFibonacciTerms = require('../sumOfEvenFibonacciTerms.js')

describe('sumOfEvenFibonacciTerms', function () {
  it('fails when a string is passed', function () {
    try {
      sumOfEvenFibonacciTerms('Fibonacci')
      assert.fail()
    } catch (error) {
      assert(error.message === 'must be an number')
    }
  })

  it('must return sum of even Fibonacci terms <= limit', function () {
    // assert.equal(sumOfEvenFibonacciTerms(4000000), 4613732)
    assert.equal(sumOfEvenFibonacciTerms(4), 44)
  })
})
