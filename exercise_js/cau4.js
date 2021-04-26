function cau3(input) {
  var index = input.indexOf("*");
  console.log(index);
  var str1 = input.substring(0, index);
  var str2 = input.substring(index + 1, input.length);
  var result = [];
  for (var i = 0; i <= 9; i++) {
    var output = parseInt(str1 + i + str2);
    if (output % 6 === 0) {
      result.push(output);
    }
  }
  return result;
}
console.log(cau3("1234567890*"));
