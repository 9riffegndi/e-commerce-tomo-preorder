document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------//
  //  DOM Footer                   //
  // ------------------------------//
  const FooterJS = document.getElementById("FooterJS");
  const Footer = CreateFooter();
  FooterJS.appendChild(Footer);
  // ------------------------------//
  // END DOM Footer                //
  // ------------------------------//
});

// ------------------------------//
// Footer Structure              //
// ------------------------------//

function CreateFooter() {
  const Footer = document.createElement("footer");
  Footer.className = "Footer";
  Footer.innerHTML = `
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
                                    Instagram<img src="/src/assets/Icon/instagram.png" alt="Instagram-icon" class="icon-instagram">
                                </a>
                            </li>
                            <li class="TiktokShop">
                                <a href="#" class="Tiktok-link">
                                    TiktokShop<img src="/src/assets/Icon/tik-tok.png" alt="Tiktok-icon" class="icon-Tiktok">
                                </a>
                            </li>
                            <li class="Tokopedia">
                                <a href="#" class="Tokopedia-link">
                                    Instagram<img src="/src/assets/Icon/tokopedia.png" alt="Tokopedia-icon" class="icon-Tokopedia">
                                </a>
                            </li>
                            <!-- Additional social media links here -->
                        </ul>
                    </div>
                </section>
            </div>
        `;
  return Footer;
}
// ------------------------------//
// END Footer Structure          //
// ------------------------------//