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
                    <div class="pre-order-badge">PRE-ORDER</div>
                    <div class="product-image" style="background-image: url('/src/assets/img/Product/Mvp Product RED.png');"></div>
                    <div class="container-product-title-and-buttons">
                        <div class="product-title">MRERORR</div>
                        <div class="buttons">
                            <button class="shop-now"><span>SHOP NOW</span></button>
                            <button class="add-to-cart"><span>ADD TO CART</span>
                            <img src="/src/assets/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
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
                            <img src="/src/assets/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
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
// ----------------------------------//
// END Initialize Slideshow Function //
// ----------------------------------//