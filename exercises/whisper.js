'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = s => `*${s.toLowerCase()}*`

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('A B C'), '*a b c*')
assert.deepStrictEqual(whisper(''), '**')
assert.deepStrictEqual(whisper('DARUDE'), '*darude*')
// assert.fail('You must write your own tests')
// End of tests */
