# Sự khác biệt giữa null và undefined
**null** có thể coi là một kiểu đối tượng. Một biến/thuộc tính của đối tượng chỉ có thể có giá trị bằng null khi nó được gán bằng null.
**undefined** là giá trị mặc định của tất cả các biến/thuộc tính của đối tượng. Nếu không gán giá trị cho biến thì nó sẽ có mặc định là undefined.
**undefined** không phải là kiểu đối tượng.

# Use trict
**Use trict** có nghĩa là sự nghiêm ngặt. Khi một đoạn lệnh được khai báo use trict thì tất cả các dòng code ở phía dưới dòng khai báo use trict sẽ được quản lý một cách nghiêm ngặt hơn về cú pháp.  
**Advantages:**
- Giúp việc debug dễ dàng hơn.
- Ngăn chặn sử dụng, và throw errors khi người lập trình thực hiện những xử lý được coi là unsafe, những xử lý mà có thể là ngoài ý muốn.
- Vô hiệu hoá các tính năng có thể gây nhầm lẫn, hoặc không nên được sử dụng.
- Ngăn chặn sử dụng một số từ mà có thể sẽ được sử dụng làm keywork trong tương lai.  

**Disadvantages:**
- Không thể sử dụng một biến mà không khai báo.
- Báo lỗi ở những assignments vốn không thể thực hiện.
- Báo lỗi khi delete những thứ không thể xóa.
- Các tham số của một hàm không được phép trùng nhau.
- Không sử dụng được cách viết số thuộc hệ bát phân với số tiền tố là 0.
- Không thể sử dụng with.
- Không sử dụng được biến được khai báo bên trong eval.
- Không thể sử dụng eval và arguments như là một identifier.
- Thay đổi cách thức hoạt động của this trong một số trường hợp.
- Hạn chế sử dụng các property caller, callee và arguments trong một số trường hợp.
- Không thể định nghĩa function bên trong một statement hay một block.
- Không thể sử dụng một số từ khoá được "giữ chỗ" trước cho những phiên bản ES sau này.

# Sự khác biệt giữa == và ===
## == được gọi là toán tử so sánh trừu tượng, giải quyết các kiểu dữ liệu thông qua việc chuyển đổi kiểu dữ liệu trước khi so sánh, là phép so sánh giữa 2 biến/thuộc tính nhưng không so sánh kiểu dữ liệu.  
Ví dụ: 
- console.log(1 == "1"); //true
- console.log(1 == 1); //true
- console.log(1 == true); //true
- console.log("1" == true); //true
- console.log(undefined == null); //true  
## === được gọi là toán tử so sánh cân bằng nghiêm ngặt, là phép so sánh giữa 2 biến/thuộc tính và so sánh cả kiểu dữ liệu.  
Ví dụ :
- console.log(1 === 1); //true
- console.log(1 === "1"); //false
- console.log(1 === true); //false
- console.log("1" === true); //false
- console.log(undefined === null); //false

# Values in the FALSE group
undefined, null, NaN, "", 0, -0, false, 0n, '', ``
