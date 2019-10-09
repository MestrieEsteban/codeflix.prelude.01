module.exports = function trim(str = '', whitespaceopt = '') 
 {
    let replace = new RegExp (whitespaceopt, "g")
    return finish = str.replace(replace, '').trim()
 }
