// const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
const data = [];
// Hàm đăng kí
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    return "Khong du thong tin";
  }
  const user = {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
  data.push(user);
  return user;
}

const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister1 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

console.log("data = [", data, "];");

// Hàm đăng nhập
function handleLogin(email, password) {
  for (let i = 0; i < data.length; i++) {
    if (email === data[i].email && password === data[i].password) {
      return data[i];
    }
  }
  console.log("Thông tin không hợp lệ");
}
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log("dataLogin =", dataLogin);
