// scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian'

if (allNames.indexOf(newName) === -1) {
var b = allNames.push(newName);
console.log(allNames);
}
