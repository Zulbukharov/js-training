'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
*/

const cutFirst = s => {
	let n = ""
	for (let i = 2; i < s.length; i++) {
		n += s[i]
	}
	return n
}

const cutLast = s => {
	let n = ""
	for (let i = 0; i < s.length - 2; i++) {
		n += s[i]
	}
	return n
}

const cutFirstLast = s => cutLast(cutFirst(s))

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.deepStrictEqual(cutFirst('a b c'), 'b c')
assert.deepStrictEqual(cutFirst(''), '')
assert.deepStrictEqual(cutFirst('da'), '')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.deepStrictEqual(cutLast('a b c'), 'a b')
assert.deepStrictEqual(cutLast(''), '')
assert.deepStrictEqual(cutLast('da'), '')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('a b c'), 'b')
assert.deepStrictEqual(cutFirstLast(''), '')
assert.deepStrictEqual(cutFirstLast('da'), '')
// End of tests */
