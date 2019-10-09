module.exports = function repeat(str = '') 
 {
    let chars = str.split("")
    let rev = chars.reverse()
    let finish = rev.join("")

    return finish
 }
