// 1. sa verificam numerele din array
// 2. verificam daca sunt egale cu numarul parametru din apelul functiei
// 3. returneze true sau false

// const arr1 = [];
// const arr2 = [];

// function findNumber(arr1, number) {
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === number) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// let randomNumber;

// for (let i = 0; i < 100; i++) {
// 	randomNumber = Math.floor(Math.random() * 100);
// 	if (!findNumber(arr1, randomNumber)) {
// 		arr1.push(randomNumber);
// 	} else continue;
// }

// for (let i = 0; i < 100; i++) {
// 	randomNumber = Math.floor(Math.random() * 100);
// 	if (!findNumber(arr2, randomNumber) && randomNumber % 2 === 0) {
// 		arr2.push(randomNumber);
// 	}
// }

// console.log(arr1);
// console.log(arr2);

// 1. ia propozitie
// 2. daca gaseste un cuvant sa returneze pozitia de la care incepe cuvantul
// 3. pozitiile sa fie bagate intr-un array si sa le afiseze

// 1. take a string
// 2. if it finds the word, return the starting position of the word
// 3. push the positions into an array

// const string =
// 	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed massa a elit dapibus placerat. Duis ut vestibulum sapien. Vestibulum eget metus sed orci fringilla laoreet. Ut nibh enim, ullamcorper eget laoreet id, pharetra tempor dolor. Cras a porta odio. Nunc malesuada pulvinar enim, eget molestie mauris tincidunt sit amet. Etiam vulputate odio ut ipsum porttitor, vitae porta lacus dictum. Phasellus ut enim vulputate lectus varius feugiat vitae vel nunc. In maximus dolor ac tortor suscipit, vitae sodales mi volutpat.';

// let searchingWords = [
// 	'ipsum',
// 	'adipiscing',
// 	'gabiadminul',
// 	'Integer',
// 	'dapibus',
// 	'Duis',
// 	'altcuvant',
// 	'sapien',
// 	'laoreet',
// 	'porttitor',
// 	'altcuvantcarenuexista',
// ];

// let positions = [];

// function findWord() {
// 	let iPositions;
// 	for (let i = 0; i < searchingWords.length; i++) {
// 		iPositions = string.indexOf('maximus');
// 		if (iPositions) {
// 			string.splice(iPositions, 0, 'word');
// 		}
// 	}
// }

// findWord();
// console.log(positions);

// const eachWord = string.split(' ');
// const newArr = [];

// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
// const numbers = ['1', '2', '3', '4', '5', '6'];

// // const a = numbers[0];
// // const b = alphabet[1];

// Rest Operator

// const [a, , c, ...rest] = alphabet; // skip an element and combine the rest of the array

// const newArray = alphabet.concat(numbers); // the alternative method to combine two arrays

// console.log(newArray);

// function sumAndMultiply(a, b) {
// 	return [a + b, a * b, a / b];
// }

// const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);

// console.log(sum);
// console.log(multiply);
// console.log(division);

// Nested Object Destructuring

// const personOne = {
// 	name: 'Kyle',
// 	age: 24,
// 	address: {
// 		city: 'Somewhere',
// 		state: 'One of them',
// 	},
// };

// const personTwo = {
// 	name: 'Sally',
// 	age: 32,
// 	favoriteFood: 'Watermelon',
// 	address: {
// 		city: 'Somewhere else',
// 		state: 'Another one of them',
// 	},
// };

// const { name, favoriteFood, ...address } = personTwo;
// console.log(name);
// console.log(address);

// Skip an element of an array

// const bestFriends = ['Gabi', 'White', 'Sebi', 'Albert'];

// const [friend1, friend2, , ...rest] = friends;

// console.log(friend1);
// console.log(friend2);
// console.log(rest);

// const friends = bestFriends.splice(2, 1);
// console.log(bestFriends);

// let name = 'Someone you dont know';
// name = name.replace('dont', '');
// console.log(name);

// Combining objects

// const personOne = {
// 	name: 'Kyle',
// 	age: 24,
// 	favoriteFood: 'Rice',
// 	address: {
// 		city: 'Somewhere',
// 		state: 'One of them',
// 	},
// };

// const personTwo = {
// 	age: 32,
// 	favoriteFood: 'Watermelon',
// };

// // const personThree = { ...personOne, ...personTwo };
// // console.log(personThree);

// // Object destructuring inside of function call

// function printUser({ name, age, favoriteFood = 'Watermelon' }) {
// 	console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}`);
// }

// printUser(personOne);

// const personOne = {
// 	name: 'Kyle',
// 	age: 24,
// 	favoriteFood: 'Rice',
// 	address: {
// 		city: 'Somewhere',
// 		state: 'One of them',
// 	},
// };

// const personTwo = {
// 	age: 32,
// 	favoriteFood: 'Watermelon',
// };

// const personThree = { ...personOne, ...personTwo };
// console.log(personThree);

// Object destructuring inside of function call

// function printUser({ name, age, favoriteFood = 'Watermelon' }) {
// 	console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}`);
// }

// function printUser({ name = 'gabi', age, favoriteFood = 'Sarmale' }) {
// 	console.log(
// 		`My name is ${name}, I am ${age} years old and my favorite food is ${favoriteFood}`
// 	);
// }

// printUser(personOne);

// printUser(personOne);

// for (let vals of Object.values(personOne)) {
// 	console.log(vals);
// }

// const user = {
// 	name: 'Ghabi',
// 	age: 23,
// };

// const copiedUser = {};
// copiedUser.name = user.name;
// copiedUser.age = user.age;

// for (let key in copiedUser) {
// 	console.log(key, user[key]);
// 	copiedUser[key] = user[key];
// }

// const copiedUser = Object.assign({}, user);

// console.log(copiedUser);

// const myself = {
// 	firstName: 'Gabi',
// 	lastName: 'Tudor',
// 	age: 23,
// 	isMarried: false,
// };

// console.log(myself.items.name);

// for (let key of Object.values(myself)) {
// 	myself[key].newProperty = 'newProperty';
// }

// console.log(myself);

// let student1 = {
// 	firstName: 'Steven',
// 	lastName: 'Hancock',
// 	student: true,
// 	quiz1: 90,
// 	q2: 70,
// 	q3: '85',
// 	quiz4: 100,
// 	quiz5: 0,
// };

// for (let key in student1) {
// 	console.log(key);
// 	console.log(student1[key]);
// }

// Object.values(student1).forEach((val) => {
// 	console.log(val);
// });

// for (key of Object.values(student1)) {
// 	console.log(key);
// }

// const user = {
// 	name: 'Ghabi',
// 	age: 23,
// };

// // const copiedUser = {};
// // copiedUser.name = user.name;
// // copiedUser.age = user.age;

// // for (let key in user) {
// // 	console.log(key, user[key]);
// // 	copiedUser[key] = user[key];
// // }

// const copiedUser = Object.assign({}, user);

// const user1 = Object.assign({}, copiedUser);

// console.log(user1);

// const user2 = {};

// user2.name = copiedUser.name;

// user2.age = copiedUser.age;

// console.log(user2);

// for (let key in user2) {
// 	console.log(key, user[key]);
// 	copiedUser[key] = user2[key];
// }

// const user3 = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	age: 30,
// };

// const user4 = Object.assign({}, user3);
// console.log(user4);

// const user5 = Object.assign({}, user4);
// console.log(user5);

// const user6 = Object.assign({}, user5);
// console.log(user6);

// const user7 = Object.assign({}, user6);
// console.log(user7);

// const user8 = Object.assign({}, user7);
// console.log(user8);

// const user9 = {};

// user9.age = user8.age;

// user9.firstName = user8.firstName;

// user9.lastName = user8.lastName;

// console.log(user9);

// const user10 = {};

// user10.age = user9.age;
// user10.firstName = user9.firstName;
// user10.lastName = user9.lastName;

// console.log(user10);

// const user11 = {};

// user11.age = user10.age;
// user11.firstName = user10.age;
// user11.lastName = user10.lastName;

// console.log(user11);

// user12 = {};

// for (let key in user11) {
// 	console.log(key, user11[key]);
// 	user12[key] = user11[key];
// }

// console.log(user12);

// user13 = {};

// for (let key in user12) {
// 	console.log(key, user12[key]);
// 	user13[key] = user12[key];
// }

// console.log(user13);

// user14 = {};

// for (let key in user13) {
// 	console.log(key, user13[key]);
// 	user14[key] = user13[key];
// }

// user15 = {};

// for (let key in user14) {
// 	console.log(key, user14[key]);
// 	user15[key] = user14[key];
// }

// const csUniversitatea = {
// 	firstName: 'STIINTA!',
// 	lastName: 'CRAIOVAAA',
// 	anInfiintare: 1948,
// };

// const fcUniversitatea = Object.assign({}, csUniversitatea);

// console.log(fcUniversitatea);

// const fcUniversitatea2 = {};

// fcUniversitatea2.firstName = fcUniversitatea.firstName;
// fcUniversitatea2.lastName = fcUniversitatea.lastName;
// fcUniversitatea2.anInfiintare = fcUniversitatea.anInfiintare;

// console.log(fcUniversitatea2);

// const fcUniversitatea3 = {};

// for (let key in csUniversitatea) {
// 	console.log(key, csUniversitatea[key]);
// 	fcUniversitatea3[key] = csUniversitatea[key];
// }

// console.log(fcUniversitatea3);

// Math Object

// console.log(Math.E);

// const pizza = {
// 	name: 'Pizza cu mici',
// 	price: 63,
// 	size: 'party',
// };

// const pizza1 = {};

// pizza1.name = pizza.name;
// pizza1.price = pizza.price;
// pizza1.size = pizza.size;

// console.log(pizza1);

// const pizza2 = {};

// for (let key in pizza1) {
// 	console.log(key, pizza1[key]);
// 	pizza2[key] = pizza1[key];
// }

// console.log(pizza2);

// const pizza3 = Object.assign({}, pizza2);

// console.log(pizza3);

// Math Object

// Math.round() // returns the nearest integer
// Math.pow(x,y) // returns the value of x to the power of y

// console.log(Math.round(3.2)); // returns 3
// console.log(Math.round(3.5)); // returns 4
// console.log(Math.round(3.6)); // return 4
// console.log(Math.pow(8, 3)); // returns 512

// // Math.sqrt()
// // Math.sqrt(x) returns the square root of x: (radical din x)
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(16));

// // Math.abs(x) returns the absolute (positive) value of x: returneaza valoarea pozitiva a lui x
// console.log(Math.abs(-4.7));

// // Math.ceil(x) returns the value of x rounded up to its nearest next integer
// console.log(Math.ceil(3.5));

// // Math.floor(x) returns the value of x rounded up to its previous integer

// console.log(Math.floor(3.7));

// // Math.random() returns a random number
// // between 0 (inclusive), and 1 (exclusive)
// console.log(Math.trunc(Math.random() * 100));

// // Math object properties

// console.log(Math.PI); // returns PI
// console.log(Math.SQRT2); // returns the square root of 2
// console.log(Math.SQRT1_2); // returns the square root of 1/2
// console.log(Math.LN2); // returns the natural logarithm of 2
// console.log(Math.LN10); // returns the natural logarithm of 10
// console.log(Math.LOG2E); // returns base 2 logarithm of E
// console.log(Math.LOG10E); // returns base 10 logarithm of E

//JSON Data Format

// const user = {
// 	firstName: 'Ghabi',
// 	lastName: 'Thudoor',
// 	age: 23,
// };

// const jsonData = JSON.stringify(user);
// console.log(JSON.parse(jsonData));
// console.log(jsonData);

// const user1 = {
// 	firstName: 'Someone',
// 	lastName: 'Else',
// 	age: 15,
// };

// const jsonData1 = JSON.stringify(user1);
// console.log(jsonData1);
// const jsonData2 = JSON.parse(jsonData1);
// console.log(jsonData2);

// Default Parameters

// console.log(calculateSum(10, 50));

// function calculateSum(number1, number2) {
// 	sum = number1 + number2;
// 	return sum;
// }

// // Function Expression

// const calcExp = function (number1, number2) {
// 	sum = number1 + number2;
// 	return sum;
// };

// console.log(calcExp(10, 70));

// // Arrow Function

// const calcSumArrow = (number1, number2) => number1 + number2;

// console.log(calcSumArrow(40, 30));

// const mulByTwo = function (number1) {
// 	return number1 * 2;
// };

// console.log(mulByTwo(6));

// // Arrow Function

// const multByTwoArr = (number1) => number1 * 2;
// console.log(multByTwoArr(8));

// function sum(a, b) {
// 	return a + b;
// }

// let sum2 = (a, b) => a + b;

// console.log(sum2(5, 5));

// function isPositive(number) {
// 	return number >= 0;
// }

// console.log(isPositive(5));

// let isPositive2 = (number) => number >= 0;

// console.log(isPositive2(10));

// // function randomNumber() {
// // 	return Math.random();
// // }

// // console.log(randomNumber());

// let randomNumber = () => Math.random();

// console.log(randomNumber);

// Rest Parameter

// function multiply(...args) {
// 	console.log(args);

// 	let mult = 1;

// 	for (let number of args) {
// 		mult = mult * number;
// 	}

// 	return mult;

// 	// return number1 * number2 * number3 * number4;
// }

// console.log(multiply(2, 3, 4, 5, 9, 8));

// Rest Parameter

// function multiply(...args) {
// 	console.log(args);

// 	let mulp = 1;

// 	for (num of args) {
// 		mulp = mulp * num;
// 	}

// 	return mulp;

// 	// return number1 * number2 * number3 * number4;
// }

