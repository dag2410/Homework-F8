function countDown() {
  let time2026 = new Date("2026-01-01 00:00:00");
  let timestamp = time2026.getTime() - new Date().getTime();
  if (timestamp < 0) {
    clearInterval(stopInterval);
    document.write("Chúc mừng năm mới 2026");
    return;
  }

  let day = Math.floor(timestamp / (24 * 60 * 60 * 1000));
  let hours = Math.floor(
    (timestamp % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  let minutes = Math.floor((timestamp % (60 * 60 * 1000)) / (60 * 1000));
  let second = Math.floor((timestamp % (60 * 1000)) / 1000);

  let content = `còn ${day} ngày ${hours} giờ ${minutes} phút ${second} giây là đến tết 2026`;
  document.write(content);
  document.close();
}
let stopInterval = setInterval(countDown, 1000);
