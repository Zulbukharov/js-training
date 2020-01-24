'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 const keepFirst = s => s.length >= 1 ? s.length >= 2 ? s[0] + s[1] : s[0] : ''

 const keepLast = s => s.length >= 1 ? s.length >= 2 ? s[s.length - 2] + s[s.length - 1] : s[s.length - 1] : ''

 const keepFirstLast = s => s.length >= 3 ? s.length >= 4 ? s[2] + s[3] : s[2] : ''

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.deepStrictEqual(keepFirst('a b c'), 'a ')
assert.deepStrictEqual(keepFirst(''), '')
assert.deepStrictEqual(keepFirst('da'), 'da')
assert.deepStrictEqual(keepFirst('d'), 'd')


assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.deepStrictEqual(keepLast('a b c'), ' c')
assert.deepStrictEqual(keepLast(''), '')
assert.deepStrictEqual(keepLast('da'), 'da')
assert.deepStrictEqual(keepLast('a'), 'a')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirstLast('a b c'), 'b ')
assert.deepStrictEqual(keepFirstLast(''), '')
assert.deepStrictEqual(keepFirstLast('da'), '')
assert.deepStrictEqual(keepFirstLast('qwe'), 'e')
assert.deepStrictEqual(keepFirstLast('q'), '')
// End of tests */
