# Server side rendering (SSR)
Gọi nó là **server-side rendering** là vì phần lớn logic sẽ được xử lý ở server. *Web server* sẽ nhận request, đọc dữ liệu từ database (nếu cần), *Web server* sẽ render HTML, trả về cho browser để hiển thị cho người dùng.
- Logic từ đơn giản (validation, đọc dữ liệu) cho đến phức tạp (phân quyền, thanh toán) đều nằm ở phía server.
- Logic để routing – chuyển trang nằm ở server.
- Logic để render – hiển thị trang web cũng nằm ở server nốt.

Ưu điểm:
- Hỗ trợ rất mạnh việc SEO bởi vì các Search engines của Google có thể Crawler dữ liệu tốt hơn.
- Load trang lần đầu tiên sẽ rất nhanh.
- Sẽ rất tuyệt vời đối với các static page.

Nhược điểm: 
- Trang web phải xử lý lại hoàn toàn và load lại từ đầu nếu chỉ có một thay đổi nhỏ trong nội dung (Ví dụ tiêu đề thay đổi …) gây khó - chịu.
- Nặng server vì server phải xử lý nhiều logic và dữ liệu.
- Việc xử lý nội dung HTML khiến hao tốn tài nguyên server, gây chậm trễ khi xử lý các request khác.
- Lượng request lên server rất nhiều, do mọi tác vụ đều phải xử lý lại trên server và render lại HTML.
- TTFB (Time To First Byte) cao do cần phải xử lý trên server, sẽ ảnh hưởng tới một vài công cụ benchmark.

# Multiple Page Applications
**Multiple Page Applications** thì hoạt động theo cách truyền thống, khi người dùng yêu cầu một trang web, thì server sẽ tính toán và trả về trang web đó cho người dùng toàn bộ trang web dưới dạng mã html. Hầu như không có bất kỳ sự liên kết nào giữa 2 yêu cầu gần nhau. Do đó khi có nhiều yêu cầu được diễn ra thì sẽ làm quá trình tính toán diễn ra lâu hơn, bởi hệ thống phải tính toán nhiều thành phần trước khi trả về một trang web hoàn chỉnh.

Lần đầu tiên truy cập trang web, toàn bộ dữ liệu của trang web sẽ được hiển thị. Sau đó, bạn chọn mở một bài viết bất kỳ, và chú ý biểu tượng loading trên favicon, trang web sẽ thực hiện load lại toàn bộ nội dung theo yêu cầu của bạn, điều đó khiến cho performance của trang web khá chậm.

# Client Side Rendering (CSR)
**Client Side Rendering** tức là việc render HTML, CSS sẽ được thực hiện ở client. *Frontend* và *backend* có thể tách biệt hoàn toàn và làm việc thông qua cái gọi là API.  

**Client Side Rendering (CSR)** có những đặc điểm sau:

- Những logic đơn giản (validation, đọc dữ liệu, sorting, filtering) nằm ở client side
- Logic để routing (chuyển trang), render (hiển thị) dữ liệu thì 96.69% là nằm ở client side
- Logic phức tạp (thanh toán, phân quyền) hoặc cần xử lý nhiều (data processing, report) vẫn nằm ở server side.

# Single Page Applications (SPA)
**Single page Application** là một ứng dụng web giúp nâng cao trải nghiệm người dùng. Đầu tiên khi tải một trang web bất kỳ, **SPA** sẽ tải một trang HTML đơn, sau đó dựa trên request của người dùng, **SPA** sẽ tiếp tục tải các HTML khác trong cùng một trang đó.  

Nói đơn giản, **SPA** có một trang gốc và trong trang gốc đó, chúng ta có thể tải nhiều trang con (tương ứng với các thành phần của trang gốc) mà không gây bất kì ảnh hưởng gì tới trang gốc. **SPA** chỉ load phần trang cần thiết, khác với ứng dụng web truyền thống (tải lại toàn bộ trang) khi chúng ta tương tác với trang web (như thực hiện việc điều hướng).Trong một **SPA** chúng ta chỉ việc load các thành phần chung (của trang gốc) một lần duy nhất, các thành phần chung này (header, footer, menu…) thường xuất hiện ở nhiều trang của ứng dụng.

Ưu điểm:
- Việc render html ở server là một điều đáng quan tâm nếu trang web của bạn có nhiều người dùng, cực kì tốn tài nguyên hệ thống. Với **SPA**, điều này chỉ xảy ra lần đầu tiên khi người dùng truy cập trang chủ, còn sau đó việc render sẽ do client đảm nhiệm.
- **SPA** tách biệt phần front-end và back-end ra, **SPA** giao tiếp với server chủ yếu qua JSON Rest API giúp cho dữ liệu gửi và trả giữa client và server được giảm đến mức tối thiểu.
- **SPA** rất nhanh, vì các tài nguyên tĩnh (static resources) như HTML, CSS, Script chỉ được tải 1 lần duy nhất. Trong suốt quá trình sử dụng, chỉ có dữ liệu là được chuyển giao qua lại giữa client với server -> giảm thiểu băng thông cho server.
- Tăng trải nghiệm người dùng.

Nhược điểm: 
- Lần render đầu tiên sẽ chậm hơn so với **SSR**
- Người dùng phải cho phép Javascript hoạt động trên trình duyệt. Nếu không SPA sẽ không hoạt động.
- Trình duyệt sẽ phải xử lý rất nhiều, nên vấn đề hiệu năng trên điện thoại tầm trung trở xuống là điều bạn cần quan tâm.
- Phức tạp hơn: phải biết sử dụng các framework và công nghệ khác.
- SEO không hiệu quả.
