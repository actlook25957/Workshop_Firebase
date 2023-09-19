const lsum = require('lodash.sum')
const lrandom = require('lodash.random')
/**
 * Calculates and picks a loot item based off a loot table with a simple algorithm.
 *   @param {!LootItem[]} lootTable - An array of lootItem
 * @returns {GachaResult} gachaResult
 **/

function simple (lootTable) {
  const sumAll = lsum(lootTable.map(e => e.weight))
  const pick = lrandom(sumAll)

  let iterator = 0
  const picked = lootTable.find((v) => {
    iterator += v.weight
    if (pick <= iterator) {
      return v
    }
  })

  return {
    pick: picked
  }
}

/**
 * @typedef {Object} LootItem
 * @property {Number} LootItem.weight - the weight of the LootItem
 * @property {Number} LootItem.spread - the spread of the LootItem
 */

/**
 * @typedef {Object} GachaResult
 * @property {LootItem} pick - the picked LootItem
 * @property {number} max - sum of all the weight
 */

module.exports = simple
