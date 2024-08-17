document.addEventListener("DOMContentLoaded", () => {
  const AboutJS = document.getElementById("AboutJS");
  const About = CreateAbout();
  AboutJS.appendChild(About);
});

function CreateAbout() {
  const AbJs = document.createElement("div");
  AbJs.className = "About";
  AbJs.innerHTML = `
    <div class="container-title">
      <h1>ABOUT TOMOS</h1>
    </div>
    <div class="Container-About">
      <div class="wrapper-text-About">
        <h4>Story</h4>
        <p>
            Welcome to Tomo, a place where creativity, freedom and style meet to create t-shirts and hoodies that are more than just clothes-they're a statement of who you are. We don't just design clothes; we build identities that reflect courage, uniqueness and boundless passion.
        </p>
        <hr>
        <p>Our journey began with a simple idea: “What if we could make t-shirts and hoodies that are not only comfortable to wear, but also an authentic expression of ourselves?” We believe that every design is a part of your story, and we want to be a part of how you express yourself to the world. This is why we chose the name “Tomo”-which means friend-because our t-shirts and hoodies are created to be a loyal companion in every moment of your life.</p>
        <hr>
        <p>Our logo is a symbol of freedom and creativity, a mark that there are no limits in expressing who you are. We design each piece with love and attention to detail so that every t-shirt and hoodie you wear not only looks stylish but also feels comfortable all day long.</p>
        <hr>
        <p>Tomo is not just about clothing; it's about spirit and lifestyle. We support those who dare to stand out, who aren't afraid to show their true colors, and who believe that every day is an opportunity to express oneself. We also believe in the importance of community and connection. That's why we often collaborate with local artists, creative communities, and fashion enthusiasts to create pieces that truly reflect the essence of freedom and style.</p>
        <hr>
        <p>Our dream is to become the brand you choose when you're looking for more than just clothing—when you're seeking a way to express yourself, to step out with confidence, and to connect with a community that shares the same values. We've met so many inspiring individuals along our journey, and we believe this is just the beginning.</p>
        <hr>
        <p>So, let's continue this journey together. Let's keep expressing ourselves, stepping out in style, and creating unforgettable imprints with every step.</p>
    </div>
  </div>
    `;
  return AbJs;
}
