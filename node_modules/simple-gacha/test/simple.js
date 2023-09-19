const assert = require('assert')
const gacha = require('../lib')

const faker = require('faker')
const lrandom = require('lodash.random')

const items = require('./samples/items.json')
const single = require('./samples/single.json')
const double = require('./samples/double.json')

describe('simple', function () {
  this.slow(200)

  const data = []

  before(function () {
    for (var i = 0; i < 10; i++) {
      data.push({
        name: faker.name.findName(),
        weight: lrandom(10)
      })
    }
  })

  it('Single element', function () {
    const { pick } = gacha.simple(single)
    assert.strictEqual(single.find(p => p === pick), pick)
  })

  it('Double element', function () {
    const { pick } = gacha.simple(double)
    assert.strictEqual(double.find(p => p === pick), pick)
  })
  
  it('Does return a random picked element', function () {
    const { pick } = gacha.simple(items)
    assert.strictEqual(items.find(p => p === pick), pick)
  })

  it('Feed random data', function () {
    const { pick } = gacha.simple(data)
    assert.strictEqual(data.find(e => e === pick), pick)
  })
})
