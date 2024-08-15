document.addEventListener("DOMContentLoaded", () => {
  const ShoppingAndReturnJS = document.getElementById("ShoppingandreturnJS");
  const Shoppingandreturn = CreateShoppingandreturn();
  ShoppingAndReturnJS.appendChild(Shoppingandreturn);
});

function CreateShoppingandreturn() {
  const ShpReturn = document.createElement("div");
  ShpReturn.className = "Shoppingandreturn";
  ShpReturn.innerHTML = `
    <div class="overlay-shopping-return">
        <h1>TOMOS SPENDING AND RETURN POLICY</h1>
        <h2>RETURN GOODS TERMS & CONDITIONS</h2>
    </div>
    <div class="shoppingandreturnrules">
        <ul>
            <p>1. If the goods received by the customer do not match the order, (proven by the invoice / shipping label) including:</p>
            <li>Size does not match*</li>
            <li>Goods/Articles that do not match*</li>
            <li>Severe defects in the goods*</li>
            <li>Size too big / small (shipping costs will be charged to the customer)*</li>
        </ul>
        <ul>
            <p>2. If the goods received by the customer do not match the order, (proven by the invoice / shipping label) including:</p>
            <li>Size does not match*</li>
            <li>Goods/Articles that do not match*</li>
            <li>Severe defects in the goods*</li>
            <li>Size too big / small (shipping costs will be charged to the customer)*</li>
        </ul>
        <ul>
            <p>3. If the goods received by the customer do not match the order, (proven by the invoice / shipping label) including:</p>
            <li>Size does not match*</li>
            <li>Goods/Articles that do not match*</li>
            <li>Severe defects in the goods*</li>
            <li>Size too big / small (shipping costs will be charged to the customer)*</li>
        </ul>
        <ul>
            <p>4. If the goods received by the customer do not match the order, (proven by the invoice / shipping label) including:</p>
            <li>Size does not match*</li>
            <li>Goods/Articles that do not match*</li>
            <li>Severe defects in the goods*</li>
            <li>Size too big / small (shipping costs will be charged to the customer)*</li>
        </ul>
        <ul>
            <p>5. If the goods received by the customer do not match the order, (proven by the invoice / shipping label) including:</p>
            <li>Size does not match*</li>
            <li>Goods/Articles that do not match*</li>
        </ul>
        <ul>
            <p>6. If the goods received by the customer do not match the order, (proven by the invoice / shipping label) including:</p>
            <li>Size does not match*</li>
        </ul>
    </div>
        `;
  return ShpReturn;
}
// ------------------------------//
// END Footer Structure          //
// ------------------------------//
