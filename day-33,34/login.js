const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function (e) {
  // b1: Lấy thông tin từ form
  e.preventDefault();
  const formData = new FormData(loginForm);
  const userInfo = Object.fromEntries(formData);

  // b2 : validation
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    alert("Mật khẩu quá ngắn");
    return;
  }
  //b3:Gửi dữ liệu lên server

  if (!userInfo.email || !userInfo.password) {
    alert("Đăng nhập không thành công");
  } else {
    fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // password...
        if (data.accessToken) {
          if (confirm("Đăng nhập thành công")) {
            location.href = "./task.html";
            window.localStorage.setItem("accessToken", data.accessToken);
            window.localStorage.setItem("email", userInfo.email);
            window.localStorage.setItem("password", userInfo.password);
          }
        } else {
          alert("Đăng nhập không thành công");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
