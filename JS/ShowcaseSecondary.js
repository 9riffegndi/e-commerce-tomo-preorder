document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  // ShowcaseMVP                   //
  // ------------------------------//
  const ShowcaseMVPJS = document.getElementById("ShowcaseMVPJS");
  const Showcase = CreateShowcaseMVP();
  ShowcaseMVPJS.appendChild(Showcase);
  // ------------------------------//
  // END ShowcaseMVP               //
  // ------------------------------//
  // Menginisialisasi slideshow produk
  initializeSlideshow();
  // END Menginisialisasi slideshow produk
});

// ------------------------------//
// Mvp Product Showcase Structure//
// ------------------------------//
function CreateShowcaseMVP() {
  const Showcase = document.createElement("div");
  Showcase.className = "MVP-product-showcase-container";
  Showcase.innerHTML = `
            <div class="showcase-wrapper">
              <div class="Mvp-product-showcase">
                <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp\ Product\ RED.png');"></div>
                  <div class="container-product-title-and-buttons"></div>
              </div>
            <div class="Mvp-product-showcase">
              <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp\ Product.png ');"></div>
                <div class="container-product-title-and-buttons"></div>
            </div>
            <div class="Mvp-product-showcase">
              <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp Product Hodie.png');"></div>
              <div class="container-product-title-and-buttons"></div>
            </div>
                <!-- Additional product showcases here -->
            </div>
            <div class="slide-nav">
                <button class="prev">&lt;</button>
                <button class="next">&gt;</button>
            </div>
            <div class="overlay-card-product">
              <div class="modal-card-prodcut">
                <div class="container-card-product">
                  <div class="header-card-title">ALL COLLECTIONS</div>
                  <div class="badge-product-status">PRE ORDER</div>
                  <div class="badge-stock-product">20 PCS</div>
                  <img src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                </div>
                <div class="container-description-card-product">
                  <div class="header-brand-name"><p>T O M O</p></div>
                  <div class="title-product-name">Love Bowl</div>
                  <div class="product-price">Rp 92.000</div>
                </div>
              </div>
            </div>
    `;
  return Showcase;
}
// ----------------------------------//
// END Mvp Product Showcase Structure//
// ----------------------------------//

// ------------------------------//
// Initialize Slideshow Function //
// ------------------------------//

function initializeSlideshow() {
  const container = document.querySelector(".MVP-product-showcase-container");
  const wrapper = container.querySelector(".showcase-wrapper");
  const slides = wrapper.querySelectorAll(".Mvp-product-showcase");
  const prevBtn = container.querySelector(".slide-nav .prev");
  const nextBtn = container.querySelector(".slide-nav .next");
  let currentIndex = 0;
  let slideInterval;

  // Menampilkan slide pada index yang diberikan
  function showSlide(index) {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  // Menampilkan slide berikutnya
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Menampilkan slide sebelumnya
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Mengatur interval slideshow otomatis
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); // Berganti slide setiap 3 detik
  }

  // Menghentikan interval slideshow otomatis
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Menambahkan event listeners untuk tombol navigasi
  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopAutoSlide(); // Hentikan otomatis saat navigasi manual
    startAutoSlide(); // Mulai kembali otomatis setelah navigasi manual
  });
  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide(); // Hentikan otomatis saat navigasi manual
    startAutoSlide(); // Mulai kembali otomatis setelah navigasi manual
  });

  // Mulai slideshow otomatis saat inisialisasi
  startAutoSlide();
}

// Pastikan untuk memanggil fungsi ini setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", initializeSlideshow);

// ------------------------------//
// END Initialize Slideshow Function//
// ------------------------------//