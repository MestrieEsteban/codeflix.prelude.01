module.exports = function isAlpha(str = '') 
 {

    let result

    if(str.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\;|\:|\ /g)){result = false }
    else{result = true}
    

    return result
    
 }
