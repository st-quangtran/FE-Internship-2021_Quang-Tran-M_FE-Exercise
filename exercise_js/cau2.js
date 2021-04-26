function cau2(a) {
  if (!isNaN(a)) {
		if (a <= 19) {
			return 19-a;
		}
		else {
			return (a-19)*3;
		}
	}
	else {
		return "a khong phai la so";
	}
}
console.log(cau2("ab"));
