module.exports = function (num) {
   var a = num/2;
   var b = a/0.85;
   console.log(b);
   return parseInt(b);
};
