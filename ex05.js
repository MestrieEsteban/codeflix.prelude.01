module.exports = function decapitalize(str = '') 
 {
    let words = str.split(' ')
    let finish = '';
    for(i in words)
    {
        let f = words[i][0].toLowerCase()
        let out = words[i].substring(1,str.length)    
        finish = finish + ' ' + f + out
    }
    return finish
 }

