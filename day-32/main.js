/**
 * POST - create
 * GET - Read
 * PUT - Update
 * DELETE - delete
 * = CRUD
 *
 *
 */
const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", function (e) {
  // b1: Lấy thông tin từ form
  e.preventDefault();
  const formData = new FormData(registerForm);
  const userInfo = Object.fromEntries(formData);
  console.log(userInfo);
  // b2 : validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    alert("Mật khẩu tối thiếu là 6 kí tự");
  } else {
    //b3:GỬi dữ liệu lên server
    fetch("http://localhost:3000/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          if (confirm("dang ki thanh cong,dang nhap ngay")) {
            location.href = "./login.html";
          }
        } else {
          alert(data);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
