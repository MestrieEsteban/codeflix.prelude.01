module.exports = function isBlank(str = '') 
 {

    let result

    if(str.match(/ /g) || str === '' ){ result = true }
    else{result = false}
    

    return result
    
 }
