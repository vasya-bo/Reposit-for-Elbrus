function positiveSum(arr) {
  let  arrPositive =  arr.filter(c=> c>=0)
   if (arrPositive.length > 0) {
   return arrPositive.reduce((a,b) => a+b)
 } else { return 0}
 };

 module.exports = {positiveSum};
