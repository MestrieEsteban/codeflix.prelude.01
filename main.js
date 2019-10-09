
const lowerCase         = require('./ex01')
const upperCase         = require('./ex02')
const length            = require('./ex03')
const capitalize        = require('./ex04')
const decapitalize      = require('./ex05')
const kebabCase         = require('./ex06')
const snakecase         = require('./ex07')
const swapCase          = require('./ex08')
const charAt            = require('./ex09')
const first             = require('./ex10')
const last              = require('./ex11')
const substr            = require('./ex12')
const slice             = require('./ex13')
const count             = require('./ex14')
const countSubstrings   = require('./ex15')
const countWords        = require('./ex16')
const indexOf           = require('./ex17')
const lastindexOf       = require('./ex18')
const insert            = require('./ex19')
const repeat            = require('./ex20')
const reverse           = require('./ex21')
const splice            = require('./ex22')
const trim              = require('./ex23')
const endswith          = require('./ex24')
const includes          = require('./ex25')










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

console.log('____')

console.log('First :')
console.log(first('Chopper'))
console.log(first('Chopper', 2))
console.log(first('Chopper', 5))

console.log('____')

console.log('Last :')
console.log(last('Chopper'))
console.log(last('Chopper', 2))
console.log(last('tony', 5))

console.log('____')

console.log('substr :')
console.log(substr('tony tony chopper', 10))    
console.log(substr('ch0pper', 2, 2))

console.log('____')

console.log('slice :')
console.log(slice('ch0pper', 1))    
console.log(slice('ch0pper', -4))
console.log(slice('ch0pper', 1, 4))

console.log('____')

console.log('Count :')
console.log(count('ch0pper'))

console.log('____')

console.log('Count Substrings :')
console.log(countSubstrings('Tony Tony Chopper', 'Tony'))
console.log(countSubstrings('gomu gomu no mazooka', 'gatling'))

console.log('____')

console.log('Count Words :')
console.log(countWords('Tony Tony Ch0pper'))
console.log(countWords('TonyTonyCh0pper'))
console.log(countWords('Tony Tony - Ch0pper'))

console.log('____')

console.log('Index of :')
console.log(indexOf('Ch0pper', '0'))
console.log(indexOf('Ch0pper', 'o'))

console.log('____')

console.log('Last Index of :')
console.log(lastindexOf('Ch0pper', 'p'))
console.log(lastindexOf('Ch0pper', 'o'))

console.log('____')

console.log('Insert :')
console.log(insert('Chpper', '0', 2))
console.log(insert('Tony', ' Tony Ch0pper', 4))



console.log('____')

console.log('Reapeat :')
console.log(repeat('w', 3))
console.log(repeat('gomu', 0))


console.log('____')

console.log('Reverse :')
console.log(reverse('ch0pper'))

console.log('____')

console.log('Splice :')
console.log(splice('Tony Tony Ch0pper', 0, 10))
console.log(splice('Tony Ch0pper', 0, 4, 'Tony Tony'))
console.log(splice('Tony Tony Usopp', -5, 5, 'Ch0pper'))

console.log('____')

console.log('Trim :')
console.log(trim(' Tony Tony Ch0pper '))
console.log(trim('--Tony Tony Ch0pper--', '-'))

console.log('____')

console.log('EndsWith :')
console.log(endswith('Tony Tony Ch0pper', 'Ch0pper'))
console.log(endswith('Tony Tony Ch0pper', 'Tony'))
console.log(endswith('Ch0pper', 'h0', 3))

console.log('____')

console.log('includes :')
console.log(includes('Tony Tony Ch0pper', 'Ch0pper', 9))
























