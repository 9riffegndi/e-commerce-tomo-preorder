document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  // Card Product                  //
  // ------------------------------//
  const CardProductJS = document.getElementById("CardProductJS");
  const CardProduct = CreateCardProduct();
  CardProductJS.appendChild(CardProduct);
  // ------------------------------//
  // END Card Product              //
  // ------------------------------//
});

// ------------------------------//
// Card Product Structure        //
// ------------------------------//
function CreateCardProduct() {
  const CardProduct = document.createElement("div");
  CardProduct.className = "overlay-card-product";
  CardProduct.innerHTML = `
        <div class="header-card-title">
            <h1>ALL <hr>COLLECTION</h1>
        </div>
            <div class="wrapper-modal-card-product">
            <div class="modal-card-prodcut">
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr-custom">    
        <div class="header-card-title">
            <p>CATAGORIES</p>
            <h1>HOODIE</h1>
        </div>
        <div class="wrapper-modal-card-product">
            <div class="modal-card-prodcut">
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr-custom">    
        <div class="header-card-title">
            <p>CATAGORIES</p>
            <h1>T-SHIRT</h1>
        </div>
        <div class="wrapper-modal-card-product">
            <div class="modal-card-prodcut">
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                        <a href">
                            <img class="primary-card-product-image" src="/src/assets/img/Product/tshirt blue.jpg" alt="card product image size 300x300">
                        </a>
                        <a href="#">
                            <img class="secondary-card-product-image" src="/src/assets/img/Product/tshirt blue back.jpg" alt="card product image size 300x300">
                        </a>
                    </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">20 PCS</div>
                    <div class="title-product-name">Love Bowl</div>
                    <div class="product-price">Rp 92.000</div>
                    </div>
                </div>
            </div>
        </div>
            
            `;
  return CardProduct;
}
// ----------------------------------//
// END Card Product Structure        //
// ----------------------------------//
