var input = document.createElement("input");
var placeholder = document.createAttribute("placeholder");
placeholder.value = "nhập năm sinh";
input.setAttributeNode(placeholder);

var btn = document.createElement("button");
btn.innerHTML = "Tính tuổi";

var p = document.createElement("p");

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(p);

btn.addEventListener('click', handleClick);

function handleClick(event) {
  var day = new Date();
  var x = day.getFullYear() - input.value;
  p.innerHTML = "Tuổi của bạn là: " + x;
}
