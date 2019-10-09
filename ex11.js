module.exports = function last(str = '', len=1) 
 {
    let n = str.length;
    let finish = str.substring(n,n-len)
    return finish
 }
