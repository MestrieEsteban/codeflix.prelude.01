module.exports = function includes(str = '') 
 {

    let result

    if(str.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\;|\:|\ /)){result = false }
    else{result = true}
    

    return result
    
 }
