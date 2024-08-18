document.addEventListener("DOMContentLoaded", () => {
  const SizeGuideJS = document.getElementById("SizeGuideJS");
  const SizeGuide = CreateSizeGuide();
  SizeGuideJS.appendChild(SizeGuide);
  AOS.init();
});

function CreateSizeGuide() {
  const SzGuide = document.createElement("div");
  SzGuide.className = "SizeGuides";
  SzGuide.innerHTML = `
    <div class="container-title">
      <div data-aos="fade-up"data-aos-duration="2000">
        <h1>TOMOS Size Guide</h1>
      </div>
    </div>
    <div class="Container-sz-guide-tshirt">
      <div class="wrapper-table-sz-guide">
        <div data-aos="fade-up"data-aos-duration="3000">
          <div class="container-img-size">
            <img src="/src/assets/img/Product/Size Guide.png" alt="Size Guide img">
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="2600">
          <h4>T-shirt Category</h4>
        </div>
        <div data-aos="fade-left" data-aos-duration="2100">
          <table>
          <thead>
            <tr>
              <th>Size (cm)</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="highlight-color-th">Length</td>
              <td>70</td>
              <td>72</td>
              <td>74</td>
              <td>76</td>
              <td>78</td>
            </tr>
            <tr>
              <td class="highlight-color-th">Hand Length</td>
              <td>9</td>
              <td>11</td>
              <td>13</td>
              <td>15</td>
              <td>17</td>
            </tr>
            <tr>
              <td class="highlight-color-th">Width</td>
              <td>24</td>
              <td>26</td>
              <td>28</td>
              <td>30</td>
              <td>32</td>
            </tr>
          </tbody>
      </table>
        </div>
      <div data-aos="fade-right" data-aos-duration="2600">
        <h4>Hoodie Category</h4>
      </div>
      <div data-aos="fade-left" data-aos-duration="2600">
        <table>
        <thead>
          <tr>
            <th>Size (cm)</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>XXL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="highlight-color-th">Length</td>
            <td>70</td>
            <td>72</td>
            <td>74</td>
            <td>76</td>
            <td>78</td>
          </tr>
          <tr>
            <td class="highlight-color-th">Hand Length</td>
            <td>9</td>
            <td>11</td>
            <td>13</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td class="highlight-color-th">Width</td>
            <td>24</td>
            <td>26</td>
            <td>28</td>
            <td>30</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
    `;
  return SzGuide;
}
