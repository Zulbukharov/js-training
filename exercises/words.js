'use strict'

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
*/

// const r = (s, l, a, i, d) => i < l ? s[i] === d  ? r(s, l, a, i + 1, d) : i + 1 < l && s[i + 1] != d ? r(s, l, [...a + s[i]], i + 1, d) : r(s, l, [...a, s[i]], i + 1, d)  : a

// const words = s => r(s, s.length, [], 0, ' ')

const words = s => {
	let a = []
	let t = ''
	const d = ' '
	for (let i = 0; i < s.length; i++) {
		if (s[i] == d) {
			a = [...a, t]
			t = ''
		} else if (i == s.length - 1) {
			a = [...a, t + s[i]]
		} else {
			t += s[i] 
		}
	}
	return a
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
