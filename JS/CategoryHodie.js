document.addEventListener("DOMContentLoaded", () => {
	// ------------------------------//
	// Card Product                  //
	// ------------------------------//
	const CategoryHodieJS = document.getElementById("CategoryHodieJS");
	const CategoryHodie = CreateCategoryTshirt();
	CategoryHodieJS.appendChild(CategoryHodie);
	// ------------------------------//
	// END Card Product              //
	// ------------------------------//
	AOS.init();
});
// ------------------------------//
// Card Product Structure        //
// ------------------------------//
function CreateCategoryTshirt() {
	const CatHodie = document.createElement("div");
	CatHodie.className = "overlay-category-hodie";
	CatHodie.innerHTML = `  
        <div data-aos="fade-up"data-aos-duration="1200">
            <div class="header-card-title">
                <p>CATAGORIES</p>
                <h1>HOODIE</h1>
            </div>
        </div> 
       <!--hoodie  -->
        <div data-aos="fade-up"data-aos-duration="1200">
        <div class="wrapper-modal-card-product">
            <div class="modal-card-prodcut">
            <div class="container-card-product">
                <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/hoodie/darkbrown front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/hoodie/darkbrown back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">10 PCS</div>
                    <div class="title-product-name">Stellar sossh</div>
                    <div class="product-price">Rp 122.000</div>
                </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/hoodie/green army front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/hoodie/green army back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">OUT OF STOCK</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">Stellar sossh</div>
                    <div class="product-price">Rp 100.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/hoodie/black front.png"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/hoodie/black back.png"       
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">IN STOCK</div>
                    <div class="badge-stock-product">50 PCS</div>
                    <div class="title-product-name">Stellar sossh</div>
                    <div class="product-price">Rp 120.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/hoodie/blue front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/hoodie/blue back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                    <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">PRE ORDER</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">Stellar sossh</div>
                    <div class="product-price">Rp 200.000</div>
                    </div>
                </div>
                <div class="container-card-product">
                    <div>
                    <a href="../pages/QuickView.html">
                        <img
                            class="primary-card-product-image"
                            src="../src/assets/img/Product/hoodie/sage front.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                    <a href="../pages/QuickView.html">
                        <img
                            class="secondary-card-product-image"
                            src="../src/assets/img/Product/hoodie/sage back.jpg"
                            alt="card product image size 300x300"
                        />
                    </a>
                </div>
                <div class="container-description-card-product">
                    <div class="header-brand-name"><p>T O M O</p></div>
                    <div class="badge-product-status">OUT OF STOCK</div>
                    <div class="badge-stock-product">0 PCS</div>
                    <div class="title-product-name">Stellar sossh</div>
                    <div class="product-price">Rp 100.000</div>
                    </div>
                </div>
            </div>
        </div>
        </div>   
        <!--hoodie  -->
            `;
	return CatHodie;
}
// ----------------------------------//
// END Card Product Structure        //
// ----------------------------------//