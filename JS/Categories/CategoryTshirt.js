document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  // Card Product                  //
  // ------------------------------//
  const CategoryTshirtJS = document.getElementById("CategoryTshirtJS");
  const CategoryTshirt = CreateCategoryTshirt();
  CategoryTshirtJS.appendChild(CategoryTshirt);
  // ------------------------------//
  // END Card Product              //
  // ------------------------------//
});

// ------------------------------//
// Card Product Structure        //
// ------------------------------//
function CreateCategoryTshirt() {
  const CatTshirt = document.createElement("div");
  CatTshirt.className = "overlay-category-Tshirt";
  CatTshirt.innerHTML = `  
       <div class="header-card-title">
            <p>CATAGORIES</p>
            <h1>T-SHIRT</h1>
        </div>
        <div class="wrapper-modal-card-product">
            <div class="modal-card-prodcut">
                <div class="container-card-product">
                    <div>
                        <a href="#">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt orange/front .jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt orange/back.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">IN STOCK</div>
                        <div class="badge-stock-product">15 PCS</div>
                        <div class="title-product-name">Urban Pulse</div>
                        <div class="product-price">Rp 85.000</div>
                    </div>
                    </div>
                    <div class="container-card-product">
                    <div>
                        <a href="#">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt green/front .jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt green/back.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">OUT OF STOCK</div>
                        <div class="badge-stock-product">0 PCS</div>
                        <div class="title-product-name">Neon Glaze</div>
                        <div class="product-price">Rp 110.000</div>
                    </div>
                    </div>
                    <div class="container-card-product">
                    <div>
                        <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt red/front.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt red/back.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">IN STOCK</div>
                        <div class="badge-stock-product">25 PCS</div>
                        <div class="title-product-name">Echo Dream</div>
                        <div class="product-price">Rp 92.000</div>
                    </div>
                    </div>
                    <div class="container-card-product">
                    <div>
                        <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt black/front.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt black/back.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">PRE ORDER</div>
                        <div class="badge-stock-product">30 PCS</div>
                        <div class="title-product-name">Zenith Line</div>
                        <div class="product-price">Rp 100.000</div>
                    </div>
                    </div>
                    <div class="container-card-product">
                    <div>
                        <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt white/3/front.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt white/3/back.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">IN STOCK</div>
                        <div class="badge-stock-product">20 PCS</div>
                        <div class="title-product-name">Solar Flair</div>
                        <div class="product-price">Rp 75.000</div>
                    </div>
                    </div>
                    <div class="container-card-product">
                    <div>
                        <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt white/2/front.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt white/2/back.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">PRE ORDER</div>
                        <div class="badge-stock-product">18 PCS</div>
                        <div class="title-product-name">Echo Drift</div>
                        <div class="product-price">Rp 90.000</div>
                    </div>
                    </div>
                    <div class="container-card-product">
                    <div>
                        <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt brown/front.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                        <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt brown/backl.jpg"
                            alt="card product image size 300x300"
                        />
                        </a>
                    </div>
                    <div class="container-description-card-product">
                        <div class="header-brand-name"><p>T O M O</p></div>
                        <div class="badge-product-status">OUT OF STOCK</div>
                        <div class="badge-stock-product">0 PCS</div>
                        <div class="title-product-name">Cosmic Hues</div>
                        <div class="product-price">Rp 95.000</div>
                    </div>
                    </div>
            <div class="container-card-product">
                <div>
                    <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt blue/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt blue/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">35 PCS</div>
                    <div class="title-product-name">Nebula Burst</div>
                    <div class="product-price">Rp 120.000</div>
                </div>
            </div>
            <div class="container-card-product">
                <div>
                    <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt yellow/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt yellow/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">25 PCS</div>
                    <div class="title-product-name">Solar Flare</div>
                    <div class="product-price">Rp 150.000</div>
                </div>
            </div>
            <div class="container-card-product">
                <div>
                    <a href="">
                        <img
                            class="primary-card-product-image"
                            src="/src/assets/img/Product/tshirt charchoal/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="#">
                        <img
                            class="secondary-card-product-image"
                            src="/src/assets/img/Product/tshirt charchoal/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">OUT OF STOCK</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">Midnight Aura</div>
                    <div class="product-price">Rp 100.000</div>
                </div>
                </div>
            </div>
        </div>
            `;
  return CatTshirt;
}
// ----------------------------------//
// END Card Product Structure        //
// ----------------------------------//
