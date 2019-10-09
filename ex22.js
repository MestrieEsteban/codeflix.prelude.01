module.exports = function splice(str = '', start, deleteCountopt = str.length - start, toAddopt='') 
 {
    let replace = str.slice(start, deleteCountopt)
    
    
    let finish = str.replace(replace, toAddopt)
    return finish
 }
