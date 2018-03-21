// Easy Going
// Write a for loop that will log the numbers 1 through 20.

// function num() {
// for (var i = 1; i <=20; i++) {
// 	console.log(i);
// }
// }
// num();

// // Get Even
// // Write a for loop that will log only the even numbers in 0 through 200.
// function even() {
// 	for (var i = 0; i <= 200; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i)
// 		}
// 	}
// }
// even();

// // Excited Kitten
// // 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// function kitten() {
// for (var i = 1; i <= 20; i++) {
// 	console.log('Love me, pet me! HSSSSSS!');
// }
// }
// kitten();

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint: You will need to use Math.random()


// function kittenRandom() {
// 	for (var i = 1; i <= 20; i++) {
// 		if (i % 2 === 0) {
// 			var num = Math.floor(Math.random() * 3);
// switch (num) {
// 	case 0:
// 		console.log('human...why you taking pictures of me?');
// 		break;
// 	case 1:
// 		console.log('the catnip made me do it');
// 		break;
// 	case 2:
// 		console.log('why does the red dot always get away')
// 		break;
// 			}
// 		}
// 	}
// }
// kittenRandom();

// Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// function fizzBuzz() {
// for (let i = 1; i <= 20; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log('FizzBuzz');
// } else if (i % 3 === 0) {
// 	console.log('Fizz');
// } else if (i % 5 === 0) {
// 	console.log('Buzz');
// } else {
// 	console.log(i)
// 	}
// }
// }

// fizzBuzz();

// Getting to Know You

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

// // 1. Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".

// thom[0] = "Gameboy"
// console.log(thom);

// // 2. Karolin just had her birthday; change Karolin's array to reflect her being a year older.

// karolin[1] = karolin[1] + 1
// console.log(karolin);

// // 3. Change Matt H's hometown from Philadelphia to "Gotham City".

// matt[2] = "Gotham City"
// console.log(matt);

// // 4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".

// kristyn[2] = "Brooklyn"
// console.log(kristyn);

// Yell at the Ninja Turtles

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

var turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']


// 2. Use a for loop to call toUpperCase() on each of them and print out the result.

var turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

function turtleUpper (array) {
for (var i = 0; i <= turtles.length-1; i++) {
	console.log(array[i].toUpperCase());
}
}

turtleUpper(turtles);














