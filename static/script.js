function cekAPI() {
  const status = document.getElementById('api-status');
  status.textContent = "Status: Menghubungkan ke server...";
  status.style.color = "#333";

  setTimeout(() => {
    const isSuccess = Math.random() > 0.2; // 80% berhasil
    if (isSuccess) {
      status.textContent = "Status: API aktif dan responsif ✅";
      status.style.color = "green";
    } else {
      status.textContent = "Status: API gagal dihubungi ❌";
      status.style.color = "red";
    }
  }, 1000);
}
