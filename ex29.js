
module.exports = function isDigit(str = '') 
{

   let result

   if(str.match(/^[0-9]*$/g)){ result = true }
   else{result = false}
   

   return result
   
}



