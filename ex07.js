module.exports = function snakecase(str = '') 
 {
    let finish

    if(str.match(/-/))
    {       
       finish = str.replace(/(^-|-$)/g, "");    
       finish = finish.replace(/-/g, "_");
    }
    else if(str.match(/([A-Z])/g))
      {
         finish = str.replace(/([A-Z])/g, " $1");
         finish = finish.replace(/ /, "");
         finish = finish.replace(/ /g, "_");
      }
      else
      {
         finish = str.replace(/ /g, "_");
      }

      finish = finish.toLowerCase()

    

    return finish
 }

