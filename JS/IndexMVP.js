    document.addEventListener("DOMContentLoaded", () => {
    const IndexMvp = document.getElementById("IndexMvp");

    const navbar = createNavbar();
    IndexMvp.appendChild(navbar);

    const productShowcase = createProductShowcase();
    IndexMvp.appendChild(productShowcase);

    const footer = createFooter();
    IndexMvp.appendChild(footer);

    initializeSlideshow();

    // Mini Cart Overlay
    const cartIcon = document.querySelector(".cart-icon");
    const miniCartOverlay = document.querySelector(".mini-cart-overlay");
    const closeBtn = document.querySelector(".close-btn");

    cartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        miniCartOverlay.style.display = "block  ";
    });

    closeBtn.addEventListener("click", () => {
        miniCartOverlay.style.display = "none";
    });

    miniCartOverlay.addEventListener("click", (event) => {
        if (event.target === miniCartOverlay) {
        miniCartOverlay.style.display = "none";
        }
    });
    //Address Modal
    const addressLink = document.querySelector(".nav-link.address-link");
    const addressModal = document.querySelector(".addres-modal-overlay");
    const closeButton = document.querySelector(
        ".close-button-addres-modal button"
    );

    addressLink.addEventListener("click", (event) => {
        event.preventDefault();
        addressModal.style.display = "flex";
    });

    closeButton.addEventListener("click", () => {
        addressModal.style.display = "none";
    });

    // Menutup modal jika user mengklik di luar modal
    addressModal.addEventListener("click", (event) => {
        if (event.target === addressModal) {
        addressModal.style.display = "none";
        }
    });
    });

    // Navbar
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
                                                <li class="nav-item logo">
                                                    <a href="#" class="nav-link logo-link">
                                                        <img src="/src/assets/img/Logo/TOMO LOGOS NOBG.png" alt="logo-tomo" class="logo-img">
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link cart-icon">
                                                        <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="icon-cart">
                                                        <span class = "Item-cart-count">0</span>
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
                                                        Dikirim ke - <span class= "city-address">Indramayu</span>
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
                                                                        <button> &times;</button>
                                                                    </div>
                                                                </div>
                                                                <section class="login-container">
                                                                    <div class="login-header-p">
                                                                        <p>LOGIN</p>
                                                                        <p>Login first to select your shipping address</p>
                                                                    </div>
                                                                    <button class="addres-modal-login"> Login</button>
                                                                </section>
                                                                <hr>
                                                                <p><strong>Do you want to use another way?</strong></p>
                                                                <div class="container-search-addres">
                                                                    <div class="container-search-input-addres">
                                                                        <div class="container-icon-seacrh-addres">
                                                                            <img src="" alt="">
                                                                        </div>
                                                                        <div class="contiener-input-search-addres-location">
                                                                            <input type="text" class="search-input" placeholder="Select a city or sub-district">
                                                                        </div>
                                                                        <button class="location-addres-use">
                                                                            <span>
                                                                                Use
                                                                            </span>
                                                                        </button>
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

    // Mvp Product showcase
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
                                                    <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp Product Hodie.png');"></div>
                                                    <div class="container-product-title-and-buttons">
                                                        <div class="product-title">MAXADUCH</div>
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
                                                        <div class="product-title">PSSEOS</div>
                                                        <div class="buttons">
                                                            <button class="shop-now"><span>SHOP NOW</span></button>
                                                            <button class="add-to-cart"><span>ADD TO CART</span>
                                                            <img src="/src/assets/img/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="slide-nav">
                                                <button class="prev">&lt;</button>
                                                <button class="next">&gt;</button>
                                            </div>
                                        `;
    return showcase;
    }

    // Initialize Slideshow
    function initializeSlideshow() {
    const container = document.querySelector(".MVP-product-showcase-container");
    const wrapper = container.querySelector(".showcase-wrapper");
    const slides = wrapper.querySelectorAll(".Mvp-product-showcase");
    const prevBtn = container.querySelector(".slide-nav .prev");
    const nextBtn = container.querySelector(".slide-nav .next");
    let currentIndex = 0;

    // Function to show the slide at the given index
    function showSlide(index) {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // Function to show the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Function to show the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    }

    // FOOTER
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
                                                            <li class="Tiktok">
                                                                <a href="https://www.tiktok.com/" class="Tiktok-link">
                                                                    Tiktok<img src="/src/assets/img/Icon/tik-tok.png" alt="Tiktok-icon" class="icon-Tikok">
                                                                </a>
                                                            </li>
                                                            <li class="Shope">
                                                                <a href="https://shopee.co.id/" class="Shope-link">
                                                                    Shope<img src="/src/assets/img/Icon/icons8-shopee-500.png" alt="Shope-icon" class="Shope-Tikok">
                                                                </a>
                                                            </li>
                                                            <li class="Tokopedia">
                                                                <a href="https://www.tokopedia.com/" class="Tokopedia-link">
                                                                    Tokopedia<img src="/src/assets/img/Icon/tokopedia.png" alt="Tokopedia-icon" class="icon-Tokopedia">
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </section>
                                            </div>
                                        `;
    return footer;
    }
