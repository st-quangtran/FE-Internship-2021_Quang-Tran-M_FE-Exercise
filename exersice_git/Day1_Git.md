# Git
**Git** là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System – DVCS), nó là một trong những hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay. **Git** cung cấp cho mỗi lập trình viên kho lưu trữ (repository) riêng chứa toàn bộ lịch sử thay đổi.

# Repository
**Repository** hay còn gọi là Repo, dịch ra tiếng Việt có nghĩa là kho, đây chính là nơi chứa tất cả mã nguồn cho một dự án được quản lý bởi **Git**. Bạn cũng có thể hiểu một cách khác là **Repository** chính khai báo thư mục chứa dự án của bạn trên local hoặc remote. Mỗi repo sẽ có hai cấu trúc dữ liệu chính đó là Object store và Index được lưu trữ ẩn trong thư mục *.git*
Có 2 loại Repository là **local repository** và **remote repository**:
- **Local repository** - Là repo được cài đặt trên máy tính của lập trình viên, repo này sẽ đồng bộ hóa với remote repo bằng các lệnh của *git*.
- **Remote repository** - Là repo được cài đặt trên server chuyên dụng, điển hình hiện nay là *Github*.

# Cách add 1 file vào stage
Cú pháp:

git add "*`tên file`*"

# Cách add nhiều file vào stage 
Cú pháp:

git add "*`tên file1`*" "*`tên file2`*" "*`tên file3`*" ...

# Cách add tất cả file vào stage
Cú pháp:
- git add .
- git add -all
- git add -A

# Sự khác nhau giữa lệnh `git commit -m "message"` và `git commit -am "message"`
- `git commit -am "message"` là bao gồm cả add tất cả các thay đổi và commit.
- `git commit -m "message"` chỉ commit.
