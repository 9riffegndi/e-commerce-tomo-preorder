document.addEventListener("DOMContentLoaded", () => {
  // Mengambil elemen dengan id "IndexMvp" dari dokumen
  const LoginPage = document.getElementById("LoginPage");

  // Membuat dan menambahkan navbar ke elemen IndexMvp
  const navbar = createNavbar();
  LoginPage.appendChild(navbar);
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
