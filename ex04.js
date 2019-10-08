module.exports = function capitalize(str = '', restToLoweropt= false) 
 {
     let f = str[0].toUpperCase()
     let out = str.substring(1,str.length)
     
     if( restToLoweropt == true )
     {
        out = out.toLowerCase();
        return f+out
     }
     else
     {
        return f+out
     }
 }
