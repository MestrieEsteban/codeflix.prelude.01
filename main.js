
const lowerCase = require('./ex01')
const upperCase = require('./ex02')
const length = require('./ex03')
const capitalize = require('./ex04')
const decapitalize = require('./exo05')
const kebabCase = require('./ex06')
const snakecase = require('./ex07')
const swapCase = require('./ex08')
const charAt = require('./ex09')







console.log('lowerCase :')
console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))

console.log('____')

console.log('upperCase :')
console.log(upperCase('Chopper'))
console.log(upperCase('tony tony'))

console.log('____')

console.log('length :')
console.log(length('ch0pper'))

console.log('____')

console.log('capitalize :')
console.log(capitalize('one Code'))
console.log(capitalize('One CODE', true))

console.log('____')

console.log('decapitalize :')
console.log(decapitalize('Wooman'))
console.log(decapitalize('El DrAgo'))


console.log('____')

console.log('kebabCase :')
console.log(kebabCase('love on code'))
console.log(kebabCase('LoveOnCode'))
console.log(kebabCase('-Love-On-Code-'))

console.log('____')

console.log('snakecase :')
console.log(snakecase('gold d roger'))
console.log(snakecase('GoldDReger'))
console.log(snakecase('-Gold-D-Roger-'))

console.log('____')

console.log('swapCase :')
console.log(swapCase('One Code'))
console.log(swapCase('1337 Fruits'))

console.log('____')

console.log('charAt :')
console.log(charAt('Chopper', 0))
console.log(charAt('Chopper', 1))




