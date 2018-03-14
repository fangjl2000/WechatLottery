function factorial(m, n) {
  var num = 1;
  var count = 0;
  for (var i = m; i > 0; i--) {
    if (count == n) {//当循环次数等于指定的相乘个数时，即跳出for循环  
      break;
    }
    num = num * i;
    count++;
  }
  return num;
}
//自定义组合函数(就是数学排列组合里的C)  
function combination(m, n) 
{
  return factorial(m, n) / factorial(n, n);//就是Cmn(上面是n，下面是m) = Amn(上面是n，下面是m)/Ann(上下都是n)  
}  

module.exports.combination = combination
