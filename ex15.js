module.exports = function countSubstrings(str = '', substring = '') 
 {
    let counter = 0
    let words = str.split(' ')    
    
    words.forEach(function(word)
    {
        
        if(word == substring)
        {
            counter = counter + 1 
        }
    })

    return counter
 }
