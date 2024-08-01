document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  //  DOM NAVBAR                   //
  // ------------------------------//
  // Mengambil elemen dengan ID 'NavbarJS' dari DOM
  const NavbarJS = document.getElementById("NavbarJS");
  // Membuat elemen navbar menggunakan fungsi CreateNavbar
  const Navbar = CreateNavbar();
  // Menambahkan elemen navbar yang baru dibuat ke elemen dengan ID 'NavbarJS'
  NavbarJS.appendChild(Navbar);
  // ------------------------------//
  //  END DOM NAVBAR               //
  // ------------------------------//
  // ------------------------------//
  //  Mini Cart Overlay Function    //
  // ------------------------------//

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
  // ------------------------------//
  //  END Mini Cart Overlay Function//
  // ------------------------------//

  // ------------------------------//
  //  Addres Modal function        //
  // ------------------------------//

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
  // ------------------------------//
  // END Addres Modal function       //
  // ------------------------------//

  // ------------------------------//
  //  Location Popular Container Function//
  // ------------------------------//
  const locationButton = document.querySelector(
    ".icon-cordinate-location-pupular"
  );

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
  // ------------------------------//
  // END Location Popular Container Function//
  // ------------------------------//
});

// ------------------------------//
// Navbar Structure              //
// ------------------------------//
function CreateNavbar() {
  const Navbar = document.createElement("nav");
  Navbar.className = "Navbar";
  Navbar.innerHTML = `
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
                <a href="/pages/IndexMVP.html" class="nav-link logo-link">
                    <img src="/src/assets/Logo/TOMO LOGOS NOBG.png" alt="logo-tomo" class="logo-img">
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link cart-icon">
                    <img src="/src/assets/Icon/bag.png" alt="Cart-icon" class="icon-cart">
                    <span class="Item-cart-count">0</span>
                </a>
                <div class="mini-cart-overlay">
                    <div class="mini-cart">
                        <div class="mini-cart-header">
                            <h1>SHOPPING BAG</h1>
                            <button class="close-btn">&times;</button>
                        </div>
                        <div class="mini-cart-content">
                            <img src="/src/assets/Icon/bag.png" alt="Cart-icon" class="icon-cart-large">
                            <p>Your cart is currently empty</p>
                            <a href="#" class="start-shopping-link">START SHOPPING</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item user-actions">
                <a href="/pages/Login.html" class="nav-link login-register">LOGIN | REGISTER</a>
                <a href="#" class="nav-link address-link">
                    Dikirim ke - <span class="city-address">Indramayu</span>
                    <img src="/src/assets/Icon/location.png" alt="Address-icon" class="icon-address">
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
                                <!-- <button class="addres-modal-login">Login </button> -->
                                <a  class="addres-modal-login" href="/pages/Login.html">Login</a>
                            </section>
                            <hr>
                            <p><strong>Do you want to use another way?</strong></p>
                            <div class="parent-container-search-addres">
                                <div class="container-search-addres">
                                    <div class="container-search-input-addres">
                                        <div class="container-icon-seacrh-addres">
                                            <img class="icon-search-addres" src="/src/assets/Icon/search.png" alt="">
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
                                            <img class="icon-cordinate-popular-location" src="/src/assets/Icon/aim.png" alt="Cordinate Popular location">
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
  return Navbar;
}
// ------------------------------//
// END Navbar Structure          //
// ------------------------------//