// console.log(multiply(2, 3, 4, 5));

// function subtraction(...args) {
// 	console.log(args);
// 	let number = 100;
// 	for (let num of args) {
// 		number = number - num;
// 	}
// 	return number;
// }

// console.log(subtraction(10, 20, 30, 40));

// function sum(...args) {
// 	console.log(args);
// 	let sum1 = 0;
// 	for (let num of args) {
// 		sum1 += num;
// 	}
// 	return sum1;
// }

// console.log(sum(1, 2, 4, 6, 7, 5));

// function checkOut(...items) {
// 	let total = 0;

// 	for (let i in items) {
// 		total += items[i];
// 	}
// 	return total;
// }

// console.log('The total is: $' + checkOut(10, 20, 30));

// function displayName(first, last, ...middle) {
// 	console.log(first, middle.join(' '), last);
// }

// displayName('Smitty', 'Jensen', 'Werben', 'Jager', 'Man');

// function sub(...args) {
// 	let total = 0;
// 	for (let i in args) {
// 		total -= args[i];
// 	}
// 	return total;
// }

// console.log(sub(1, 2, 3, 4, 5));

// let obj = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	age: 30,
// };

// let newObj = JSON.stringify(obj);

// console.log(newObj);

// let newObj2 = JSON.parse(newObj);
// console.log(newObj2);

// Finding Object in Array

// const doctors = [
// 	{ name: 'Kazi', age: 20 },
// 	{ name: 'Jack', age: 30 },
// 	{ name: 'Ariyan', age: 40 },
// ];

// const result = doctors.find(function (doctor) {
// 	return doctor.age > 30;
// });

// console.log(result);

// const companies = [
// 	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
// 	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
// 	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
// 	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
// 	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
// 	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
// 	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
// 	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
// 	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // forEach

// companies.forEach(function (company) {
// 	console.log(company.name);
// });

// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
// 	if (ages[i] > 18) {
// 		canDrink.push(ages[i]);
// 	}
// }

// const canDrink = ages.filter(function (ages) {
// 	if (ages >= 18) {
// 		return true;
// 	}
// });

// const canDrink = ages.filter((age) => age >= 21);

// Filter retail company

// const retailCompanies = companies.filter(function (company) {
// 	if (company.category === 'Retail') {
// 		return true;
// 	}
// });

// console.log(retailCompanies);

// filter

// Get all the retail companies

// const retailCompanies = companies.filter(
// 	(company) => company.category === 'Retail'
// );

// console.log(retailCompanies);

// // Get80s companies

// const eightiesCompanies = companies.filter(
// 	(company) => company.start >= 1980 && company.start <= 1989
// );

// console.log(eightiesCompanies);

// // Get companies that lasted 10 years or more

// const companyLastTenYears = companies.filter(
// 	(company) => company.end - company.start >= 10
// );

// console.log(companyLastTenYears);

// // map

// // Create an array of company names

// // const companyNames = companies.map(function (company) {
// // 	return company.name;
// // });

// const test = companies.map(function (company) {
// 	return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(
// 	(company) => `${company.name} [${company.start} - ${company.end}]`
// );

// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log(ageMap);

// sort

// Sort companies by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
// 	if (c1.start > c2.start) {
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// });

// const sortedCompanies = companies.sort((c1, c2) =>
// 	c1.start > c2.start ? 1 : -1
// );

// console.log(sortedCompanies);

// // Sort ages

// const sortAges = ages.sort((a, b) => b - a);

// console.log(sortAges);

// reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
// 	ageSum += ages[i];
// }

// const ageSum = ages.reduce((total, age) => total + age, 0);

// // Get total years for all companies

// // const totalYears = companies.reduce(function (company) {
// // 	return total + (company.end - company.start);
// // }, 0);

// const totalYears = companies.reduce(
// 	(total, company) => total + (company.end - company.start),
// 	0
// );

// // Combine Methods

// const combined = ages
// 	.map((age) => age * 2)
// 	.filter((age) => age >= 40)
// 	.sort((a, b) => a - b)
// 	.reduce((a, b) => a + b, 0);

// console.log(combined);

// console.log(totalYears);

// for (let i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);
// }

// Iterating in Array

// const numbers = [1, 2, 3, 4, 5];

// // for (let index = 0; index < numbers.length; index++) {
// // 	console.log(numbers[index]);
// // }

// // for (num of numbers) {
// // 	console.log(num);
// // }

// numbers.forEach((num) => console.log(num));

// numbers.forEach(function (num, index) {
// 	console.log(index, num);
// });

// const names = ['Ghabi', 'Kazi', 'Ariyan', 'JackMa', 'Albert', 'White'];

// names.forEach((name) => console.log(name));

// names.forEach(function (name) {
// 	console.log(name);
// });

// const business = [
// 	{ name: 'business1', start: 2022 },
// 	{ name: 'business2', start: 2023 },
// 	{ name: 'business3', start: 2024 },
// 	{ name: 'buisness4', start: 2025 },
// ];

// business.forEach((business) => console.log(business));

// business.forEach((business) => console.log(business.start));

// // business.forEach(function (business) {
// // 	console.log(business.name);
// // });

// business.forEach((business) =>
// 	console.log(business.name === 'business1' && business.start === 2022)
// );

// Sorting & Reversing an Array

// const numbers = [6, 8, 7, 2, 1, 9];

// numbers.sort();
// numbers.reverse();

// console.log(numbers);

// let doctors = [
// 	{ name: 'Ghabi', age: 50 },
// 	{ name: 'Kazi', age: 40 },
// ];

// doctors
// 	.sort(function (d1, d2) {
// 		if (d1.age > d2.age) return +1;
// 		if (d1.age === d2.age) return 0;
// 		if (d1.age < d2.age) return -1;
// 	})
// 	.reverse();

// console.log(doctors);

// const people = [
// 	{ name: 'John', age: 40 },
// 	{ name: 'Jane', age: 32 },
// 	{ name: 'Andrew', age: 35 },
// 	{ name: 'Sarah', age: 30 },
// ];

// people.sort(function (p1, p2) {
// 	if (p1.age > p2.age) return 1;
// 	if (p1.age === p2.age) return 0;
// 	if (p1.age < p2.age) return -1;
// });

// console.log(people);

// const students = [
// 	{ name: 'Mircea', grade: 7 },
// 	{ name: 'Alex', grade: 8 },
// 	{ name: 'Matei', grade: 5 },
// 	{ name: 'Doru', grade: 10 },
// ];

// students
// 	.sort(function (g1, g2) {
// 		if (g1.grade > g2.grade) return 1;
// 		if (g1.grade === g2.grade) return 0;
// 		if (g1.grade < g2.grade) return -1;
// 	})
// 	.reverse();

// console.log(students);

// // const sortedCompanies = companies.sort((c1, c2) =>
// // 	c1.start > c2.start ? 1 : -1
// // );

// const sortedStudents = students.sort((s1, s2) =>
// 	s1.grade > s2.grade ? 1 : -1
// );

// console.log(sortedStudents);

// const cats = [
// 	{ name: 'cat1', weight: 10 },
// 	{ name: 'cat2', weight: 5 },
// 	{ name: 'cat3', weight: 8 },
// 	{ name: 'cat4', weight: 7 },
// 	{ name: 'cat5', weight: 9 },
// ];

// cats.sort((c1, c2) => (c1.weight < c2.weight ? 1 : -1)).reverse();

// console.log(cats);

// const dogs = [
// 	{ name: 'Chuppy', height: 100 },
// 	{ name: 'Oscar', height: 90 },
// 	{ name: 'Leia', height: 50 },
// 	{ name: 'Blacky', height: 40 },
// ];

// dogs
// 	.sort(function (d1, d2) {
// 		if (d1.height > d2.height) return 1;
// 		if (d1.height === d2.height) return 0;
// 		if (d1.height < d2.height) return -1;
// 	})
// 	.reverse();

// console.log(dogs);

// Array Method = every, some

// const numbers = [6, 8, 7, -2, 1, 9];

// const data = numbers.some(function (num) {
// 	return num > 0;
// });

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3];

// const numData = num.every((num) => num < 0);

// console.log(numData);

// console.log(data);

// const data1 = numbers.every((num) => num > 0);

// console.log(data1);

// const people = [
// 	{
// 		name: 'A',
// 		age: 17,
// 	},
// 	{
// 		name: 'B',
// 		age: 56,
// 	},
// 	{
// 		name: 'C',
// 		age: 33,
// 	},
// 	{
// 		name: 'D',
// 		age: 47,
// 	},
// ];

// const isAnyAdult = people.some((person) => person.age > 18);

// const isAnyAdult2 = people.some(function (person) {
// 	return person.age > 18;
// });

// console.log(isAnyAdult2);

// const isEveryAdult = people.every((adult) => adult.age > 18);

// console.log(isEveryAdult);

// const isEveryAdult1 = people.every(function (adult) {
// 	return adult.age > 18;
// });

// console.log(isEveryAdult1);

// const numbers = ['10', '9', '15', '18', '6', '12'];

// const isSomeNumber = numbers.some((number) => number > 10);

// console.log('Is some number', isSomeNumber);

// const isEveryNumber = numbers.every(function (number) {
// 	return number > 10;
// });

// console.log('Is every number', isEveryNumber);

// let programmers = [
// 	{ name: 'Ghabi', age: 25 },
// 	{ name: 'Nikolai', age: 30 },
// 	{ name: 'Alexei', age: 35 },
// ];

// const sortByAge = programmers
// 	.sort((p1, p2) => (p1.age > p2.age ? 1 : -1))
// 	.reverse();

// console.log(sortByAge);

// const sortByAge1 = programmers
// 	.sort(function (p1, p2) {
// 		if (p1.age > p2.age) return 1;
// 		if (p1.age === p2.age) return 0;
// 		if (p1.age < p2.age) return -1;
// 	})
// 	.reverse();

// console.log(sortByAge1);

// Array Method - concat, slice

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6, 7];

// const num = num1.concat(num2);

// console.log(num);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const middlePart = numbers.slice(3, 6);

// console.log(middlePart);

// const endingPart = numbers.slice(6, 9);
// console.log(endingPart);

// const startingPart = numbers.slice(0, 3);
// console.log(startingPart);

// const positions = [
// 	'pos0',
// 	'pos1',
// 	'pos2',
// 	'pos3',
// 	'pos4',
// 	'pos5',
// 	'pos6',
// 	'pos7',
// 	'pos8',
// 	'pos9',
// ];

// const firstThree = positions.slice(0, 3);

// console.log(firstThree);

// const middleElements = positions.slice(3, 6);

// console.log(middleElements);

// const lastThree = positions.slice(6, 9);
// console.log(lastThree);

// let txt = 'I can eat bananas all day';
// let x = txt.slice(9, -8);

// console.log(x);

// const names = ['Kazi', 'Ariyan', 'Ghabi', 'Trex', 'Power', 'Ranger'];

// const namesWanted = names.slice(1, -3);

// console.log(namesWanted);

// const namesWanted2 = names.slice(3, -1);

// console.log(namesWanted2);

// const namesWanted3 = names.slice(0, -5);
// console.log(namesWanted3);

// const modifyNames = names.splice(2, 3, 'Albert', 'White');

// console.log(modifyNames);
// console.log(names);

// const mergedArrays = positions.concat(names);

// console.log(mergedArrays);

// Spread Operator

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(...numbers);
// console.log(numbers[0], numbers[1]);
// console.log(numbers);

// const numbersContinue = [9, 10, 11, 12, 13, 14, 15];

// const copiedArray = [...numbers, ...numbersContinue];
// console.log(copiedArray);

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// const num1andnum2 = [...num1, ...num2];
// console.log(num1andnum2);

// Joining Array

// let numbers = [1, 2, 3, 4];

// let joinArray = numbers.join(' ');
// console.log(joinArray);

// let message = 'Hi My name is Ghabi';

// const arrayMessage = message.split(' ');
// console.log(arrayMessage.join('-'));

// ES6 Feature: Map

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Multiply by two using map

// const mulByTwoFnc = numbers.map(function (num) {
// 	return num * 2;
// });

// console.log(mulByTwoFnc);

// const mulByTwo = numbers.map((num) => num * 2);

// console.log(mulByTwo);

// const obj1 = [
// 	{ name: 'Kazi', age: 40 },
// 	{ name: 'Ariyan', age: 50 },
// ];

// const getNames = obj1.map((n) => n.name);
// console.log(getNames);

// const getNamesFnc = obj1.map(function (n) {
// 	return n.name;
// });

// console.log(getNamesFnc);

// const getAges = obj1.map((a) => a.age);

// console.log(getAges);

// const getAges1 = obj1.map(function (a) {
// 	return a.age;
// });
// console.log(getAges1);

// ES6: Map Method

// const numbers = [1, 2, 3, 4, 5];

// const mulByTwo = numbers.map(function (n) {
// 	return n * 2;
// });
// console.log(mulByTwo);

// const mulByTwo1 = numbers.map((n) => n * 2);
// console.log(mulByTwo1);

// const obj1 = [
// 	{ name: 'John', age: 30 },
// 	{ name: 'Doe', age: 35 },
// 	{ name: 'Mike', age: 40 },
// ];

// const getProperties = obj1.map((getAge) => getAge.age);

// console.log(getProperties);

// const getPropertiesName = obj1.map((getName) => getName.name);
// console.log(getPropertiesName);

// const getProperties = obj1.map(function (n) {
// 	return n.name;
// });

// console.log(getProperties);

// const getProperties1 = obj1.map((n) => n.name);

// console.log(getProperties1);

// const getAges = obj1.map(function (a) {
// 	return a.age;
// });

