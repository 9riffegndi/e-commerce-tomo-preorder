// Menunggu hingga konten HTML selesai dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", () => {
  // Mengambil elemen dengan id "IndexMvp" dari dokumen
  const IndexMvp = document.getElementById("IndexMvp");

  // Membuat dan menambahkan navbar ke elemen IndexMvp
  const navbar = createNavbar();
  IndexMvp.appendChild(navbar);

  // Membuat dan menambahkan showcase produk ke elemen IndexMvp
  const productShowcase = createProductShowcase();
  IndexMvp.appendChild(productShowcase);

  // Membuat dan menambahkan footer ke elemen IndexMvp
  const footer = createFooter();
  IndexMvp.appendChild(footer);

  // Menginisialisasi slideshow produk
  initializeSlideshow();

  // ------------------------------
  // Mini Cart Overlay
  // ------------------------------

  // Mengambil elemen yang dibutuhkan untuk mini cart
  const cartIcon = document.querySelector(".cart-icon");
  const miniCartOverlay = document.querySelector(".mini-cart-overlay");
  const closeBtn = document.querySelector(".close-btn");

  // Menambahkan event listener untuk membuka mini cart ketika ikon cart diklik
  cartIcon.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah tindakan default dari elemen (misalnya, navigasi)
    miniCartOverlay.style.display = "block"; // Menampilkan overlay mini cart
  });

  // Menambahkan event listener untuk menutup mini cart ketika tombol close diklik
  closeBtn.addEventListener("click", () => {
    miniCartOverlay.style.display = "none"; // Menyembunyikan overlay mini cart
  });

  // Menambahkan event listener untuk menutup mini cart ketika area di luar mini cart diklik
  miniCartOverlay.addEventListener("click", (event) => {
    if (event.target === miniCartOverlay) {
      miniCartOverlay.style.display = "none"; // Menyembunyikan overlay mini cart
    }
  });

  // ------------------------------
  // Address Modal
  // ------------------------------

  // Mengambil elemen yang dibutuhkan untuk address modal
  const addressLink = document.querySelector(".nav-link.address-link");
  const addressModal = document.querySelector(".addres-modal-overlay");
  const closeButton = document.querySelector(
    ".close-button-addres-modal button"
  );

  // Menambahkan event listener untuk membuka address modal ketika link address diklik
  addressLink.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah tindakan default dari elemen (misalnya, navigasi)
    addressModal.style.display = "flex"; // Menampilkan modal dengan flex display
  });

  // Menambahkan event listener untuk menutup address modal ketika tombol close diklik
  closeButton.addEventListener("click", () => {
    addressModal.style.display = "none"; // Menyembunyikan modal
  });

  // Menambahkan event listener untuk menutup address modal ketika area di luar modal diklik
  addressModal.addEventListener("click", (event) => {
    if (event.target === addressModal) {
      addressModal.style.display = "none"; // Menyembunyikan modal
    }
  });
});

// ------------------------------
// Location Popular Container
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Mengambil tombol lokasi dari dokumen
  const locationButton = document.querySelector(
    ".icon-cordinate-location-pupular"
  );

  // Menambahkan event listener untuk menghandle klik pada tombol lokasi
  locationButton.addEventListener("click", function () {
    alert("Request Location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(
            "Latitude: " +
              position.coords.latitude +
              ", Longitude: " +
              position.coords.longitude
          );
        },
        function (error) {
          console.error("Error Get location: ", error);
        }
      );
    } else {
      console.error("Geolocation Not Support");
    }
  });

  // Menambahkan event listener untuk menghandle keyboard pada tombol lokasi
  locationButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Mencegah scrolling saat tombol Space ditekan
      locationButton.click(); // Memicu klik pada tombol saat tombol Enter atau Space ditekan
    }
  });
});

// ------------------------------
// Navbar
// ------------------------------

