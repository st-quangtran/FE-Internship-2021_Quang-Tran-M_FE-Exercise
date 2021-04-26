function cau1(a, b) {
	if (!isNaN(a) && !isNaN(b)) {
		if (a === b) {
			return a * 2 * 3;
		}
		else {
			return a + b;
		}
	}else {
		return "a hoac b khong phai la so";
	}
}
var a = 5;
var b = 5;
console.log(cau1(a, b));
