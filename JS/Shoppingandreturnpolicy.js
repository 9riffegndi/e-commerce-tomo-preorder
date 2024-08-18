document.addEventListener("DOMContentLoaded", () => {
  const ShoppingAndReturnJS = document.getElementById("ShoppingandreturnJS");
  const Shoppingandreturn = CreateShoppingandreturn();
  ShoppingAndReturnJS.appendChild(Shoppingandreturn);
  AOS.init();
});

function CreateShoppingandreturn() {
  const ShpReturn = document.createElement("div");
  ShpReturn.className = "Shoppingandreturn";
  ShpReturn.innerHTML = `
    <div class="overlay-shopping-return">
        <div data-aos="fade-up"data-aos-duration="3000">
            <h1>TOMOS SPENDING AND RETURN POLICY</h1>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000">
            <h2>RETURN GOODS TERMS & CONDITIONS</h2>
        </div>
    </div>
    <div class="shoppingandreturnrules">
        <div data-aos="fade-up"data-aos-duration="3000">
            
        <ul>
            <li>
                <strong>1. If the received goods are significantly damaged or defective (proven by invoice/shipping label), including:</strong>
                <ul>
                    <li>Visible damage to the item*</li>
                    <li>Missing essential parts of the item*</li>
                    <li>Item not functioning as described*</li>
                </ul>
            </li>
            <li>
                <strong>2. If the received goods do not match the order (proven by invoice/shipping label), including:</strong>
                <ul>
                    <li>Size of the item does not match the order*</li>
                    <li>Color or design of the item does not match the order*</li>
                </ul>
            </li>
            <li>
                <strong>3. If the goods received do not match the product description on the website, including:</strong>
                <ul>
                    <li>Item differs from the images on the website*</li>
                    <li>Product description is inaccurate*</li>
                </ul>
            </li>
            <li>
                <strong>4. If there is a shipping error, including:</strong>
                <ul>
                    <li>Wrong item shipped or not as ordered*</li>
                    <li>Item received is not part of the order*</li>
                </ul>
            </li>
            <li>
                <strong>5. If the received item has been used or opened and cannot be resold:</strong>
                <ul>
                    <li>Item is in a used or non-new condition*</li>
                    <li>Item has been removed from its original packaging*</li>
                </ul>
            </li>
            <li>
                <strong>6. If the received item has issues that were not detected at the time of delivery:</strong>
                <ul>
                    <li>Issues that appear after use*</li>
                    <li>Damage not visible at the time of receipt*</li>
                </ul>
            </li>
        </ul>
        </div>    

'
    </div>
        `;
  return ShpReturn;
}
// ------------------------------//
// END Footer Structure          //
// ------------------------------//
