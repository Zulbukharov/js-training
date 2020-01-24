'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
*/

const yell = s => s.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('a b c'), 'A B C')
assert.deepStrictEqual(yell(''), '')
assert.deepStrictEqual(yell('dorude'), 'DORUDE')
// assert.fail('You must write your own tests')
// End of tests */
