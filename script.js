// ==============================
// FITUR 1: DARK MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle');
const body = document.body;

darkToggleBtn.addEventListener('click', function() {
  // Toggle class dark-mode di body
  body.classList.toggle('dark-mode');

  // Cek apakah dark mode sekarang aktif
  const isDarkMode = body.classList.contains('dark-mode');

  // Update teks tombol
  if (isDarkMode) {
    darkToggleBtn.textContent = '☀️ Light Mode';
  } else {
    darkToggleBtn.textContent = '🌙 Dark Mode';
  }
});

// cek saat halaman dibuka
if (localStorage.getItem("darkMode") === "aktif") {
  document.body.classList.add("dark-mode");
}

// saat tombol diklik
darkToggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "aktif");
  } else {
    localStorage.removeItem("darkMode");
  }
});

// ==============================
// FITUR 2: COUNTER
// ==============================

let count = 0;
const angkaDisplay = document.querySelector('#angka-counter');
const pesanDisplay = document.querySelector('#counter-pesan');
const btnTambah = document.querySelector('#btn-tambah');
const btnKurang = document.querySelector('#btn-kurang');

function updatePesan(n) {
  if (n === 0) pesanDisplay.textContent = 'Yuk mulai minum air!';
  else if (n < 4) pesanDisplay.textContent = 'Kurang minum nih...';
  else if (n < 8) pesanDisplay.textContent = 'Lumayan, terus tambah! 💧';
  else pesanDisplay.textContent = 'Keren! Sudah cukup minum air hari ini! 🎉';
}

btnTambah.addEventListener('click', function() {
  count++;
  angkaDisplay.textContent = count;
  updatePesan(count);
    animasiAngka();
    if (count === 10) {
  alert("🎉 Selamat! Kamu sudah minum air 10 kali!");
}
});

btnKurang.addEventListener('click', function() {
  if (count > 0) {
    count--;
    angkaDisplay.textContent = count;
    updatePesan(count);
    animasiAngka();
  }
});

// ==============================
// FITUR 3: VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim');
const inputNama = document.querySelector('#input-nama');
const inputEmail = document.querySelector('#input-email');
const inputPesan = document.querySelector('#input-pesan');
const formFeedback = document.querySelector('#form-feedback');

function tampilkanPesan(teks, tipe) {
  formFeedback.textContent = teks;
  formFeedback.className = 'feedback ' + tipe; // set class
}

function isEmailValid(email) {
  // Regex sederhana untuk cek format email
  return email.includes('@') && email.includes('.');
}

btnKirim.addEventListener('click', function() {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const pesan = inputPesan.value.trim();

  // Validasi: field kosong
  if (nama === '' || email === '' || pesan === '') {
    tampilkanPesan('⚠️ Semua field harus diisi!', 'error');
    return; // stop eksekusi di sini
  }

  // Validasi: format email
  if (!isEmailValid(email)) {
    tampilkanPesan('⚠️ Format email tidak valid! Contoh: nama@email.com', 'error');
    return;
  }

  // Jika semua valid
  tampilkanPesan('✅ Pesan berhasil dikirim! Terima kasih, ' + nama + '!', 'success');

  // Kosongkan form setelah berhasil
  inputNama.value = '';
  inputEmail.value = '';
  inputPesan.value = '';
});

function animasiAngka() {
  angkaDisplay.classList.add("lompat");

  setTimeout(function () {
    angkaDisplay.classList.remove("lompat");
  }, 300);
}

// ambil semua progress bar
const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach((bar) => {
  let target = bar.getAttribute("data-percent"); // ambil target persen
  let count = 0;

  let interval = setInterval(() => {
    if (count >= target) {
      clearInterval(interval);
    } else {
      count++;
      bar.style.width = count + "%";
      bar.textContent = count + "%";
    }
  }, 20);
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});



