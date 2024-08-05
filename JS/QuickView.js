document.addEventListener("DOMContentLoaded", () => {
  const QuickViewJS = document.getElementById("QuickViewJS");
  const QuickView = CreateQuickView();
  QuickViewJS.appendChild(QuickView);

  // ------------------------------//
  // quantity-selector Function//
  // ------------------------------//
  const quantityInput = document.getElementById("quantity");
  const reduceButton = document.getElementById("reduce-quantity");
  const addButton = document.getElementById("add-quantity");

  let quantity = parseInt(quantityInput.value);

  function updateQuantity(newQuantity) {
    quantity = newQuantity;
    quantityInput.value = quantity;
    // Disable reduce button if quantity is 1
    reduceButton.disabled = quantity <= 1;
  }

  addButton.addEventListener("click", () => {
    updateQuantity(quantity + 1);
  });

  reduceButton.addEventListener("click", () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  });

  // Initial check to set the state of the reduce button
  updateQuantity(quantity);

  // ------------------------------//
  // END quantity-selector Function//
  // ------------------------------//
});

function checkIntersection() {
  const wrapper = document.querySelector(
    ".wrapper-container-description-product-qv"
  );
  const parent = document.querySelector(
    ".parent-container-description-product-qv"
  );

  const wrapperRect = wrapper.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();

  // Check if the bottom of the wrapper has scrolled past the bottom of the parent
  if (wrapperRect.bottom > parentRect.bottom) {
    wrapper.classList.add("hidden");
  } else {
    wrapper.classList.remove("hidden");
  }
}

// Check on scroll and resize
window.addEventListener("scroll", checkIntersection);
window.addEventListener("resize", checkIntersection);
document.addEventListener("DOMContentLoaded", checkIntersection);

// Observe the wrapper
observer.observe(wrapper);


const iklan = document.createElement("div")

console.log(iklan)

function CreateQuickView() {
  const QuickVw = document.createElement("div");
  QuickVw.className = "Quck-view";
  QuickVw.innerHTML = `
    <div class="Overlay-QuickView">
        <div class="modal-quickview">
            <div class="container-image-qv">
                <div class="main-image-gv">
                    <img src="/src/assets/img/Product/tshirt orange/Snapinsta.app_449502707_1630814214367370_7685554859299244820_n_1080.jpg" alt="600x600">
                    <img src="/src/assets/img/Product/tshirt orange/Snapinsta.app_449604718_330880110041498_7728777926761481565_n_1080.jpg" alt="600x600">
                </div>
                <div class="section-grid-two-image">
                    <img src="/src/assets/img/Product/tshirt orange/front .jpg" alt="298px">
                    <img src="/src/assets/img/Product/tshirt orange/back.jpg" alt="298px">
                    <img src="/src/assets/img/Product/tshirt orange/front .jpg" alt="298px">
                    <img src="/src/assets/img/Product/tshirt orange/back.jpg" alt="298px">
                    <!-- additional img -->
                </div>
            </div>
            <div class="parent-container-description-product-qv">
                <div class="wrapper-container-description-product-qv">
                    <div class="header-brand-name-qv">
                        <p>T O M O</p>
                    </div>
                    <div class="title-product-name-qv">
                        <p>Zenith Line</p>
                    </div>
                    <div class="price-diskon-status-qv">
                        <div class="product-price-qv-before-diskon">
                            <p>Rp100.000</p>
                        </div>
                        <div class="product-price-qv-after-diskon">
                            <p>Rp90.000</p>
                        </div>
                        <div class="badge-product-status-qv">
                            <p>PRE ORDER</p>
                        </div>
                    </div>
                    <div class="text-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam imperdiet risus a sapien gravida, sit amet venenatis felis gravida.
                            Praesent euismod turpis at erat tempor, ac tempor odio feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam imperdiet risus a sapien gravida, sit amet venenatis felis gravida.
                            Praesent euismod turpis at erat tempor, ac tempor odio feugiat.
                        </p>
                    </div>
                    <div class="wrapper-input-size-qv">
                        <label class="radio">
                            <input checked="" type="radio" name="size" />
                            <span class="size">S</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="size" />
                            <span class="size">M</span>
                        </label>

                        <label class="radio">
                            <input type="radio" name="size" />
                            <span class="size">L</span>
                        </label>

                        <label class="radio">
                            <input type="radio" name="size" />
                            <span class="size">XL</span>
                        </label>

                        <label class="radio">
                            <input type="radio" name="size" />
                            <span class="size">XXL</span>
                        </label>
                    </div>
                    <div class="wrapper-quantity-selector-add-cart-buyit">
                        <div class="quantity-selector">
                            <button id="reduce-quantity"><p>-</p></button>
                                <input type="number" id="quantity" value="1" readonly>
                            <button id="add-quantity"><p>+</p></button>
                        </div>
                        <button class="add-to-cart-qv"><span>ADD TO CART</span>
                            <img src="/src/assets/Icon/bag.png" alt="Cart-icon" class="cart-icon-img"></button>
                    </div>
                        <button class="buy-it"><span>BUY IT</span></button>
                </div>
            </div>
            </div>
        </div>
    </div>    `;
  return QuickVw;
}