// console.log(getAges);

// const getAges1 = obj1.map((a) => a.age);

// console.log(getAges1);

// ES6: Filtering an Array

// let numbers = [1, 2, 3, 4, 5, 6];

// // let onlyOddNumbers = [];

// // for (let num of numbers) {
// // 	if (num % 2 !== 1) {
// // 		onlyOddNumbers.push(num);
// // 	}
// // }

// // console.log(onlyOddNumbers);

// const onlyOddNumbers = numbers.filter(function (num) {
// 	return num % 2 === 1;
// });

// console.log(onlyOddNumbers);

// const onlyOddNumbers1 = numbers.filter((num) => num % 2 !== 1);

// console.log(onlyOddNumbers1);

// const numbers = [1, 2, 3, 4, 5, 6];

// const even = numbers.filter(isEven);

// function isEven(value) {
// 	return value % 2 === 0;
// }

// console.log(even);

// const people = [
// 	{
// 		name: 'Florin',
// 		age: 26,
// 	},
// 	{
// 		name: 'Ivan',
// 		age: 18,
// 	},
// 	{
// 		name: 'Jai',
// 		age: 15,
// 	},
// ];

// const adults = people.filter((a) => a.age >= 18);

// const adults1 = people.filter(function (a) {
// 	return a.age >= 18;
// });

// console.log(adults1);
// console.log(adults);

// const numbers = [
// 	1, 2, 3, 2, 1, 3, 4, 5, 6, 4, 10, 15, 12, 13, 12, 14, 10, 9, 8, 2, 4, 5, 3, 1,
// 	15,
// ];

// const numbersFiltered = numbers.filter((value, index, array) => {
// 	return;
// });

// Print integers 1 to N, but print 'Fizz' if an integer is divisible by 3, 'Buzz' if an integer is divisible by 5 and 'FizzBuzz' if an integer is divisible by both 3 and 5.

// const storeInventory = [
// 	['Item: Computer', 'Price:$1500', 'Inventory:25'],
// 	['Item: Speakers', 'Price:$50', 'Inventory:100'],
// 	['Item: Monitors', 'Price:$200', 'Inventory:27'],
// 	['Item: Headphones', 'Price:$400', 'Inventory:7'],
// 	['Item: Printers', 'Price: $100', 'Inventory:90'],
// 	['Item: USB Cable', 'Price:$9', 'Inventory:500'],
// 	['Item: Router', 'Price:$350', 'Inventory:23'],
// 	['Item: Wireless Keyboard', 'Price:$20', 'Inventory:55'],
// 	['Item: Fans', 'Price:$35', 'Inventory:6'],
// ];

// for (let i = 0; i < storeInventory.length; i++) {
// 	if (i > 0) {
// 		console.log('---------------------');
// 	}
// 	for (let j = 0; j < storeInventory[i].length; j++) {
// 		console.log(storeInventory[i][j]);
// 	}
// }

// substr and substring String methods
// str.substring(from,to)
// str.substr(from,length)

// Rest Operator Recap

// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// const numbers = ['1', '2', '3', '4', '5', '6', '7'];

// // const a = alphabet[0];
// // const b = alphabet[1];

// const [a, , c, ...rest] = alphabet;

// const newArray = [...alphabet, ...numbers];

// const newArray1 = alphabet.concat(numbers);

// console.log(newArray);
// console.log(newArray1);

// console.log(a);
// console.log(c);
// console.log(rest);

// A function which takes 2 parameters and one default value and then returns the sum of numbers we pass in, the multiplication and the division

// const sumAndMultiply = (a, b) => [a * b, a + b];

// const [sum, multiply] = sumAndMultiply(2, 3);

// console.log(sum);
// console.log(multiply);

// console.log(sum);
// console.log(multiply);
// console.log(division);

// const personOne = {
// 	name: 'Kyle',
// 	age: 24,
// 	favoriteFood: 'Rice',
// 	address: {
// 		city: 'Somewhere',
// 		state: 'One of them',
// 	},
// };

// const personTwo = {
// 	age: 32,
// 	favoriteFood: 'Watermelon',
// };

// const personThree = { ...personOne, ...personTwo };

// console.log(personThree);

// // if we want to set the variable name to be firstName instead, we put the actual name inside the object we're destructuring, in this case name, then we put a column : and then we put the actual variable name we want example below name: firstName. It is taking the name property from the person and it is mapping that to the firstName variable that we're creating and we can even use default values

// function printUser({ name, age }) {
// 	console.log(`Name is ${name}, age is ${age} `);
// }

// function printUser1(user) {
// 	console.log(`Name is ${user.name}, age is ${user.age}`);
// }

// const printPerson = (user) =>
// 	console.log(`Name is ${user.name}, age is ${user.age}`);

// printPerson(personOne);

// const printPerson1 = ({ name, age, favoriteFood = 'Watermelon' }) =>
// 	console.log(`Name is ${name}, age is ${age}. Food is ${favoriteFood}`);

// printPerson1(personOne);
// printUser1(personOne);
// printUser(personOne);

// to remove a specific element from an array :

// const friends = ['White', 'Albert', 'Ghabi', 'Kazi', 'Ariyan'];

// const bestFriends = friends.splice(3, 2);

// console.log(bestFriends);

// console.log(friends);

// // to remove a word

// let name = "Someone you don't know";
// name = name.replace("don't ", '');
// console.log(name);

// let movies = [
// 	'Star Wars',
// 	'Star Trek',
// 	'Jaws',
// 	'Jurassic Park',
// 	'Gross Pointe Blank',
// 	'Eternal Sunshine of the Spotless Mind',
// 	'Memento',
// 	'Dog Soldiers',
// 	'The Host',
// 	'Gran Torino',
// 	'Close Encounter of the Third Kind',
// 	'Good Will Hunting',
// 	'Layer Cake',
// 	'Casino Royale',
// 	'Almost Famous',
// ];

// let keyword1 = 'Star'; // appears more than once
// let keyword2 = 'Cake'; // appears once
// let keyword3 = 'Max'; // not in list

// let test1 = movies.some(function (title, index) {
// 	console.log(title, index);
// 	return title.indexOf(keyword1) > -1;
// });

// let test2 = movies.every(function (title, index) {
// 	console.log(title, index);
// });

// forEach

// [1, 2, 3].forEach(function (item, index) {
// 	console.log(index, item);
// });

// map

// [1, 2, 3].forEach((item, index) => console.log(index, item));

// const three = [1, 2, 3];
// const doubled = three.map(function (item) {
// 	return item * 2;
// });

// console.log(doubled);

// const four = [1, 2, 3, 4];

// const res = four.map((item) => item * 2);

// console.log(res);

// const res1 = four.map(function (item) {
// 	return item * 2;
// });

// console.log(res1);

// replace the numbers in the array with the words : 'fizz', 'buzz', 'FizzBuzz'

// const numbers = [
// 	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
// 	23, 24, 25,
// ];

// const FizzBuzz = numbers.map(function (num) {
// 	if (num % 3 === 0 && num % 5 === 0) {
// 		console.log(`Fizz Buzz`, num);
// 	} else if (num % 3 === 0) {
// 		console.log(`Fizz`, num);
// 	} else if (num % 5 === 0) {
// 		console.log(`Buzz`, num);
// 	} else {
// 		console.log(num);
// 	}
// });

// const arr = [];

// const fizzBuzzCustom = function () {
// 	for (let i = 0; i < 100; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			arr.push('FizzBuzz');
// 		} else if (i % 3 === 0) {
// 			arr.push('Fizz');
// 		} else if (i % 5 === 0) {
// 			arr.push('Buzz');
// 		} else {
// 			arr.push(i);
// 		}
// 	}
// };

// fizzBuzzCustom();
// console.log(arr);

// const arrN = [];

// const generateNumbers = function () {
// 	for (let i = 0; i <= 100; i++) {
// 		arrN.push(i);
// 		if (arrN[i] % 3 === 0 && arrN[i] % 5 === 0) {
// 			arrN.splice(arrN[i], 1, 'FizzBuzz');
// 		} else if (arrN[i] % 3 === 0) {
// 			arrN.splice(arrN[i], 1, 'Fizz');
// 		} else if (arrN[i] % 5 === 0) {
// 			arrN.splice(arrN[i], 1, 'Buzz');
// 		}
// 	}
// };

// generateNumbers();

// console.log(arrN);

// filter
// is gonna take an array and it is going to check each item in the array against some kind of condition to see if its true or false if its true is going to put the item in the array and if it is false it is not going to put the item back in the array, and each of these methods (map, filter so far) create a brand new array

// const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = ints.filter((item) => item % 2 === 0);
// console.log(evens);

// const odds = ints.filter((item) => item % 2 === 1);
// console.log(odds);

// const evens1 = ints.filter(function (item) {
// 	return item % 2 === 0;
// });

// const odds1 = ints.filter(function (item) {
// 	return item % 2 === 1;
// });

// reduce
// const sum = [1, 2, 3].reduce(function (result, item) {
// 	return result + item;
// }, 0);

// console.log(sum);

// const sum1 = [2, 4, 8].reduce((result, item) => result + item, 0);

// const sum2 = [2, 4, 8].reduce(function (result, item) {
// 	return result + item;
// }, 0);

// console.log(sum1);
// console.log(sum2);

// in reduce we take an array and we're going to do something and then pass the result to the next iteration along with the next item in the array this is why we put result and item as parameters to the callback function the first time it goes to the array is going to have a result and it's going to send that result to the next iteration and item and the number at the end is what the initial result is going to be, if we don't put a number at the end, the result is going to be the first item in the array

// some

// const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
// 	return item < 0;
// });

// console.log(hasNegativeNumbers);

// const hasNegativeNumbersA = [1, 2, 3, -4, -5, 4, 6, -6].some(
// 	(item) => item < 0
// );

// console.log(hasNegativeNumbersA);

// const allPositiveNumbers = [1, 2, 3, 4, 5].every((item) => item > 0);
// console.log(allPositiveNumbers);

// find
// find method goes through every item in the array and checks it against the condition and if that's true it returns that item , so it's searching for a specific item in the array
// const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
// const found = objects.find((item) => item.id === 'b');

// console.log(found);

// const foundR = objects.find(function (item) {
// 	return item.id === 'b';
// });

// console.log(foundR);

// find index
// pretty much the same thing as in the find method but instead, it finds the index of the given object

// const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

// const res = objects2.findIndex((item) => item.id === 'b');

// console.log(res);

// const res1 = objects2.findIndex(function (item) {
// 	return item.id === 'b';
// });

// console.log(res1);

// let s1 = 'Hello World, ';

// let s2 = 'my name is John Doe.';

// let s12 = s1.concat(s2);

// console.log(s12);

// const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce((accumulator, currValue) => {
// 	return accumulator + currValue;
// }, 0);

// // console.log(sum);

// // a = 0, c = 1 => a = 1
// // a = 1, c = -1, => a = 0
// //a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5

// const sum1 = numbers.reduce(
// 	(accumulator, currValue) => accumulator + currValue
// );

// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// //a = 2, c = 3 => a = 5

// const arr = [2, 4, 5, 6, -2, -3, -4];

// let total = arr.reduce(
// 	(accumulator, currentValue) => accumulator + currentValue
// );

// console.log(total);

// // a = 2, c = 4 => a = 6
// // a = 6, c = 5 => a = 11
// // a = 11, c = 6 => a = 17
// // a = 17, c = -2 => a = 15
// // a = 15, c = -3 => a = 12
// // a = 12, c = -4 => a = 8

// let total1 = arr.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// }, 0);

// // a = 0, c = 2 => a = 2
// // a = 2, c = 4 => a = 6
// // a = 6, c = 5 => a = 11
// // a = 11, c = 6 => a = 17
// // a = 17, c = -2 => a = 15
// // a = 15, c = -3 => a = 12
// // a = 12, c = -4 => a = 8

// console.log(total1);

// ES6 Feature: Array and Object Destructuring

// const obj = {
// 	firstName: 'Kazi',
// 	lastName: 'Ariyan',
// 	age: 40,
// 	address: {
// 		long: 343.343,
// 		latitude: 2323.23,
// 	},
// };

// function greeting(obj) {
// 	const { firstName: name, age, address } = obj;
// 	const { long, latitude } = address;
// 	console.log(
// 		`Hello, ${name}, I am ${age} years old, I live nearby the coordinations are ${long}, and ${latitude}`
// 	);
// }

// greeting(obj);

// let [a, b, c, d] = [1, 2, 3, 4];

// console.log(a, b, c, d); //a = 1

// function arrP() {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 0) {
// 			console.log('numarul este 0');
// 			continue;
// 		}
// 		switch (arr[i] % 2 === 0) {
// 			case false:
// 				console.log('impar');
// 				break;
// 			case true:
// 				console.log('par');
// 				break;
// 		}
// 	}
// }

// arrP(arr);

// const arr = [0, 1, 2, 3, -1, -2, -3];

// function arrD() {
// 	let i = 0;
// 	while (i <= arr.length) {
// 		if (arr[i] === 0) {
// 			console.log('numarul este 0');
// 		}
// 		switch (arr[i] % 2 === 0) {
// 			case false:
// 				console.log('impar');
// 				break;
// 			case true:
// 				console.log('par');
// 				break;
// 		}
// 		i++;
// 	}
// }

// arrD(arr);
// console.log(arr);

// While Loops recap
// while (condition){
// statements
// }

// the difference is that do while is going to execute the statements at least once, so it's going to execute the statements and then do the tests, with while loop it does the test before it even executes the statements once

// do{
// statements
// } while(condition)