function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.className = "navbar";

  navbar.innerHTML = `
        <ul class="nav-list">
            <li class="nav-item"><a href="#" class="nav-link">ABOUT</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">CATEGORIES</a>
                <div class="submenu-Category">
                    <a href="#" class="nav-link">Hoodie</a>
                    <a href="#" class="nav-link">T-shirt</a>
                </div>
            </li>
            <li class="nav-item logo">
                <a href="#" class="nav-link logo-link">
                    <img src="/src/assets/img/Logo/TOMO LOGOS NOBG.png" alt="logo-tomo" class="logo-img">
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link cart-icon">
                    <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="icon-cart">
                    <span class="Item-cart-count">0</span>
                </a>
                <div class="mini-cart-overlay">
                    <div class="mini-cart">
                        <div class="mini-cart-header">
                            <h1>SHOPPING BAG</h1>
                            <button class="close-btn">&times;</button>
                        </div>
                        <div class="mini-cart-content">
                            <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="icon-cart-large">
                            <p>Your cart is currently empty</p>
                            <a href="#" class="start-shopping-link">START SHOPPING</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item user-actions">
                <a href="#" class="nav-link login-register">LOGIN | REGISTER</a>
                <a href="#" class="nav-link address-link">
                    Dikirim ke - <span class="city-address">Indramayu</span>
                    <img src="/src/assets/img/Icon/location.png" alt="Address-icon" class="icon-address">
                </a>
                <div class="addres-modal-overlay">
                    <div class="addres-modal-overlay2">
                        <article class="content-addres-modal1">
                            <div class="content-addres-modal2">
                                <div class="header-addres-modal">
                                    <h4> Where to send shopping ? </h4>
                                    <p>For a good shopping experience, please login first.</p>
                                </div>
                                <div class="close-button-addres-modal">
                                    <button>&times;</button>
                                </div>
                            </div>
                            <section class="login-container">
                                <div class="login-header-p">
                                    <p>LOGIN</p>
                                    <p>Login first to select your shipping address</p>
                                </div>
                                <button class="addres-modal-login">Login</button>
                            </section>
                            <hr>
                            <p><strong>Do you want to use another way?</strong></p>
                            <div class="parent-container-search-addres">
                                <div class="container-search-addres">
                                    <div class="container-search-input-addres">
                                        <div class="container-icon-seacrh-addres">
                                            <img class="icon-search-addres" src="/src/assets/img/Icon/search.png" alt="">
                                        </div>
                                        <div class="contiener-input-search-addres-location">
                                            <input type="text" class="search-input" placeholder="Select a city or sub-district">
                                        </div>
                                        <button class="location-addres-use">
                                            <span>Use</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="container-location-popular">
                                    <div class="container-button-location-popular">
                                        <div class="icon-cordinate-location-pupular">
                                            <img class="icon-cordinate-popular-location" src="/src/assets/img/Icon/aim.png" alt="Cordinate Popular location">
                                            <p>Use current location</p>
                                        </div>
                                        <p class="popular-city-p">Popular City</p>
                                        <div class="container-popular-city-button">
                                            <button class="btn-data-popular-city-name">Jakarta</button>
                                            <button class="btn-data-popular-city-name">Bandung</button>
                                            <button class="btn-data-popular-city-name">Surabaya</button>
                                            <button class="btn-data-popular-city-name">Indramayu</button>
                                            <button class="btn-data-popular-city-name">Yogyakarta</button>
                                            <button class="btn-data-popular-city-name">Bali</button>
                                            <button class="btn-data-popular-city-name">Cirebon</button>
                                            <button class="btn-data-popular-city-name">Semarang</button>
                                            <button class="btn-data-popular-city-name">Malang</button>
                                            <button class="btn-data-popular-city-name">Tanggerang</button>
                                            <button class="btn-data-popular-city-name">Bekasi</button>
                                            <!-- Additional city buttons here -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </li>
        </ul>
    `;
  return navbar;
}

// ------------------------------
// Mvp Product Showcase
// ------------------------------

function createProductShowcase() {
  const showcase = document.createElement("div");
  showcase.className = "MVP-product-showcase-container";
  showcase.innerHTML = `
        <div class="showcase-wrapper">
            <div class="Mvp-product-showcase">
                <div class="pre-order-badge">PRE-ORDER</div>
                <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp Product RED.png');"></div>
                <div class="container-product-title-and-buttons">
                    <div class="product-title">MRERORR</div>
                    <div class="buttons">
                        <button class="shop-now"><span>SHOP NOW</span></button>
                        <button class="add-to-cart"><span>ADD TO CART</span>
                        <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
                    </div>
                </div>
            </div>
            <div class="Mvp-product-showcase">
                <div class="pre-order-badge">PRE-ORDER</div>
                <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp Product.png');"></div>
                <div class="container-product-title-and-buttons">
                    <div class="product-title">MRERORR</div>
                    <div class="buttons">
                        <button class="shop-now"><span>SHOP NOW</span></button>
                        <button class="add-to-cart"><span>ADD TO CART</span>
                        <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
                    </div>
                </div>
            </div>
            <div class="Mvp-product-showcase">
                <div class="pre-order-badge">PRE-ORDER</div>
                <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp Product Hodie.png');"></div>
                <div class="container-product-title-and-buttons">
                    <div class="product-title">MRERORR</div>
                    <div class="buttons">
                        <button class="shop-now"><span>SHOP NOW</span></button>
                        <button class="add-to-cart"><span>ADD TO CART</span>
                        <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
                    </div>
                </div>
            </div>
            <!-- Additional product showcases here -->
        </div>
        <div class="slide-nav">
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
        </div>
    `;
  return showcase;
}

// ------------------------------
// Initialize Slideshow
// ------------------------------

function initializeSlideshow() {
  const container = document.querySelector(".MVP-product-showcase-container");
  const wrapper = container.querySelector(".showcase-wrapper");
  const slides = wrapper.querySelectorAll(".Mvp-product-showcase");
  const prevBtn = container.querySelector(".slide-nav .prev");
  const nextBtn = container.querySelector(".slide-nav .next");
  let currentIndex = 0;

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

  // Menambahkan event listeners untuk tombol navigasi
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}

// ------------------------------
// Footer
// ------------------------------

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-content1">
                <ul class="footer-list1">
                    <li class="fot-item1"><a href="#" class="fot-link1">Shopping Rules</a></li>
                    <li class="fot-item1"><a href="#" class="fot-link1">Size Guides</a></li>
                    <li class="fot-item1"><a href="#" class="fot-link1">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-content2">
                <ul class="footer-list1">
                    <li class="fot-item1"><h3>Brand In: Indonesia</h3></li>
                    <li class="fot-item1"><h3>Region: DIY, Yogyakarta</h3></li>
                    <li class="fot-item1"><a href="#" class="fot-link1">Feedback</a></li>
                </ul>
            </div>
            <section class="footer-social-media">
                <div class="footer-social-media-follow-block">
                    <h3 class="footer-social-media-follow-title">Follow Us</h3>
                    <ul class="Follow-us-list">
                        <li class="instagram">
                            <a href="https://www.instagram.com/" class="Instatagram-link">
                                Instagram<img src="/src/assets/img/Icon/instagram.png" alt="Instagram-icon" class="icon-instagram">
                            </a>
                        </li>
                        <!-- Additional social media links here -->
                    </ul>
                </div>
            </section>
        </div>
    `;
  return footer;
}
