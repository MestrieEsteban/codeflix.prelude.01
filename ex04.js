module.exports = function capitalize(str = '', restToLoweropt= false) 
 {
     let f = str[0].toUpperCase()
     let out = str.substring(1,str.length)
     let finish
     
     if( restToLoweropt == true )
     {
        out = out.toLowerCase();
        finish = f+out
     }
     else
     {
        finish = f+out
     }
     return finish
 }