// let total = 0;

// while (total < 30) {
// 	total += Math.floor(Math.random() * 5) + 1;
// 	console.log('while', total);
// }

// do {
// 	total += Math.floor(Math.random() * 5) + 1;
// 	console.log('do', total);
// } while (total < 30);

// const myArray = [];
// let i = 0;
// do {
// 	myArray.push(i);
// 	i++;
// } while (i < 10);

// console.log(myArray);

// const arrObjs = [
// 	{
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		age: 20,
// 	},

// 	{
// 		firstName: 'Jane',
// 		lastName: 'Doe',
// 		age: 19,
// 	},

// 	{
// 		firstName: 'Kazi',
// 		lastName: 'Ariyan',
// 		age: 40,
// 	},

// 	{
// 		firstName: 'Gabi',
// 		lastName: 'Tudor',
// 		age: 23,
// 	},
// ];

// for (let i = 0; i <= arrObjs.length; i++) {
// 	arrObjs.splice(i);
// }

// console.log(arrObjs);

// ES6 Data Structure : Set

// let set = new Set();

// // In sets we cannot have repetitive elements

// set.add(100);
// set.add(200);
// set.add(300);
// set.add(100);

// set.delete(200);
// console.log(set);
// console.log(set.size);

// for (let el of set) {
// 	console.log(el);
// }

// Sets are ITERABLE

// set.forEach((el) => console.log(el));

// set.clear();

// console.log(set);

// let annoyingHashTags = new Set(['#selfie', '#nofilter']);
// annoyingHashTags.add('#YOLO');
// annoyingHashTags.add(12);
// annoyingHashTags.add([1, 2, 3]);
// console.log(annoyingHashTags.size);
// console.log(annoyingHashTags.has('#YOLO')); // it's much faster than array.includes() method because the set.has() method it takes a single operation to tell if yolo or any other value is in the set so it is much much faster
// console.log(annoyingHashTags.has('#Foodie'));
// annoyingHashTags.add(true);
// console.log(annoyingHashTags);
// annoyingHashTags.delete(true);
// annoyingHashTags.clear();
// console.log(annoyingHashTags);

// let set1 = new Set('dog'); // gives us a set with 3 items it iterates over the string for each character and adds each character in as a value in the set
// console.log(set1);

// let set2 = new Set();
// set2.add(100);
// set2.add(200);
// set2.add(300);

// console.log(set2);

// When it comes to sets we cannot add anything to the beginning or in the middle, we can add values only to the end of the set

// const annoyingHashTags = new Set();
// annoyingHashTags.add('#Selfie');
// annoyingHashTags.add('#NoFilter');
// annoyingHashTags.add('#Blessed');

// for (let val of annoyingHashTags) {
// 	console.log("Please don't use", val);
// }

// const missedCalls = [
// 	'Kevin',
// 	'Stevie',
// 	'Gautam',
// 	'Janis',
// 	'Kevin',
// 	'Kevin',
// 	'Stevie',
// ];

// const uniqueCallers = new Set(missedCalls);

// console.log(uniqueCallers);

// // Now if we want to make the set back into an array we can do it like this:

// console.log([...new Set(uniqueCallers)]);

// let map = new Map();

// map.set('Mango', 'Ame');
// map.set('Banana', 'Kola');
// map.set('Score', 100);

// console.log(map);

// for (el of map) {
// 	console.log(el);
// }

// console.log(map.has('Banana'));
// map.delete('Banana');
// console.log(map.has('Banana'));

// console.log(map.values());
// console.log(map.keys());

// map.clear();

// console.log(map);

// let myMap = function () {
// 	this.collection = {}; // all the things in the map
// 	this.count = 0; // number of items we have
// 	this.size = function () {
// 		return this.count; // to get the size of the map
// 	};
// 	// this.set means that we are going to add something so we pass in a key and a value
// 	this.set = function (key, value) {
// 		this.collection[key] = value; // and then we're just going to set that key and the value into the collection
// 		this.count++; // and we're going to update the count
// 	};
// 	this.has = function (key) {
// 		// means we're going to check if the map has that key
// 		return key in this.collection; // and we're going to return the key in that collection
// 		// the IN operator returns true if the specified property is in the specified object
// 	};
// 	this.get = function (key) {
// 		// now we have get where we're going to pass in the key and we're going to get the value
// 		return key in this.collection ? this.collection[key] : null; // we have a ternary operator so if the key is in this.collection, if that's true we're going to return the key in this first section and then else we're going to return null
// 	};
// 	this.delete = function (key) {
// 		// then we're going to be able to delete an item in the map we just pass in the key
// 		if (key in this.collection) {
// 			// if the key in this.collection,
// 			delete this.collection[key]; // we're going to delete that key
// 			this.count--; // and then we're going to decrement the count
// 		}
// 	};
// 	this.values = function () {
// 		// the values function is where we're going to return an array of all the values in the map
// 		let result = new Array();
// 		for (let key of Object.keys(this.collection)) {
// 			// we have a for loop where we push each item into the array
// 			result.push(this.collection[key]);
// 		}
// 		return result.length > 0 ? result : null; // and then if there's more than 0 items we're going return that array or we're going to return null
// 	};
// 	this.clear = function () {
// 		// and then the clear method we are just going to clear all the items from the map
// 		this.collection = {};
// 		this.count = 0; // and then we're going to set the count to 0
// 	};
// };

// let map = new myMap();
// map.set('arms', 2);
// map.set('fingers', 10);
// map.set('eyes', 2);
// map.set('belley button', 1);

// console.log(map.get('fingers'));
// console.log(map.size());
// console.log(map.values());

// let map2 = new Map();
// map2.has('hands');
// map2.entries();

// let keyObj = {};
// let keyFunc = function () {};

// map2.set('hello', 'string value');
// map2.set(keyObj, 'obj value');
// map2.set(keyFunc, 'func value');
// map2.set(NaN, 'NaN value');

// console.log(map2.size); // size is a property not a method

// console.log(map2.get('hello'));
// console.log(map2.get(keyObj));
// console.log(map2.get(keyFunc));
// console.log(map2.get(NaN));

// Weak Set, Weak Map

// const ws = new WeakSet();

// const object1 = {};
// const object2 = {};

// ws.add(object1);
// ws.add(object2);
// console.log(ws.has(object1));
// console.log(ws.has(object2));

// ws.delete(object1);

// console.log(ws);

// const wem = new WeakMap();

// wem.set(object1, 123456);

// console.log(wem);

// console.log(wem.has(object1));
// console.log(wem.get(object1));

// wem.delete(object1);

// console.log(wem);

// Sets - are individual values

// const myArray = [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 12, 1, 2, 3, 20, 15];

// let mySet = new Set(myArray);

// mySet.add('100');
// mySet.add({ a: 1, b: 2, c: 1, d: 2 });
// mySet.delete(12);
// // mySet.clear();
// mySet.add('100');
// mySet.add('200');
// console.log(mySet.size);

// console.log(mySet);

// mySet.forEach((el) => console.log(el));
// mySet.forEach(function (val) {
// 	console.log(val);
// });

// Map, key value pairs

// let myMap = new Map([
// 	['a1', 'Hello'],
// 	['b2', 'Goodbuy'],
// ]);

// myMap.set('c3', 'Foo');
// myMap.delete('a1');

// console.log(myMap.size);

// Weak Set, Weak Map again from yt

// let carWeakSet = new WeakSet();

// let car2 = {
// 	make: 'Toyota',
// 	model: 'Camry',
// };

// carWeakSet.add(car2);
// carWeakSet.delete(car1);
// console.log(carWeakSet);

// let carWeakMap = new WeakMap();

// let key1 = {
// 	id: 1,
// };

// let key2 = {
// 	id: 1,
// };

// let car1 = {
// 	make: 'Honda',
// 	model: 'Civic',
// };

// let car2 = {
// 	make: 'Toyota',
// 	model: 'Camry',
// };

// carWeakMap.set(key1, car1);
// carWeakMap.set(key2, car2);

// console.log(carWeakMap);

// const myArr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 6, 5, 4];
// const mySet = new Set(myArr);

// console.log(mySet);

// mySet.forEach((el) => console.log(el));

// const myMap = new Map([
// 	['a1', 'b1'],
// 	['a2', 'b2'],
// 	['a3', 'b3'],
// ]);

// myMap.set('a4', 'b4');

// console.log(myMap);

// myMap.forEach((val, key) => console.log(key, val));

// myMap.forEach(function (val, key) {
// 	console.log(key, val);
// });

// myMap.forEach((key, value) => console.log(key, value));

// myMap.forEach(function (key) {
// 	console.log(key);
// });

// for (val of myMap.values()) {
// 	console.log(val);
// }

// for (key of myMap.keys()) {
// 	console.log(key);
// }

// for ([key, val] of myMap.entries()) {
// 	console.log(key, val);
// }

// console.log(Math.floor(Math.random() * 10) + 1);

// const arr = [];

// const pushArr = function (arr) {
// 	for (let i = 0; i < 10; i++) {
// 		arr.push(i);
// 	}
// };

// pushArr(arr);

// const removeRandomNumber = function (arr) {
// 	arr.splice(Math.floor(Math.random() * 10 + 1), 1);
// };

// removeRandomNumber(arr);

// console.log(arr);
// // console.log(arr);

// function linearFunc(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(1000 * 100000);
// 	}
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];

// linearFunc(arr);

// O(n^2)

// function square(n) {
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			console.log(i, j);
// 		}
// 	}
// }

// O(n^3)

