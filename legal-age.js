//Exercise header
let input = require('readline-sync')
console.log('======================')
console.log(' *** MAJORITY AGE *** ')
console.log('======================')

//Let's get our actual date and year
let now = new Date()
let year = now.getFullYear()
let born = Number(input.question('What year were you born? '))
console.clear()

//Find out the age you are
console.log('======================')
console.log(' *** MAJORITY AGE *** ')
console.log('======================')
let age = year - born
let finalresult = ''
finalresult = `You are ${age} years old `

//Figuring out if you are or are not at legal age
if (age >= 18){
    finalresult += 'and you are at legal age already!'
}else{
    finalresult += 'and you are not at legal age yet!'
}
console.log(finalresult)