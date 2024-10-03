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
	AOS.init();
});
// ------------------------------//
// Card Product Structure        //
// ------------------------------//
function CreateCategoryTshirt() {
	const CatTshirt = document.createElement("div");
	CatTshirt.className = "overlay-category-Tshirt";
	CatTshirt.innerHTML = `  
        <div data-aos="fade-up"data-aos-duration="1200">
            <div class="header-card-title">
                <p>CATAGORIES</p>
                <h1>T-SHIRT</h1>
            </div>
        </div>   
        <!--t shirt-->
        <div data-aos="fade-up"data-aos-duration="1200">
        <div class="wrapper-modal-card-product">
            <div class="modal-card-prodcut">
            <div class="container-card-product">
                <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt charchoal/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt charchoal/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">22 PCS</div>
                    <div class="title-product-name">Zenith Line Aura</div>
                    <div class="product-price">Rp 122.000</div>
                </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt black/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt black/back.jpg"
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
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt blue/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt blue/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">50 PCS</div>
                    <div class="title-product-name">TASER </div>
                    <div class="product-price">Rp 120.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt brown/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt brown/backl.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">LOAZ</div>
                    <div class="product-price">Rp 200.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt cream/front .jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt cream/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">OUT OF STOCK</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">Redokuy </div>
                    <div class="product-price">Rp 100.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt red/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt red/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">21 PCS</div>
                    <div class="title-product-name">POSSSESR</div>
                    <div class="product-price">Rp 101.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt yellow/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt yellow/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">11 PCS</div>
                    <div class="title-product-name">URASAAA</div>
                    <div class="product-price">Rp 121.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt green/front .jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt green/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">21 PCS</div>
                    <div class="title-product-name">SASISS</div>
                    <div class="product-price">Rp 133.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt white/1/front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt white/1/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">1 PCS</div>
                    <div class="title-product-name">LOLHJS</div>
                    <div class="product-price">Rp 233.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/tshirt orange/front .jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/tshirt orange/back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">OUT OF STOCK</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">ORAQAAS</div>
                    <div class="product-price">Rp 122.000</div>
                    </div>
                </div>
            </div>
        </div>
        </div>    
        <!--t shirt-->
            `;
	return CatTshirt;
}
// ----------------------------------//
// END Card Product Structure        //
// ----------------------------------//