// function cube(n) {
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			for (let k = 0; k < n; k++) {
// 				console.log(i, j, k);
// 			}
// 		}
// 	}
// }

// const pos = function getMyPositionInLine(person) {
// 	if (person.nextInLine == null) {
// 		return 1;
// 	}
// 	return 1 + getMyPositionInLine(person.nextInLine);
// };

// console.log(pos(1));

// const s = function reverseString(value) {
// 	if (value === '') {
// 		return '';
// 	} else {
// 		return reverseString(value.substr(1) + value.charAt(0));
// 	}
// };

// reverseString('hello');

// function reverseString(str) {
// 	if (str === '') return '';
// 	else return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString('hello'));

// function reverseString(str) {
// 	return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));

// function reverseStr(str) {
// 	let reverseArr = [...str].reverse().join('');
// 	return reverseArr;
// }
// console.log(reverseStr('asd'));

// function reverseString(str) {
// 	if (str === '') return '';
// 	else {
// 		return reverseString(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseString('Gabi'));

// function reverseStr(str) {
// 	let reverseArr = [...str].reverse().join('');
// 	return reverseArr;
// }

// console.log(reverseStr('ibaG'));

// function reverseStr(str) {
// 	if (str === '') return;
// 	else {
// 		return reverseString(str.substr(1) + str.charAt(0));
// 	}
// }

// const name = 'Tudor Gabi';

// console.log(name.substr(0, 5)); //Tudor

// // console.log(name.substr(5, 9)); // Gabi
// console.log(name.substr(6)); //Gabi

// Get the last two letters of the First Name

// console.log(name.substring(8)); // bi
// console.log(name.substr(name.length - 2)); // bi

// const nameAndAge = 'Tudor Gabi-23';

// console.log(nameAndAge.substr(name.length - 4));

// console.log(nameAndAge.substr(1));

// function reverseString(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseString(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseString('CuiFa'));

// function reverseStr(str) {
// 	let a = [...str].reverse().join('');
// 	console.log(a);
// }

// reverseStr('ibaG');

// function reverseStr1(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseStr1(str.substr(1)) + str.charAt(0);
// 	}
// }

// reverseStr1('ibaG');

// function reverseStr(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseStr(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseStr('star'));

// function isPalindrome(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}

// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrome(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// function isPalindrome(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrome(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// console.log(isPalindrome('kayak'));

// function isPalindrom(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrom(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// console.log(isPalindrom('wow'));

// function reverseStr(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseStr(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseStr('Functie'));

// function reverseStr(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseStr(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseStr('avocado'));
// function reverseStr(str) {
// 	if (str === '') {
// 		return '';
// 	}
// 	return reverseStr(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseStr('Nikolai'));

// function isPalindrom(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrom(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// console.log(isPalindrom('kayak'));

// function isPalindrome(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrom(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// function isPalindrom(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrom(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// console.log(isPalindrom('ara'));
// function isPalindrom(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str.charAt(0) === str.charAt(str.length - 1)) {
// 		return isPalindrom(str.substr(1, str.length - 2));
// 	}
// 	return false;
// }

// console.log(isPalindrom('kayak'));

// function reverseStr(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseStr(str.substr(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseStr('kayak'));

// function reverseStr(str) {
// 	if (str === '') {
// 		return '';
// 	} else {
// 		return reverseStr(str.substr(1)) + str.charAt(0);
// 	}
// }

// function recurse() {
// 	// function code
// 	// recurse()
// 	// function code
// }

// recurse();

// function recurseTest() {
// 	// if(condition){
// 	// recurseTest();
// 	// }
// 	// else{
// 	// // stop calling recurseTest()
// 	// }
// }

// recurseTest();

// // program to count down numbers to 1

// function countDown(number) {
// 	// display the number
// 	console.log(number);
// 	// decrease the number value
// 	const newNumber = number - 1;

// 	// base case
// 	if (newNumber > 0) {
// 		countDown(newNumber);
// 	}
// }

// countDown(4);

// function countDown(number) {
// 	// display the number
// 	console.log(number);
// 	// decease the number value
// 	const newNumber = number - 1;
// 	// base case
// 	if (newNumber > 0) {
// 		countDown(newNumber);
// 	}
// }

// countDown(10);

// function recurse(number) {
// 	// display the number
// 	console.log(number);
// 	// decrease the number value
// 	const newNumber = number - 1;
// 	// cazu de baza
// 	if (newNumber > 0) {
// 		recurse(newNumber);
// 	}
// }

// function recursive(number) {
// 	console.log(number);
// 	const newNumber = number - 1;
// 	if (newNumber >= 10) {
// 		recursive(newNumber);
// 	}
// }

// recursive(11);

// function recursive(number) {
// 	console.log(number);
// 	const newNumber = number - 1;
// 	if (newNumber > 0) {
// 		recursive(number);
// 	}
// }

// recursive(10);

// function countDown(number) {
// 	// display the number
// 	console.log(number);

// 	// decrease the number value
// 	const newNumber = number - 1;

// 	// base case
// 	if (newNumber > 0) {
// 		countDown(newNumber);
// 	}
// }

// countDown(4);

// function rec(number) {
// 	// display the number
// 	console.log(number);

// 	// decrease the number value by 1
// 	const newNumber = number - 1;

// 	// base case
// 	if (newNumber > 0) {
// 		rec(newNumber);
// 	}
// }

// rec(4);

// function recursive(number) {
// 	// display the number
// 	console.log(number);

// 	// decrement the number
// 	const newNumber = number - 1;

// 	// base caze
// 	if (newNumber >= 10) {
// 		recursive(newNumber);
// 	}
// }

// recursive(15);

// function recursive(number) {
// 	// display the number
// 	console.log(number);

// 	// decrement the number
// 	const newNumber = number - 1;

// 	//  base case
// 	if (newNumber >= 10) {
// 		recursive(newNumber);
// 	}
// }

// recursive(20);

// a recursive function which prints a word on each decrementation

// function recurse() {
// 	// function code
// 	let i = 0;
// 	// function code
// 	console.log('recursivity');
// 	// base case
// 	if (i < 5) {
// 		i++;
// 		recurse();
// 	} else {
// 	}
// }

// recurse();

// function countDown(number) {
// 	// display the number
// 	console.log(number);

// 	// decrease the number value
// 	const newNumber = number - 1;

// 	// base case
// 	if (newNumber > 0) {
// 		countDown(newNumber);
// 	}
// }

// countDown(4);

// pseudo code:
// function processDoll(doll){

// if (found the piece of choclate)

// return "Yum Yum";

// else if (there are no more dolls)

// return "No choclate here :("

// else processDoll(the smaller doll)
// }

// Official Definition of Recursion:
// In computer science, recursion is a method of solving a problem where the solution
// depends on solutions to smaller instances of the same problem.

// Unofficial Definition of Recursion:
// "Any situation where you do something, and depending on the results, you might do it again."

// In programming, recursion occurs when a function calls itself.

// Any iterator function (aka function with a loop) can be recursive instead

// iterator function
// const countToTen = (num = 1) => {
// 	while (num <= 10) {
// 		console.log(num);
// 		num++;
// 	}
// };

// countToTen();

// const countToEleven = (num = 1) => {
// 	while (num <= 10) {
// 		console.log(num);
// 		num++;
// 	}
// };

// countToEleven();

// const countToTwelve = (num = 1) => {
// 	while (num <= 12) {
// 		console.log(num);
// 		num++;
// 	}
// };

// countToTwelve();

// recursive functions have 2 parts:
// 1. the recursive call to the function
// 2. at least one condition to exit

// const countToThirteen = (num = 1) => {
// 	while (num <= 13) {
// 		console.log(num);
// 		num++;
// 	}
// };

// const countToFourteen = (num = 1) => {
// 	if (num > 10) return;
// 	console.log(num);
// 	num++;
// 	countToFourteen(num);
// };

// countToFourteen();

// const countToFifteen = (num = 1) => {
// 	if (num > 15) return;
// 	console.log(num);
// 	num++;
// 	countToFifteen();
// };

// countToFifteen();

// const countToFifteen = (num = 1){
// 	if(num > 10) return;
// 	console.log(num);
// 	num++;
// 	recurToTen(num);
// }

//countToThirteen();

// countToThirteen();

// const countToFourteen = function (num) {
// 	while (num <= 14) {
// 		console.log(num);
// 		num++;
// 	}
// 	return countToFourteen();
// };

// countToFourteen();

// function recurse() {
// 	// function code
// 	let i = 0;
// 	// function code
// 	console.log('recursivity');
// 	// base case
// 	if (i < 5) {
// 		i++;
// 		recurse();
// 	} else {
// 	}
// }

// recurse();

// const countToTen = (num = 1) => {
// 	while (num <= 10) {
// 		console.log(num);
// 		num++;
// 	}
// };

// countToTen(10);

// const recurToTen = (num = 1) => {
// 	if (num > 10) return; // 2. At least one condition to eixt
// 	console.log(num);
// 	num++;
// 	recurToTen(num); // 1. The recursive call to the function
// };

// recurToTen();

// const countToEleven = (num = 1) => {
// 	while (num <= 11) {
// 		console.log(num);
// 		num++;
// 	}
// };

// countToEleven();

// const recurToTwelve = (num = 1) => {
// 	if (num <= 12) {
// 		// condition to exit
// 		console.log(num);
// 		num++;
// 		recurToTwelve(num); // 1. the recursive call to the function
// 	}
// };

// recurToTwelve();

// const recurToThirteen = (num = 1) => {
// 	if (num <= 13) {
// 		// at least one condition to exit
// 		console.log(num);
// 		num++;
// 		recurToThirteen(num); // the recursive call to the function
// 	}
// };

// recurToThirteen();

// const recurToTwenties = (num = 1) => {
// 	if (num <= 20) {
// 		console.log(num);
// 		num++;
// 		recurToTwenties(num);
// 	}
// };

// recurToTwenties();

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// const recurToTheLastPos = (pos = 0) => {
// 	if (pos <= arr.length) {
// 		// stopping condition
// 		pos++;
// 		recurToTheLastPos(pos); // the function calling itself
// 	}
// 	console.log(arr[pos]);
// };

// recurToTheLastPos();

// const recurToEities = (num = 0) => {
// 	if (num <= 80) {
// 		// stopping condition
// 		num++;
// 		recurToEities(num); // the function calling itself
// 	}
// 	console.log(num); // printin the result
// };

// recurToEities();
//                        num variable holds the inital value our number gets
// const recurFromTwenty = (num = 20) => {
// 	console.log(num); // it prints the given number
// 	if (num > 1) {
// 		// - STOPPING CONDITION
// 		// evaluates the given number to check if it is greater than 1 if it is true decrement it
// 		num--; // decrementation
// 		recurFromTwenty(num); // the same process starts again - RECURSIVE CALL TO THE FUNCTION
// 	}
// };
// recurFromTwenty();

//                     the num variable holds the initial given value, 0
// const recurToTwenty = (num = 0) => {
// 	console.log(num); // prints the given value
// 	if (num < 20) {
// 		// checks whether the condition is met or not (0 less than 20) - STOPPING CONDITION
// 		num++; // increments the given number if it passes the condition
// 		recurToTwenty(num); // the function calls itself again - RECURSIVE CALL TO THE FUNCTION
// 	}
// };

// recurToTwenty();

// "With Great Power Comes Great Responsibility"
// Reasons to use (not abuse) Recursion
// 1) Less Code
// 2) Elegant Code (aka Pleasing to Look at)
// 3) Increased Readability

// Reasons to NOT use Recursion
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?

// The Standarad Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13 ,21

// We pass to the function two parameters, the num which is the number of elements we want returned
// And then we start with an array that has the first two numbers of the sequence so by default 0,1
//

// const fibonacci = (num, array = [0, 1]) => {
// 	while (num > 2) {
// 		// while the number of elements we want returned is greater than 2
// 		const [nextToLast, last] = array.slice(-2); // we want to slice the last two of the array
// 		array.push(nextToLast + last); // we add them together and push them into the array for the next number
// 		num -= 1; // then we subtract
// 	}
// 	return array;
// };

// console.log(fibonacci(12));

// recursive function 20

// const recurTwenty = (num = 1) => {
// 	console.log(num);
// 	if (num < 20) {
// 		num++;
// 		recurTwenty(num);
// 	}
// };

// // recurTwenty();

// const recurTwentyBack = (num = 0) => {
// 	console.log(num);
// 	if (num < 20) {
// 		num++;
// 		recurTwentyBack(num);
// 	}
// 	// console.log(num);
// };

// recurTwentyBack();

// const fibonacciSequence = (num, array = [0, 1]) => {
// 	if (num < 2) {
// 		let a = array[0] + array[1];
// 		console.log(a);
// 		fibonacciSequence(num);
// 	}
// };

// fibonacciSequence(13);

// // 0 + 1 => 1
// // 1 + 1 => 2
// // 1 + 2 => 3
// // 2 + 3 => 5
// // 3 + 5 => 8
// // 8 + 5 => 13

// const recurToTwenty = (num = 1) => {
// 	console.log(num);
// 	if (num < 20) {
// 		num++;
// 		recurToTwenty(num);
// 	}
// };

// recurToTwenty();

// 0 + 1
// 1 + 1
// 2 + 3
// 5 + 8
// 8 + 13
// 8 + 21

// const fibonacci = (num, array = [0, 1]) => {
// 	while (num > 2) {
// 		const [nextToLast, last] = array.slice(-2);
// 		array.push(nextToLast + last);
// 		num -= 1;
// 	}
// 	return array;
// };

// console.log(fibonacci(12));

// const fibonacci1 = (num, array = [0, 1]) => {
// 	while (num > 2) {
// 		const [nextTolast, last] = array.slice(-2);
// 		array.push(nextTolast + last);
// 		num -= 1;
// 	}
// 	return array;
// };

// console.log(fibonacci1(11));

// const fibonacci2 = (num, array = [0, 1]) => {
// 	while (num > 2) {
// 		const [nextToLast, last] = array.slice(-2);
// 		array.push(nextToLast + last);
// 		num--;
// 	}
// 	return array;
// };

// console.log(fibonacci2(11));

// const convertArr = [0, 1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3];

// const convertedSet = new Set(convertArr);

// console.log(convertedSet);

//ES6 Data Strucutre: Map

// let map = new Map();

// map.set('Mango', 'Ame');

// map.set('Banana', 'Kola');

// map.set('Score', 100);

// let map1 = new Map();

// map1.set(1, 'Portocala');

// map1.set(2, 'Pormoneu');

// map1.forEach((el, key) => {
// 	console.log(key, el);
// });

// for (el of map) {
// 	console.log(el);
// }

// console.log(map1.has('Mango'));

// const set0 = new Set();

// set0.add(1);

// console.log(set0);

// Module

// console.log(addNumber(10, 30));

// import addNumber from './main.js';
// import multiplyNumber from './utils.js';

// console.log(multiplyNumber(10, 30));

//swap 2 numbers rq

// let number1 = 10;
// let number2 = 12;

// let maxValue;

// if (number1 > number2) {
// 	maxValue = number1;
// } else {
// 	maxValue = number2;
// }

// console.log(maxValue);

// let max = number1 > number2 ? number1 : number2;

// const person = {
// 	name: 'Jane',
// 	admin: false,
// };

// const membershipType = (person) => {
// 	if (person.admin) {
// 		return 'admin';
// 	}
// 	// if they're not an admin we return regular member
// 	return 'regular member';
// };

// const membershipType = (person) => {
// 	return person.admin ? 'admin' : 'regular user';
// };

// console.log(membershipType(person));

// const person = {
// 	name: 'John',
// 	admin: true,
// };

// const isAdmin = (person) => (person.admin ? 'isAdmin' : 'regularPerson');

// console.log(isAdmin(person));

// const person1 = {
// 	name: 'Jane Doe',
// 	admin: false,
// };

// const isAdmin1 = (person1) => (person1.admin ? 'isAdmin' : 'regularPerson');

// console.log(isAdmin1(person1));

// let number = 3;

// const fizzBuzz = (number) => {
// 	if (number % 3 === 0 && number % 5 === 0) {
// 		console.log(`FizzBuzz`);
// 	} else if (number % 3 === 0) {
// 		console.log(`Fizz`);
// 	} else if (number % 5 === 0) {
// 		console.log(`Buzz`);
// 	} else {
// 		console.log(number);
// 	}
// };

// fizzBuzz(number);

// JavaScript Closures

// Lexical Scope defines how variable names are resovled in nested functions.

// Nested (child) functions have access to the scope of their parent functions

// This is often confused with closure, but lexical scope is only an important part of closure.

// w3schools : "A closure is a function having access to the parent scope, even after the parent functions has closed."

// A closure is created when we define a function, not when a function is executed.

// global scope

// let x = 1;

// const parentFunction = () => {
// 	// local scope
// 	let myValue = 2;
// 	console.log(x);
// 	console.log(myValue);

// 	const childFunction = () => {
// 		console.log((x += 5));
// 		console.log((myValue += 1));
// 	};

// 	return childFunction;
// };

// const result = parentFunction();
// console.log(result);

// result();
// result();
// result();
// console.log(x);
// console.log(myValue);

// // IIFE (Immediately Invoked Function Expression)

// const privateCounter = (() => {
// 	let count = 0;
// 	console.log(`initial value: ${count}`);
// 	return () => {
// 		count += 1;
// 		console.log(count);
// 	};
// })();

// privateCounter();
// privateCounter();
// privateCounter();

// Write a function that prints the numbers from 1 to 100. For multiples of three print “Fizz” instead of the number and for multiples of five print “Buzz” instead of the number. For numbers which are multiples of both three and five print “FizzBuzz”.

// const arr = [];

// const fizzBuzz = function () {
// 	for (let i = 0; i <= 100; i++) {
// 		arr.push(i);
// 	}
// 	for (let el in arr) {
// 		console.log(el);
// 	}
// };

// fizzBuzz();
// console.log(arr);

// const names = ['John', 'Jason', 'Delia'];

// names.forEach((name) => {
// 	console.log(name);
// });

// const obj = {
// 	name: 'Jane',
// 	isMarried: false,
// };

// console.log(addNumber(10, 30));

// pad start, pad End

// let sentence = 'The dog chased the cat.';
// let regex = /the/;

// let myString = 'Hello, World!';
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
// let waldoRegex = /Waldo/; // this is case sensitive
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

// let earCerum = 'I had a cerum of wax in my Ear';
// let earCerumRegex = /Cerum/;
// let result = earCerumRegex.test(earCerum);
// console.log(result);

// let petString = 'James has a pet cat';
// let petRegex = /dog|cat|bird|fish/; // this is going to match any of these 4 words
// let result = petRegex.test(petString);
// console.log(result);

// let myString = 'freeCodeCamp';
// let fccRegex = /freecodecamp/i; // I is the flag which means ignore case (case for case sensitivity)
// let result = fccRegex.test(myString);
// console.log(result);

// let extractStr = "Extract the word 'coding' from this string";
// let codingRegex = /coding/; // extract the word coding
// let result = extractStr.match(codingRegex);

// let newSentence = `I've got a new ${result} exercise`;

// console.log(newSentence);
// console.log(result);

// The match method is used with Regex

// let testStr = 'Repeat, Repeat, Repeat';
// let ourRegex = /Repeat/g; // g is for global search, it will match all occurences
// let g = testStr.match(ourRegex);
// // console.log(g);

// let twinkleStar = 'Twinkle, twinkle, little star';
// let starRegex = /twinkle/gi; // here it will look globally for the word twinkle no matter the casing because we used the i flag meaning it'll not be case sensitive
// let result = twinkleStar.match(starRegex);

// console.log(result);

// let alaBala = 'Alabala, alabala, portocala';
// let alaBalaRegex = /alabala/gi;
// let gi = alaBala.match(alaBalaRegex);
// console.log(gi);

// let cristianLeontin =
// 	'Cristian Leontin, cristian leontin are curul cel mai fin';

// let cristiRegex = /cristian leontin/gi;

// let ourVar = cristianLeontin.match(cristiRegex);

// console.log(ourVar);

// let rude = 'Fiica lu varu Alex este Raisa raisa';
// let rudeRegex = /raisa/gi;
// let afisare = rude.match(rudeRegex);
// console.log(afisare);

// let humStr = "I'll hum a song";
// let hugStr = 'Bear hug';
// let huRegex = /hu./; // this will match any word that starts with the letters hu
// humStr.match(huRegex); // Returns ["hum"]
// hugStr.match(huRegex); // Returns ["hug"]

// let exampleStr = "Let's have fun with regular expressions";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);

// console.log(result);

// let sentence = 'Am un cuvant care rimeaza cu pamant';
// let sentenceRegex = /.ant/;
// let cuvant = sentenceRegex.test(sentence);
// console.log(cuvant);

// let sentence = 'Porcul avea un rat, era un porc urat, putin posomorat';
// let regex = /.rat/g;
// let rat = sentence.match(regex);
// console.log(rat);

// // vreau sa afisez un array cu toate cuvintele care se termina in rat

// let sentence = "Let's have fun babe";
// let regex = /.un/;
// console.log(regex.test(sentence));

// let bgRegex = /b[aiu]g/; // match from a predefined group of characters inside the brackets we're saying the second letter that matches has to be one of these 3
// // the first letter gon be b the 2nd will be a, i or u and the last one has to be g

// let quoteSample =
// 	'Beware of bugs in the above code; I have only proved it correctly';

// let vowelRegex = /[aeiou]/gi; // that's the regex
// let result = quoteSample.match(vowelRegex); // is getting all the vowels from the quoteSample we have

// console.log(result); // logging the vowels from the quote sample we have

// let sentence = 'A e i o u a a, iesi afara tu';
// let regex = /[aeiou]/gi;

// let vowels = sentence.match(regex);

// console.log(vowels);

// let sentence = 'Nico nu stia sa zice rau, ratusca, ramurica';

// let regex = /ra./g;

// let rarait = sentence.match(regex);

// console.log(rarait);

// let quoteSample = 'The quick brown fox jumps over the lazy dog.';
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex); // prints all the letters from the given string [a-z] as we speicifed

