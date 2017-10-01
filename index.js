//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

const testNum = num => {
	return new Promise((resolve, reject) => {
		if (num > 10) {
			resolve(`${num} is greater than 10, success`);
		} else if (num < 10) {
			reject(`${num} is less than 10, error`);
		}
	});
};

testNum(15)
	.then(result => console.log(result))
	.catch(error => console.log(error));

// 15 is greater than 10, success!

testNum(5)
	.then(result => console.log(result))
	.catch(error => console.log(error));

// 5 is less than 10, error!

// Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

const makeAllCaps = array => {
	return new Promise((resolve, reject) => {
		resolve(
			array.map(word => {
				if (typeof word !== 'string') {
					reject(
						'No, the array you passed in contained an element that was not a string!',
					);
				}
				return word.toUpperCase();
			}),
		);
	});
};

const sortWords = (result) => {
  return new Promise((resolve, reject) => {
    resolve(result.sort())
  })
}
makeAllCaps(['wowow', 'pants', 'bird'])
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error))

// ['BIRD', 'PANTS', 'WOWOW']

makeAllCaps(['wowow', 5, 'bird'])
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error))

// 'No, the array you passed in contained an element that was not a string!'
