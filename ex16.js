module.exports = function countWords(str = '', substring = '') 
 {
    let counter = 0
    let words
    let finish
    
    if(str.match(/( - )/g))
      {
        finish = str.replace(/( - )/g, " ");
        words = finish.split(' ')  


      }
    else if(str.match(/ /g))
    {       
        finish = str.replace(/(^-|-$)/g, "");
        words = finish.split(' ')  
    }
    else
      {
        finish = str.replace(/([A-Z])/g, " $1");
        finish = finish.replace(/ /, "");
        words = finish.split(' ') 
      }


    words.forEach(function(word)
    {
        counter = counter + 1 
    })

    return counter
 }