// console.log(result);

// let quoteSample = 'Blueberry 3.141592653s are delicious.';
// let myRegex = /[2-6h-s]/gi; // matches the numbers 2-6 and letters from h to s
// let result = quoteSample.match(myRegex);

// console.log(result);

// Negated character sets

// let quoteSample = '3 blind mice.';
// let myRegex = /[^0-9aeiou]/gi; // a regex that will match anything excepting the specified numbers or letters
// let result = quoteSample.match(myRegex);

// console.log(result);

// let quoteSample = '3 system errors, 5 system errors';
// let myRegex = /[^0-9y]/gi;
// let result = quoteSample.match(myRegex);

// console.log(result);

// Match characters that occur one or more times

// let difficultSpelling = 'Mississipsi';
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);
// console.log(result);

// Match caracters that occur zero or more times
// let soccerWord = 'goooooooal!';
// let gPhrase = 'gut feeling';
// let oPhrase = 'over the moon';
// let goRegex = /go*/; // match g and then match an o 0 or more times
// soccerWord.match(goRegex); // Returns ["goooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

// let chewieQuote = 'Aaaaaaaaaaaaaaaaaarrrgh';
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);

// console.log(result);

// let cuvant = 'Doooaaaare';
// let myRegex = /Do*/;
// let test = cuvant.match(myRegex);
// console.log(test);

// let string = ' re mi fa sol';
// console.log(test + string);

// Greedy and Lazy Matches

// A greedy match finds the longest possible part of the string that fits the regex pattern and returns that as a match.

// A lazy match finds the smallets possbile part of the string and returns that, regex patterns default to greedy.

// let string = 'titanic';
// let regex = /t[a-z]*i/; // First we're looking for the letter t and after the letter t we want 0 or more of any letter the asterisk star means 0 or more occurences of a to z and then we're finally looking for the letter i at the end
// string.match(regex);

// let string = 'titanic';
// let regex = /t[a-z]*?i/; // First we're looking for the letter t and after the letter t we want 0 or more of any letter the asterisk star means 0 or more occurences of a to z and then we're finally looking for the letter i at the end, however if we put a (questionmark)? sign after the asterisk is going to be a lazy match
// string.match(regex);

// // A GREEDY MATCH FOR THE WORD TITANIC WOULD BE TITANI, AND A LAZY MATCH WOULD BE TI
// Note this is a greedy match
// let text = '<h1>Winter is coming</h1>';
// let myRegex = /<.*>/; // if we run this it is going to return the whole thing, we're starting with the more than sign (<) and then we have the dot (.) which is a wild card character so this means any letter or character and then the asterisk means 0 or more occurances and then we end with the greater then sign (>)

// // Note this a lazy match
// let result = text.match(myRegex);

// console.log(result);

// let text1 = '<h1>Christmas is coming</h1>';
// let regex1 = /<.*?>/;
// let result1 = text1.match(regex1);

// console.log(result1);

// // Lazy Match

// let h1 = '<h1>Cant waint for christmas</h1>';
// let regex = /<.*?>/;
// let result = h1.match(regex);
// console.log(result);

// // Greedy Match

// let h2 = '<h2>December is the next month</h2>';
// let regex2 = /<.*>/;
// let result2 = h2.match(regex2);
// console.log(result2);

// // Find one or more criminals in a hunt
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
// let reCriminals = /C+/g; // We're putting a C and a + so it is going to match one or more Cs;
// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

// Match beginning string patterns
// We can match patterns that are only at the beginning of the string

// let rickyAndCal = 'Cal and Ricky both like racing.';
// let calRegex = /^Cal/; // We can use the ^ character to only match at the beginning of a string, here we're matching the word Cal if its at the beginning of the string
// let result = calRegex.test(rickyAndCal);
// console.log(result);

// let sentence = 'Baetsii rai ii plac lui Betsy';
// let regex = /^baetsii/i;
// let result = regex.test(sentence); // we're testing if the sentence is strating with the word Baetsii, however if we move the word baetstii in the middle of the string it will return false because the condition will not be satisfied since the sentence is not starting with the specified word
// console.log(result);

// Match Ending String Patterns
// A ^ matches a beginning string pattern, a $ matches an ending string pattern
// let caboose = 'The last car on a train is the caboose';
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// console.log(result);

// Match All letters and numbers

// \w - to match the alphabet (matches capital A-Z lower case a-z, the digits 0-9 and _ )

// let quoteSample = 'The five boxing wizards jump quickly';
// let alphabetRegexV2 = /[\w]/g; // Gets the length of the quoteSample string excluding the spaces and the period
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result); // 31 letters in the string

// let quote = 'Divide et impera.';
// let regex = /\w/g;
// let result1 = quote.match(regex).length;
// console.log(result1);

// let herGo = 'Let her go, God bless her';
// let regex = /\w/g;
// let result1 = herGo.match(regex).length;
// console.log(result1);

// let quoteSample = 'The five boxing wizards jump quickly.';
// let nonAlphabetRegex = /\W/g; // To get all the Non-Alphabet characetrs (spaces, dots, dashes etc.)
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);

// Match all numbers

// let numString = 'Your sandwich will be $5.00';
// let numRegex = /\d/g; // Matches the digits (the 5, the 0 and 0)
// let result = numString.match(numRegex).length;
// console.log(result);

// Match all non-numbers

// let numString = 'Your sandwich will be $5.00';
// let numRegex = /\D/g; // Matches the non-numbers
// let result = numString.match(numRegex).length;
// console.log(result);

// Restrict Possible Usernames
// A regex that can be used as a username validator

// https://www.youtube.com/watch?v=ZfQFUJhPqMM&ab_channel=freeCodeCamp.org 24:40

// 1) If there are numbers, they must be at the end. // if the numbers are going to be at the end, the letters should be at beginning
// 2) Letters can be lowercase and uppercase
// 3) At least two characters long. Two-letter names can't have numbers.

// let username = 'JackOfAllTrades';
// let userCheck = /^[A-Za-z]{2,}\d*$/; // the curly braces indicate the number of times the previous thing can match so they can match between 2(the first number minimum number of matches) to infinity (no number)
// // \d in regex represents all numbers
// // * means there should be 0 or more numbers
// // let userCheck = /^[A-Za-z]/; // at the beginning is going to be A-Z uppercase and a-z lowercase
// let result = userCheck.test(username);
// console.log(result);

// let username1 = 'Futozaur2003';
// let userCheck1 = /^[a-zA-Z]{2,}\d*$/; // if the numbers are going to be at the end, the letters should be at beginning
// let result1 = userCheck1.test(username1);
// console.log(result1);

// 1) If there are numbers, they must be at the end. // if the numbers are going to be at the end, the letters should be at beginning
// 2) Letters can be lowercase and uppercase
// 3) At least two characters long. Two-letter names can't have numbers.

// let username = "JackO'Lantern";
// let regex = /^[a-zA-Z]{2,}\d*$/;
// let result = regex.test(username);
// console.log(result);

// 1) If there are numbers, they must be at the end. // if the numbers are going to be at the end, the letters should be at beginning
// 2) Letters can be lowercase and uppercase
// 3) At least two characters long. Two-letter names can't have numbers.

// let complaintId = 'KarenTheShopper1';
// let regex = /^[a-zA-z]{2,}\d*$/;
// let result = regex.test(complaintId);
// console.log(result);

// Restrict Possible Usernames

// 1) If there are numbers, they must be at the end. // if the numbers are going to be at the end, the letters should be at beginning
// 2) Letters can be lowercase and uppercase
// 3) At least two characters long. Two-letter names can't have numbers.

// let possibleUsernames = 'Iwillnothack2324';
// let regex = /^[a-zA-Z]{2,}\d*$/;
// let result = regex.test(possibleUsernames);
// console.log(result);

// Match Whitespace

// let sample = 'Whitespace is important in separating words';
// let countWhiteSpace = /\s/g; // \s is going to match a space a carriage return, a tab, a form feed, and a new line character
// let result = sample.match(countWhiteSpace);
// console.log(result);

// Match Non-Whitespace Characters

// let sample = 'Whitespace is important in separating words';
// let countWhiteSpace = /\S/g;
// let result = sample.match(countWhiteSpace);
// console.log(result);

// Specify Upper and Lower Number of Matches
// let ohStr = 'Ohhh no';
// let ohRegex = /Oh{3,6} no/; // Change this line
// // let ohRegex = /change/{2,5}; // The numbers between curly braces are quantity specificers starts at 2 ends at 5 in this line if we don't put a number it will end at infinity so basically never
// let result = ohRegex.test(ohStr);
// console.log(result);

// // Specify Only the Number of Matches
// let haStr = 'Hazzzzah';
// let haRegex = /z{4,}/;
// let result = haRegex.test(haStr);
// console.log(result);

// Specify Exact Number of Matches

// let timStr = 'Timmmmber';
// let timRegex = /Tim{4}ber/;
// let result = timRegex.test(timStr);
// console.log(result);

// // Check for All or None
// let favWord = 'favorite';
// let favRegex = /favou?rite/; // it may have an u or may not have an u
// let result = favRegex.test(favWord);
// console.log(result);

