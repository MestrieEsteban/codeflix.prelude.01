module.exports = function kebabCase(str = '') 
 {
    let finish

    if(str.match(/[-]/))
    {
       finish = str.replace(/-/g, "");
       finish = finish.replace(/([A-Z])/g, " $1");
       finish = finish.replace(/ /g, "-");
    }
    else if(str.match(/([A-Z])/g))
      {
         finish = str.replace(/([A-Z])/g, " $1");
         finish = finish.replace(/ /, "");
         finish = finish.replace(/ /g, "-");
      }
      else
      {
         finish = str.replace(/ /g, "-");
      }

    

    return finish
 }

