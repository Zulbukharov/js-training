'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
*/

const jadenCase = s => {
	let n = ''
	let t = ''
	let foo = s.toLowerCase()
	for (let i = 0; i < foo.length; i++) {
		t += foo[i]
		if (foo[i] == ' ' || i == foo.length - 1) {
			n += t[0].toUpperCase() + t.slice(1, t.length)
			t = ''
		}
	}
	return n
}

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('How are you ? s  '), 'How Are You ? S  ')
// End of tests */