// // Positive and Negative Lookahead
// Lookaheads are patterns that will tell javascript to look ahead in your string to check for patterns further along, this can be useful when we want to check for multiple patterns in our string there are positive lookaheads and negative lookaheads
// let quit = 'qu';
// let noquit = 'qt';
// let quRegex = /q(?=u)/; // it's first going to check for the q and is going to lookahead to make sure there is a u later in the string and if there is a u later in the string will return just the q
// // positive lookahead lookaheads always start with a question mark and then it's gona be equals for a positive lookahead
// let qRegex = /q(?!=u)/; // a negative lookahead is going to make sure that something is not later in the string so here is going to search for a q and make sure there's not a u latter in the string and thre's no u in there string is gooing to return the q
// // negative lookahead lookaheads always start with a question mark and then it's gona be equals and an exclamation mark for a negative lookahead
// quit.match(quRegex); // Returns ["q"] // because it finds the u later in the stream but it doesn't return the u
// noquit.match(qRegex); // Returns ["q"]

// // In the following example,we're going to use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have 2 consecutive digits

// let sampleWord = 'astronaut';
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // for a greater than 5 characters we'll do /(?=)/ if it's a positive lookahead and we want greater than 5 characters so /(?=\w)/ will be all numbers and letters characters and we want at least 5 characters /(?=\w{5}) and we're going to make another lookahead (?=\D*/) and we're going to say there can be any number of characters that are not digits \D* asterisk means 0 or more characters that are not digits also we want to make sure that there are two or more digits (?=\D*\d{2}) \d to say there are going to be digits so and it's going to be two or more digits
// let result = pwRegex.test(sampleWord);

// let quit = 'qu';
// let noquit = 'qt';
// let quRegex = /q(?=u)/; // positive lookahead
// let qRegex = /q(?!u)/; // negative lookahead
// quit.match(quRegex); // Returns ["q"]
// noquit.match(quRegex); // Returns ["q"]

// // in the pwRegex match passwords that are greater than 5 characters long and have 2 consecutive digits

// let sampleWord = 'astronaut';
// let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
// let result = pwRegex.test(sampleWord);
// console.log(result);

// let quit = 'qu';
// let noquit = 'qt';
// let quRegex = /q(?=u)/; // positive lookahead
// let qRegex = /q(?!u)/; // negative lookahead
// console.log(quit.match(quRegex)); // Returns ["q"]
// console.log(noquit.match(qRegex)); // Returns ["q"]

// let word = 'longerthanfive12';
// let regex = /(?=\w{5})(?=\D*\d{2})/;
// let result = regex.test(word);
// console.log(result);

// https://www.youtube.com/watch?v=ZfQFUJhPqMM&ab_channel=freeCodeCamp.org
// 35:04

// Reuse Patterns Using Capture Groups
//You can group things u are searching for in a regex with paranthesis

/*
Example
A global search for word characters:

let text = "Give 100%!";
let pattern = /\w/g;
*/
// (\w+) searching for any numbers of characters
// let repeatStr = 'regex regex';
// let repeatRegex = /(\w+)\s\1/; // we're searching for any number of characters after that there is going to be a space, we can also use these paranthersis to repeat substrings, so this is called a capture group and we can repeat this group any numbers of times the \1 means to repeat what is in the first group (in the paranthesis) if we have a 2nd group with paranthersis we can repeat that with \2
// // in the case above we're searching for any group of any number of letters followed by a space, followed by any number of letters that are the same letters as before, because we're doing \1
// // if we test this regex against this string is going to return true because it has any number of letters it has a space and then it repeats any number of letters the same letters from before
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"] // the first element in the array is the full match, the 2nd element in the array is whatever is in the capture group

// let repeatNum = '42 42 42';
// let reRegex = /^(\d+)\s\1\s\1$/; // we need to put ^ at the beginning because it means we want (\d+)\s\1\s\1 at the beginning of the string and a $ at the end meaning we want (\d+)\s\1\s\1 at the end of the string
// let result = reRegex.test(repeatNum);
// console.log(result);

// let wrongText = 'The sky is silver.';
// let silverRegex = /silver/;
// console.log(wrongText.replace(silverRegex, 'blue'));
// // Returns "The sky is blue."

// 'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1'); // $2 means the second group, the 2nd paranthesis in the regex, and $1 means the first group, meaning the first paranthesis
// // Returns "Camp Code"

// let huhText = 'This sandwich is good.';
// let fixRegex = /good/; // Change this line
// let replaceText = 'okey-dokey'; // Change this line
// let result = huhText.replace(fixRegex, replaceText);
// console.log(result);                                // returns the Sandwich is okey-dokey

// let hello = '     Hello, World!     ';
// let wsRegex = /^\s+|$/g; // Change this line
// let replaceText = '';
// let result = hello.replace(wsRegex, replaceText); // Change this line
// console.log(result);

// \f matches form-feed.
// \r matches carriage return.
// \n matches linefeed.
// \t matches horizontal tab.
// \v matches vertical tab.
// \0 matches NUL character.
// [\b] matches backspace.
// \s matches whitespace (short for [\f\n\r\t\v\u00A0\u2028\u2029] ).
// \S matches anything but a whitespace (short for [^\f\n\r\t\v\u00A0\u2028\u2029] ).
// \w matches any alphanumerical character (word characters) including underscore (short for [a-zA-Z0-9_] ).
// \W matches any non-word characters (short for [^a-zA-Z0-9_] ).
// \d matches any digit (short for [0-9] ).
// \D matches any non-digit (short for [^0-9] ).
// \b matches a word boundary (the position between a word and a space).
// \B matches a non-word boundary (short for [^\b] ).
// \cX matches a control character. E.g: \cm matches control-M .
// \xhh matches the character with two characters of hexadecimal code hh .
// \uhhhh matches the Unicode character with four characters of hexadecimal code hhhh .

// Module

// import addNumber from './main.js';

// // pad start, pad End // Trim Start, Trim End

// let minute = '4';
// let hour = '8';

// console.log(minute.padStart(4, '0'));
// // 4 is the total length and 0 is the padding to the left we're adding
// console.log(hour.padEnd(5, '0'));
// // 3 is the total length and 0 is the padding to the right we're adding
// console.log(minute.padStart(4)); // adds spaces to the left

// let trimName = '  Ariyan    ';
// console.log(trimName.length);

// trimName = trimName.trim();
// trimName = trimName.trimStart();
// trimName = trimName.trimEnd();

// console.log(trimName.length);
// console.log(trimName);

// let country = 'India';
// console.log(country.toUpperCase());

// let javaIsFun = true;
// console.log(javaIsFun.toUpperCase()); // if we get an error here the next line of code will not execute
// console.log('hi ariyan');

// let pi = 3.141592654;

// console.log(pi.toFixed(2)); // prints the number in 2 range
// console.log(pi.toFixed(3)); // prints the number in 3 range of decimals
// console.log(pi.toFixed(100)); // prints the number in 100 range of decimals adds padding of 0's to the right
// console.log(pi.toFixed(101)); // prints range error

// Throwing custom errors

// function div(a, b) {
// 	if (b === 0) {
// 		throw "Second Parameter can't be zero";
// 	}
// 	return a / b;
// }

// console.log(div(4, 0));

// function div(a, b) {
// 	if (b === 0) {
// 		throw new Error("The second parameter can't be zero");
// 	}
// 	return a / b;
// }

// console.log(div(4, 0));

// function div(a, b) {
// 	if (b === 0) {
// 		throw new SyntaxError("The second parameter can't be 0");
// 	}
// 	return a / b;
// }

// // if we try any error it will show in catch in the parameter we're passing and then finally

// try {
// 	console.log(div(4, 0));
// } catch (e) {
// 	console.log(e); // the whole error
// 	console.log(e.name); // Syntax error
// 	console.log(e.message); // Second parameter can't be 0
// } finally {
// 	console.log('Its work');
// }
// console.log('HI Ariyan'); // if we use try catch finally for the error then we can execute the next line

// function exp(a, b) {
// 	if (a === 0) {
// 		throw new SyntaxError(
// 			"You can't raise 0 to any power because it will be 0"
// 		);
// 	}
// 	return a ** b;
// }

// // console.log(exp(0, 8));

// try {
// 	console.log(exp(0, 8));
// } catch (e) {
// 	console.log(e);
// 	console.log(e.name);
// 	console.log(e.message);
// } finally {
// 	console.log('It is 0');
// }

// Regular expressions are patterns used to match combinations in strings. In JavaScript,
// regular expressions are objects. Theste patterns are used with
// the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

// const regExp = /ariyan/gi;
// // const phrase = 'Ariyan is Indian';

// // console.log(regExp.test('Ariyan is Indian'));
// // console.log(regExp.test(phrase));

// console.log(regExp);
// console.log(regExp.source);
// console.log(regExp.exec('Hi Hello riyan')); // 1st displays which string value is matched with our pattern, then it displays the starting index of the matching string value and then displays our total string value and then

// const str = 'Hi My name is ariyan ariyan ariyan';
// console.log(str.match(regExp));
// console.log(str.search(regExp));
// console.log(str.replace(regExp, 'Kazi'));

// Factory Functions

// function user(name, age) {
// 	const userObject = {
// 		name,
// 		age,
// 		walk: function () {
// 			console.log('ariyan starting walking');
// 		},
// 	};
// 	return userObject;
// }

// const user1 = user('kazi', 40);
// const user2 = user('ariyan', 35);

// console.log(user1, user2);

// function setUser(firstName, lastName, age) {
// 	const user = {
// 		firstName,
// 		lastName,
// 		age,
// 	};
// 	return user;
// }

// const user1 = setUser('Kazi', 'Ariyan', 40);

// const user2 = setUser('Tudor', 'Gabi', 23);

// console.log(user1, user2);

// Constructor Functions

// function User(name, age) {
// 	console.log(this);
// 	this.name = name;
// 	this.age = age;
// 	this.walk = function () {
// 		console.log('Ariyan starting walking');
// 	};
// 	console.log(this);
// }

// const user1 = new User('Ariyan', 30);

// console.log(user1);

// Create Object using Factory and Constructor Function

// const homeAddress1 = setAddress('3rd street', 'New York', 123456);
// const homeAddress2 = new constructorSetAddress(
// 	'Baraganului',
// 	'Craiova',
// 	200332
// );

// // Factory Function

// function setAddress(street, city, zipCode) {
// 	return {
// 		street,
// 		city,
// 		zipCode,
// 	};
// }

// console.log(homeAddress1);

// // Constructor Function

// function constructorSetAddress(street, city, zipCode) {
// 	this.street = street;
// 	this.city = city;
// 	this.zipCode = zipCode;
// }

// console.log(homeAddress2);

// Asynchronous Programming

// Inside of JavaScript functions are first class citizens and actually a callback is just a function that you pass as a parameter to another function that function will do some work and then call that callback function back.

// Callback functions are just functions that get passed to another function as a parameter that function will do some work and then call the callback function to say "hey I've done my work now it's your time to do whatever you want with this thing".

// const logHello = () => {
// 	console.log('Hello');
// };

// setTimeout(logHello, 1000);

// console.log('1');
// setTimeout(() => {
// 	console.log('2');
// }, 0);
// console.log('3');

// const names = ['james', 'jess', 'lily', 'sevy'];
// // names.forEach((name) => console.log(name));

// const myForEach = (arr, cb) => {
// 	for (let i = 0; i <= names.length; i++) {
// 		const element = arr[i];
// 		cb(element);
// 	}
// };

// myForEach(names, (name) => {
// 	console.log(name);
// });

// const friends = ['Gabi', 'Albert', 'Dan'];

// friends.forEach((friend) => console.log(friend));

// const numbers = [1, 2, 3, 4, 5];

// const x = (num1, num2) => num1 * num2;

// console.log(numbers.map(x));

// const ages = [16, 17, 15, 14, 13, 18, 19, 20];

// const y = (age) => (age > 18 ? true : false);
// console.log(ages.filter(y));
// const loadPokemon = (id, cb) => {
// 	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			cb(data);
// 		});
// };

// loadPokemon(56, (pokemon) => {
// 	console.log(pokemon);
// });

// setTimeout(function(){},2000);

// const friends = ['Dan', 'Albert', 'Gabi'];

// const diyForEach = (names, cb) => {
// 	for (let i = 0; i <= friends.length; i++) {
// 		const element = names[i];
// 		cb(element);
// 	}
// };

// diyForEach(friends, (friend) => console.log(friend));

// fetchUser(12345, function (user) {
// 	console.log(user);
// });

// function fetchUser(userId, callback) {
// 	setTimeout(function () {
// 		console.log('Hi, my name is Async');
// 		const fetchedUser = {
// 			id: userId,
// 			name: 'Async',
// 			email: 'async@gmail.com',
// 		};
// 		callback(fetchedUser);
// 	}, 2000);
// }

// fetchUser(12345, (user) => console.log(user));

// function fetchUser(userId, cb) {
// 	setTimeout(function () {
// 		console.log('Hi my name is Gabrian');
// 		const fetchedUser = {
// 			id: userId,
// 			name: 'Gabri',
// 			age: 23,
// 		};
// 		cb(fetchedUser);
// 	}, 2000);
// }

// const user = {
// 	name: 'Kazi',
// 	age: 40,
// };

// fetchUser(12345, function (user) {
// 	console.log(user);
// 	sendMail(user.email, function (response) {
// 		console.log(response.success);
// 	});
// });

// function sendMail(userEmail, callback) {
// 	setTimeout(function () {
// 		console.log('message sending');
// 		const response = { success: true };
// 		callback(response);
// 	}, 3000);
// }

