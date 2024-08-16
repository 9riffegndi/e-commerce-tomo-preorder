document.addEventListener("DOMContentLoaded", () => {
  const PrivacyPolicyJS = document.getElementById("PrivacyPolicyJS");
  const PrivacyPolicy = CreatePrivacyPolicy();
  PrivacyPolicyJS.appendChild(PrivacyPolicy);
});

function CreatePrivacyPolicy() {
  const PrPolicy = document.createElement("div");
  PrPolicy.className = "PrivacyPolicy";
  PrPolicy.innerHTML = `
        <div class="overlay-privacy-policy">
            <h1>TOMOS PRIVACY POLICY</h1>
            <h2>PRIVACY POLICY TERMS & CONDITIONS</h2>
        </div>
        <div class="privacy-policy-rules">
            <ul>
                <li>
                    <strong>1. Information We Collect:</strong>
                    <ul>
                        <li>Personal Identification Information: Includes your name, email address, phone number, shipping address, and payment information.</li>
                        <li>Transaction Information: Details of the products you purchase, including order history and payment details.</li>
                        <li>Technical Data: Information about your device, IP address, browser type, and operating system.</li>
                    </ul>
                </li>
                <li>
                    <strong>2. How We Use Your Information:</strong>
                    <ul>
                        <li>To process and manage your orders, including payment and shipping.</li>
                        <li>To communicate with you regarding your orders, provide customer support, and respond to inquiries.</li>
                        <li>To send you promotional offers, updates, and newsletters if you have opted in to receive them.</li>
                        <li>To analyze and improve our website, services, and customer experience.</li>
                    </ul>
                </li>
                <li>
                    <strong>3. How We Protect Your Information:</strong>
                    <ul>
                        <li>We use encryption technologies to protect your payment information during transactions.</li>
                        <li>We implement secure measures to protect your personal information from unauthorized access or use.</li>
                        <li>We conduct regular security reviews to ensure the safety of your data.</li>
                    </ul>
                </li>
                <li>
                    <strong>4. Sharing Your Information:</strong>
                    <ul>
                        <li>We may share your information with third-party service providers who assist us in fulfilling orders, processing payments, and delivering services.</li>
                        <li>We may disclose your information if required by law or to protect our rights, privacy, safety, or property, or that of others.</li>
                        <li>We may share your information with your consent, such as when you opt-in to receive promotional communications.</li>
                    </ul>
                </li>
                <li>
                    <strong>5. Cookies and Tracking Technologies:</strong>
                    <ul>
                        <li>We use cookies and similar tracking technologies to enhance your browsing experience, analyze website usage, and provide personalized content.</li>
                        <li>You can manage your cookie preferences through your browser settings.</li>
                    </ul>
                </li>
                <li>
                    <strong>6. Your Rights:</strong>
                    <ul>
                        <li>You have the right to access, correct, or delete your personal information.</li>
                        <li>You can opt-out of receiving marketing communications from us at any time.</li>
                        <li>You can request details about the data we hold on you and how it is used.</li>
                    </ul>
                </li>
                <li>
                    <strong>7. Changes to This Privacy Policy:</strong>
                    <ul>
                        <li>We may update this Privacy Policy periodically. The updated policy will be posted on this page with the effective date.</li>
                        <li>We encourage you to review this policy regularly to stay informed about how we protect your data.</li>
                    </ul>
                </li>
                <li>
                    <strong>8. Contact Us:</strong>
                    <ul>
                        <li>If you have any questions or concerns about this Privacy Policy, please contact us at:</li>
                        <li>Email: support@tomos.com</li>
                        <li>Phone: +62 123 456 789</li>
                        <li>Address: 1234 Main Street, Yogyakarta, ID</ul>
                    </ul>
                </li>
            </ul>
        </div>
        `;
        return PrPolicy;
}
// ------------------------------//
// END Footer Structure          //
// ------------------------------//
