function cau3(input) {
  var result = [];
  for (var i = 0; i <= 9; i++) {
    var output = input.replace("*", i);
    if (output % 3 === 0) {
      result.push(output);
    }
  }
  return result;
}
console.log(cau3("123456789*"));