// function fetchUser(userId, cb) {
// 	setTimeout(function () {
// 		console.log('Hi my name is Async');
// 		const fetchedUser = {
// 			id: userId,
// 			name: 'Async',
// 			email: 'async@gmail.com',
// 		};
// 		cb(fetchedUser);
// 	}, 2000);
// }

// nested setTimeouts

// setTimeout(() => {
// 	console.log('1');
// 	setTimeout(() => {
// 		console.log('2');
// 		setTimeout(() => {
// 			console.log('3');
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// const jsonData = JSON.stringify(user); // object to JSON
// console.log(JSON.parse(jsonData)); // JSON to object
// console.log(jsonData);

// console.log('Before');

// function fetchUser() {
// 	setTimeout(function () {
// 		console.log('Hi my name is Async');
// 		return {
// 			name: 'Async',
// 			age: 20,
// 		};
// 	}, 2000);
// }

// const user = fetchUser();
// console.log(user);

// // setTimeout(function, timer);

// console.log('After');

// fetchUser(9, function (user) {
// 	console.log(user);
// 	sendMail(user.email, function (response) {
// 		console.log(response.success);
// 	});
// });

// function sendMail(userEmail, cb) {
// 	setTimeout(function () {
// 		console.log('message sending');
// 		const response = { success: true };
// 		cb(response);
// 	}, 3000);
// }

// function fetchUser(userId, cb) {
// 	setTimeout(function () {
// 		console.log('Hi, this is Async');
// 		const fetchedUser = {
// 			id: userId,
// 			name: 'Asynchronous',
// 			email: 'asynchronous@async.com',
// 		};
// 		cb(fetchedUser);
// 	}, 2000);
// }

// Promise

// setTimeout(function () {
// 	console.log('Hi Async');
// }, 3000);

// const promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		reject(new Error('Hi there have some error'));
// 	}, 2000);
// });

// console.log(promise);
// promise
// 	.then(function (result) {
// 		console.log(result);
// 	})
// 	.catch(function (error) {
// 		console.log(error.message);
// 	});

// const promise1 = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		// resolve(1);
// 		reject(new Error("Hi there, here's an error"));
// 	}, 2000);
// });

// console.log(promise1);

// promise1
// 	.then(function (result) {
// 		console.log(result);
// 	})
// 	.catch(function (error) {
// 		console.log(error.message);
// 	});

// const promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		// resolve(1);
// 		reject(new Error('Hey there, have some error Kazi'));
// 	}, 2000);
// });

// console.log(promise);

// promise
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error));

// fetchUser(1, (obj) => {
// 	console.log(obj);
// 	sendMail(obj.mail, (result) => console.log(result));
// });

// function sendMail(userEmail, cb) {
// 	setTimeout(() => {
// 		console.log(`Message sending`);
// 		const result = { success: true };
// 		cb(result);
// 	}, 2000);
// }

// function fetchUser(userId, cb) {
// 	setTimeout(() => {
// 		console.log('Hello, Async!');
// 		const obj = {
// 			id: userId,
// 			name: 'Asynchronous Functions',
// 			email: 'async@asynchronous.org',
// 		};
// 		cb(obj);
// 	}, 3000);
// }

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(1);
// 		// reject(new Error('This is an error'));
// 	}, 2000);
// });

// console.log(promise);

// promise
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error.message));

// Multiple Promises

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve(1), 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => reject(new Error('There have some issues')), 2000);
// });

// Promise.all([promise1, promise2])
// 	.then((res) => console.log(res))
// 	.catch((error) => console.log(error));

/*

Difference between for...of and for...in
The main difference between them is in what they iterate over. The for...in statement iterates over the enumerable string properties of an object, while the for...of statement iterates over values that the iterable object defines to be iterated over.

*/

// const person = {
// 	name: 'Mike',
// 	age: 25,
// 	isCoding: true,
// };

// const person1 = {
// 	name: 'Gabe',
// 	age: 23,
// 	isCoding: true,
// };

// // for (const i of Object.values(person)) {
// // 	console.log(i);
// // }

// for (const i in person) {
// 	console.log(i);
// }

// fetchUser(12, function (user) {
// 	console.log(user);
// 	sendMail(user.mail, function (response) {
// 		console.log(response);
// 	});
// });

// function sendMail(userEmail, cb) {
// 	setTimeout(() => {
// 		const response = { success: true };
// 		console.log('Message is sending');
// 		cb(response);
// 	}, 3000);
// }

// function fetchUser(userId, cb) {
// 	setTimeout(() => {
// 		console.log('Hi, this is Async');
// 		const user = {
// 			id: userId,
// 			name: 'Async',
// 			age: 2,
// 			mail: 'async@asynchronous.com',
// 		};
// 		cb(user);
// 	}, 2000);
// }

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve(1);
// 		reject(new Error('There has been some error.'));
// 	}, 2000);
// });

// console.log(promise);

// promise
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error.message));

// Fetch API

/* The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it's for service workers, Cache API, and other similar things that handle or modifiy requests and responses, or any kind of use case that might require you to generate your responses programatically (that is, the use of computer program or personal prograamign instructions).

It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.

For making a request and fetching a resource, use the fetch() method. It is implemented in multiple interfaces, specifically Windows and WorkerGlobalScope. This makes it available in pretty much any context you might want to getch resources in. The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It retruns a Promise that resolves to the Response to that request - as soon as the server responds with headers - even if the server reponse is an HTTP error status. You can also optionally pass in an init options object as the second argument.

Once a Reponse is retrieved, there are a number of methods avaialble to define what the body content is and how it should be handled. You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are mroe likely to be created as results of other API actions (for example, fetchEevent.respondsWith() from service workers.)

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetcg also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.
*/

// Fetch Web API

// const gitAPI = fetch('https://api.github.com/users/andrew');

// gitAPI
// 	.then((res) => res.json())
// 	.then((profile) => console.log(profile))
// 	.catch((err) => console.log(err));

// console.log(gitAPI);

// async function getInfoFromGit() {
// 	const res = await fetch('https://api.github.com/users/andrew');

// 	const profile = await res.json();
// 	console.log(profile);
// }

// getInfoFromGit();

// async function getInfoFromGit() {
// 	const res = await fetch('https://api.github.com/users/andrew');

// 	const profile = await res.json();
// 	console.log(profile);
// }

// getInfoFromGit();

/* DOM - Document Object Model

The Document Object Model (DOM) is data representation of the objects that comprise the structure and content of a document on the web. Look at how the DOM represents an HTML document in memory and how to use APIs to create web content applications.

What is the DOM ?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that the programs can change the document structure, style, and content. The DOM represents the documents as nodes and objects; that way, programming languages can interage with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In botch cases, it is the same document but the Document Object Model (DOM) representations allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript. 

The document and window objects are the objects whose interfaces you generally use most often in DOM programming. In simple terms, the window object represents something like the browser, and the document object is the root of the document itself. Element inherits from the generic Node interface, and together these two interfaces provide many of the methods and properties you use on individual elements. These elements may also have specific interfaces for dealing with the kind of data those elements hold, as in the table object example in the previous section.

*/

// console.log(document);
// console.log(document.all);
// console.log(document.all[7]);
// console.log(document.all.length);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.charset);
// console.log(document.contentType);
// console.log(document.body.className);
// console.log(document.body.classList);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms[0].id);
// console.log(document.forms[0].className);

// let headers = document.getElementsByTagName('h1');
// headers = Array.from(headers);
// headers.forEach((header, index) => {
// 	console.log(header.className);
// 	header.style.color = '#fff';
// 	header.style.backgroundColor = '#333';
// 	header.style.padding = '15px';

// 	header.innerText = `HI : ${index}`;
// });
// console.log(headers);

// let posts = document.getElementsByClassName('post');
// console.log(posts);
// posts = Array.from(posts);
// console.log(posts);
// posts.forEach((post, index) => {
// 	console.log(post.className);
// 	post.style.backgroundColor = '#555';
// 	post.style.padding = '30px';
// 	post.innerText = `Postarea cu numarul ${index + 1}`;
// 	post.style.color = '#fff';
// });

// let posts = document.getElementsByClassName('post');
// console.log(posts);
// let postArr = Array.from(posts);
// console.log(postArr);
// postArr.forEach((post, index) => {
// 	post.style.color = '#fff';
// 	post.style.backgroundColor = '#333';
// 	post.innerText = `Post ${index}`;
// 	post.innerText = post.innerText.toUpperCase();
// });

// let header = document.getElementById('add-post-title-id');

// console.log(header);
// console.log(header.id);
// console.log(header.className);
// console.log(header.classList);

// header.style.backgroundColor = '#ddd';
// header.style.color = '#000';
// header.style.padding = '15px';

// header.textContent = 'New All Text';
// header.innerText = 'this is new';

// let header = document.querySelector('#add-post-title-id'); // with querySelector we can access three things, ids, classes and also the tag but we have to specify the selector (. or #) or no selector if it is a tag

// console.log(header);
// console.log(header.id);
// console.log(header.className);
// console.log(header.classList);

// let tbody = document.querySelector('tbody');

// console.log(tbody);
// console.log(tbody.children);
// console.log(tbody.childElementCount);
// console.log(tbody.children[1]);

// tbody.children[1].innerHTML = '<span>hi aryian</span>';
// console.log(tbody.firstElementChild);
// console.log(tbody.lastElementChild);

/*

						<tr>
							<td class="post">
								post 1
								<span class="fa fa-times float-right pr-3"></span>
							</td>
						</tr>
*/

// const tr = document.createElement('tr');
// const td = document.createElement('td');
// td.className = 'post';
// td.innerText = 'post 6';
// td.id = 'post-id';
// td.setAttribute('title', 'post-title-6');
// const span = document.createElement('span');
// span.className = 'fa fa-times float-right pr-3';
// tr.append(td);
// td.append(span);
// document.querySelector('tbody').append(tr);

/*

						<tr>
							<td class="post">
								post 1
								<span class="fa fa-times float-right pr-3"></span>
							</td>
						</tr>
*/

// const tr1 = document.createElement('tr');
// const td1 = document.createElement('td');
// const span1 = document.createElement('span');

// td1.className = 'post';
// td1.innerText = 'post 7';
// span1.className = 'fa fa-times float-right pr-3 ';

// tr1.append(td1);
// td1.append(span1);

// document.querySelector('tbody').append(tr1);

const clearBtn = document.querySelector('.clear-post');

// clearBtn.addEventListener('dblclick', function (event) {
// 	console.log('Hi Ariyan');
// });

// clearBtn.addEventListener('click', function (event) {
// 	console.log('Hi Ariyan');
// });

// clearBtn.addEventListener('mouseup', function (event) {
// 	console.log('Hi Ariyan');
// });

// clearBtn.addEventListener('mousedown', function (event) {
// 	console.log('Hi Ariyan');
// });

// clearBtn.addEventListener('mouseenter', function (event) {
// 	console.log('Hi Ariyan');
// });

// clearBtn.addEventListener('mouseleave', function (event) {
// 	console.log('Hi Ariyan');
// });

// clearBtn.addEventListener('click', function (event) {
// 	console.log(event);

// 	console.log(event.clientX);
// 	console.log(event.clientY);
// 	console.log(event.offsetX);
// 	console.log(event.offsetY);
// 	console.log(event.shiftKey); // prints true if the user clicks while holding the shift key
// 	console.log(event.altKey); // prints true if the user clicks while holding the alt key
// 	console.log(event.ctrlKey); // prints true if the user clicks while holding the ctrl key
// 	console.log(event.type); // prints the event type, in our case click type
// 	console.log(event.target);
// 	console.log(event.target.id);
// 	console.log(event.target.className);
// 	console.log(event.target.innerText);

// 	event.target.style.backgroundColor = 'black';
// });

// Local Storage

// In the local storage we're not able to directly update the value

// localStorage.setItem('name', 'Ariyan');
// localStorage.setItem('age', 50);

// const age = localStorage.getItem('age');
// console.log(age);

// // If we want to update the value we have to reassign it
// localStorage.setItem('name', 'Kazi');
// console.log(localStorage.getItem('name'));

// // localStorage.removeItem('name');
// localStorage.clear();

// const users = [
// 	{ name: 'Kazi', age: 40 },
// 	{ name: 'Ariyan', age: 30 },
// ];

// // console.log(JSON.stringify(users));
// // JSON.stringify() - transforms a JavaScript object into a JSON string.
// // JSON.parse() - takes a JSON string and transforms it into a JavaScript object.
// localStorage.setItem('users', JSON.stringify(users));
// const userFrom = localStorage.getItem('users');

// console.log(JSON.parse(userFrom));

// localStorage.setItem('name', 'Gabi');
// localStorage.setItem('age', '23');

// const users = [
// 	{ name: 'Dan', age: 23 },
// 	{ name: 'Albert', age: 22 },
// 	{ name: 'Gabi', age: 23 },
// ];

// localStorage.clear();

// localStorage.setItem('users', JSON.stringify(users));
// const getUsersFromLocalStorage = localStorage.getItem('users');
// console.log(getUsersFromLocalStorage);
// const LocalStorageUsers = JSON.parse(getUsersFromLocalStorage);
// console.log(LocalStorageUsers);
// LocalStorageUsers.forEach((user) => {
// 	// console.log(user);
// 	console.log(user);
// });

// localStorage.removeItem('name');

// Session Storage

// sessionStorage.setItem('name', 'Kazi');
// localStorage.setItem('name', 'Ariyan');

// The difference between session storage and local storage is the fact that if we do close the browser and reopen it with live server, the sessionStorage is gone, but the localStorage remains there.
