let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n - 1));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slides img");
  const dots = document.querySelectorAll(".dot");

  // Mengatur ulang indeks jika melebihi jumlah slide
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Geser slider berdasarkan indeks
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none"; // Tampilkan slide saat ini
  });

  // Perbarui dot
  dots.forEach((dot) => dot.classList.remove("active-dot"));
  dots[slideIndex].classList.add("active-dot");
}

// Slider otomatis (jika diperlukan)
setInterval(() => {
  nextSlide();
}, 5000); // 5 detik untuk setiap slide
// Pilih semua elemen dengan kelas 'item'
const items = document.querySelectorAll(".item");

// Tambahkan event listener 'click' ke setiap item
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Redirect ke halaman episode.html
    window.location.href = "Episode.html";
  });
});
