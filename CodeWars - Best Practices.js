/* Roman Numerals Encoder */

function solution(number) {
	var roman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	var ans = '';
	while (number > 0) {
		for (a in roman) {
			if (roman[a] <= number) {
				ans += a;
				number -= roman[a];
				break;
			}
		}
	}
	return ans;
}

/* Find the unique number */

function findUniq(arr) {
	arr.sort((a, b) => a - b);
	return arr[0] == arr[1] ? arr.pop() : arr[0];
}

/* Count the smiley faces! */

function countSmileys(arr) {
	return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

/* Highest Scoring Word */

function high(s) {
	let as = s
		.split(' ')
		.map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
	return s.split(' ')[as.indexOf(Math.max(...as))];
}

/* Give me a Diamond */

function diamond(n) {
	if (n % 2 == 0 || n < 1) return null;
	var x = 0,
		add,
		diam = line(x, n);
	while ((x += 2) < n) {
		add = line(x / 2, n - x);
		diam = add + diam + add;
	}
	return diam;
}

function repeat(str, x) {
	return Array(x + 1).join(str);
}
function line(spaces, stars) {
	return repeat(' ', spaces) + repeat('*', stars) + '\n';
}

/* Playing with digits */

function digPow(n, p) {
	var x = String(n)
		.split('')
		.reduce((s, d, i) => s + Math.pow(d, p + i), 0);
	return x % n ? -1 : x / n;
}

/* Take a Ten Minute Walk */

function isValidWalk(walk) {
	var dx = 0;
	var dy = 0;
	var dt = walk.length;

	for (var i = 0; i < walk.length; i++) {
		switch (walk[i]) {
			case 'n':
				dy--;
				break;
			case 's':
				dy++;
				break;
			case 'w':
				dx--;
				break;
			case 'e':
				dx++;
				break;
		}
	}

	return dt === 10 && dx === 0 && dy === 0;
}

/* Create Phone Number */

function createPhoneNumber(numbers) {
	var format = '(xxx) xxx-xxxx';
	for (var i = 0; i < numbers.length; i++) {
		format = format.replace('x', numbers[i]);
	}
	return format;
}

/* Dubstep */

function songDecoder(song) {
	return song.replace(/(WUB)+/g, ' ').trim();
}

/* The Supermarket Queue */

function queueTime(customers, n) {
	var w = new Array(n).fill(0);
	for (let t of customers) {
		let idx = w.indexOf(Math.min(...w));
		w[idx] += t;
	}
	return Math.max(...w);
}

/* Count characters in your string */

function count(string) {
	var count = {};
	string.split('').forEach(function (s) {
		count[s] ? count[s]++ : (count[s] = 1);
	});
	return count;
}

/* Replace With Alphabet Position */

function alphabetPosition(text) {
	return text
		.toUpperCase()
		.match(/[a-z]/gi)
		.map(c => c.charCodeAt() - 64)
		.join(' ');
}

/* Duplicate Encoder */

function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split('')
		.map(function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
		})
		.join('');
}

/* Find the missing letter */

function findMissingLetter(array) {
	let first = array[0].charCodeAt(0);
	for (let i = 1; i < array.length; i++) {
		if (first + i !== array[i].charCodeAt(0)) {
			return String.fromCharCode(first + i);
		}
	}
	throw new Error('Invalid input');
}

/* Calculating with Functions */

[
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
].forEach(function (name, n) {
	this[name] = function (f) {
		return f ? f(n) : n;
	};
});

function plus(n) {
	return function (a) {
		return a + n;
	};
}
function minus(n) {
	return function (a) {
		return a - n;
	};
}
function times(n) {
	return function (a) {
		return a * n;
	};
}
function dividedBy(n) {
	return function (a) {
		return a / n;
	};
}

/* Your order, please */

function order(words) {
	return words
		.split(' ')
		.sort(function (a, b) {
			return a.match(/\d/) - b.match(/\d/);
		})
		.join(' ');
}

/* Sort the odd */

function sortArray(array) {
	const odd = array.filter(x => x % 2).sort((a, b) => a - b);
	return array.map(x => (x % 2 ? odd.shift() : x));
}

/* Convert string to camel case */

function toCamelCase(str) {
	return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

/* IQ Test */

function iqTest(numbers) {
	var nums = numbers.split(' ').map(x => x % 2);
	var sum = nums.reduce((a, b) => a + b);
	var target = sum > 1 ? 0 : 1;

	return nums.indexOf(target) + 1;
}

/* Stop gninnipS My sdroW! */

function spinWords(string) {
	return string.replace(/\w{5,}/g, function (w) {
		return w.split('').reverse().join('');
	});
}

/* Sum of Digits / Digital Root */

function digital_root(n) {
	return ((n - 1) % 9) + 1;
}

/* Multiples of 3 or 5 */

function solution(number) {
	var sum = 0;
	for (var i = 3; i < number; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}

/* Persistent Bugger. */

const persistence = num => {
	return `${num}`.length > 1
		? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
		: 0;
};

/* Encrypt this! */

const encryptThis = str =>
	str.replace(
		/\b\w(\w?)(\w*?)(\w?)\b/g,
		(a, b, c, d) => a.charCodeAt() + d + c + b
	);

/* Equal Sides Of An Array */

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = a =>
	a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

/* Find The Parity Outlier */

function findOutlier(int) {
	var even = int.filter(a => a % 2 == 0);
	var odd = int.filter(a => a % 2 !== 0);
	return even.length == 1 ? even[0] : odd[0];
}

/* Casino chips */

function solve(arr) {
	var [a, b, c] = arr.sort((x, y) => x - y);
	return Math.min(a + b, ~~((a + b + c) / 2));
}

/* Meeting */

function meeting(s) {
	let string = s
		.toUpperCase()
		.split(';')
		.map(x => x.split(':').reverse().join(', '))
		.sort()
		.join(')(');
	return '(' + string + ')';
}

/* Delete occurrences of an element if it occurs more than n times */

function deleteNth(arr, x) {
	var cache = {};
	return arr.filter(function (n) {
		cache[n] = (cache[n] || 0) + 1;
		return cache[n] <= x;
	});
}

/* Find the odd int */

function findOdd(A) {
	return A.reduce(function (c, v) {
		return c ^ v;
	}, 0);
}

/* A Rule of Divisibility by 13 */

function thirt(n) {
	const nums = [1, 10, 9, 12, 3, 4];
	var sum = ('' + n)
		.split('')
		.reverse()
		.reduce((sum, v, i) => sum + v * nums[i % nums.length], 0);
	return sum === n ? n : thirt(sum);
}

/* Are they the "same"? */

function comp(a, b) {
	return (
		!!a &&
		!!b &&
		a
			.map(x => x * x)
			.sort()
			.join() == b.sort().join()
	);
}

/* Detect Pangram */

function isPangram(string) {
	return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

/* Counting DuplicatesCounting Duplicates */

function duplicateCount(text) {
	return (
		text
			.toLowerCase()
			.split('')
			.sort()
			.join('')
			.match(/([^])\1+/g) || []
	).length;
}

/* Who likes it? */

function likes(names) {
	var templates = [
		'no one likes this',
		'{name} likes this',
		'{name} and {name} like this',
		'{name}, {name} and {name} like this',
		'{name}, {name} and {n} others like this',
	];
	var idx = Math.min(names.length, 4);

	return templates[idx].replace(/{name}|{n}/g, function (val) {
		return val === '{name}' ? names.shift() : names.length;
	});
}

/* Array.diff */

function array_diff(a, b) {
	return a.filter(e => !b.includes(e));
}
