**WEB TOMO E-Commerce Website**
**NOT RESPONSIVE**

**Contributing And collaboration**
- Jika Anda ingin berkontribusi dan belajar bersama sama, silakan buat pull request atau buka issue untuk diskusi lebih lanjut.
- Github    : @https://github.com/9riffegndi
- IG        : https://www.instagram.com/riefgnadi_/


## Description Tech Stack
This project is an e-commerce website built using HTML, CSS, and vanilla JavaScript
- animation AOS : https://michalsnik.github.io/aos/



**Table of Contents**

***Introduction**
- Project Structure
- Features
- Installation
- Usage
- Contributing
- License
- Acknowledgments


**Introduction**
    TOMO adalah sebuah website e-commerce yang menyediakan berbagai macam produk pakaian, khususnya hoodie dan t-shirt. Website ini dibangun menggunakan HTML, CSS, dan JavaScript dengan struktur modular untuk memudahkan pengelolaan kode.


**Project Structure**
    Berikut adalah struktur folder proyek ini:

│   README.MD
│
├───.vscode
│       settings.json
│
├───JS
│   │   About.js
│   │   CardProduct.js
│   │   Feedback.js
│   │   Footer.js
│   │   ForgotPassword.js
│   │   FormLogin.js
│   │   FormRegistration.js
│   │   Navbar.js
│   │   Payment.js
│   │   PrivacyPolice.js
│   │   QuickView.js
│   │   Shoppingandreturnpolicy.js
│   │   ShowcaseMVP.js
│   │   ShowcaseSecondary.js
│   │   SizeGuide.js
│   │
│   └───Categories
│           CategoryHodie.js
│           CategoryTshirt.js
│
├───pages
│   │   About.html
│   │   Feedback.html
│   │   ForgotPassword.html
│   │   IndexMVP.html
│   │   Login.html
│   │   Payment.html
│   │   PrivacyPolicy.html
│   │   QuickView.html
│   │   Registration.html
│   │   SecondaryCatalogue.html
│   │   Shoppingandreturnpolicy.html
│   │   SizeGuide.html
│   │
│   └───Categories
│           Hoodie.html
│           Tshirt.html
│
├───src
│   └───assets
│       ├───Icon
│       │       add-button-cart.png
│       │       aim.png
│       │       bag.png
│       │       down.png
│       │       exclamation.png
│       │       icons8-shopee-500.png
│       │       instagram.png
│       │       location.png
│       │       minus.png
│       │       plus.png
│       │       search.png
│       │       tik-tok.png
│       │       tokopedia.png
│       │       user.png
│       │
│       ├───img
│       │   └───Product
│       │       │   448442433_995704245467919_1098652599690567044_n.jpg
│       │       │   Mvp Product Hodie.png
│       │       │   Mvp Product RED.png
│       │       │   Mvp Product.png
│       │       │   Size Guide.png
│       │       │
│       │       ├───hoodie
│       │       │       black back.png
│       │       │       black front.png
│       │       │       blue back.jpg
│       │       │       blue front.jpg
│       │       │       darkbrown back.jpg
│       │       │       darkbrown front.jpg
│       │       │       green army back.jpg
│       │       │       green army front.jpg
│       │       │       sage back.jpg
│       │       │       sage front.jpg
│       │       │
│       │       ├───showcase
│       │       │       all collections.png
│       │       │       black.png
│       │       │       cream.png
│       │       │       green.png
│       │       │       sage.png
│       │       │       white.png
│       │       │
│       │       ├───tshirt black
│       │       │       back.jpg
│       │       │       front.jpg
│       │       │       Snapinsta.app_453280628_802748104998549_8744615817919291688_n_1080.jpg
│       │       │       Snapinsta.app_453393985_503826938708308_496481487401315919_n_1080.jpg
│       │       │
│       │       ├───tshirt blue
│       │       │       back.jpg
│       │       │       front.jpg
│       │       │       Snapinsta.app_446203903_282381954866480_6928208571540710250_n_1080.jpg
│       │       │       Snapinsta.app_446336190_1430003664547747_4450536794077096967_n_1080.jpg
│       │       │
│       │       ├───tshirt brown
│       │       │       backl.jpg
│       │       │       front.jpg
│       │       │
│       │       ├───tshirt charchoal
│       │       │       back.jpg
│       │       │       front.jpg
│       │       │
│       │       ├───tshirt cream
│       │       │       back.jpg
│       │       │       front .jpg
│       │       │
│       │       ├───tshirt green
│       │       │       back.jpg
│       │       │       front .jpg
│       │       │       Snapinsta.app_449289946_348126628308274_216341083194588333_n_1080.jpg
│       │       │       Snapinsta.app_449364512_383273398088093_1141582855916177912_n_1080.jpg
│       │       │
│       │       ├───tshirt orange
│       │       │       back.jpg
│       │       │       front .jpg
│       │       │       Snapinsta.app_449502707_1630814214367370_7685554859299244820_n_1080.jpg
│       │       │       Snapinsta.app_449604718_330880110041498_7728777926761481565_n_1080.jpg
│       │       │
│       │       ├───tshirt red
│       │       │       back.jpg
│       │       │       front.jpg
│       │       │
│       │       ├───tshirt white
│       │       │   ├───1
│       │       │   │       back.jpg
│       │       │   │       front.jpg
│       │       │   │       Snapinsta.app_449845879_865713138937807_6369977752730826871_n_1080.jpg
│       │       │   │       Snapinsta.app_450451361_1934901196963745_5730862200869158526_n_1080.jpg
│       │       │   │
│       │       │   ├───2
│       │       │   │       asdasdSnapinsta.app_453630786_835110295383485_2507957606905011186_n_1080.jpg
│       │       │   │       back.jpg
│       │       │   │       front.jpg
│       │       │   │       Snapinsta.app_453630786_835110295383485_2507957606905011186_n_1080.jpg
│       │       │   │
│       │       │   └───3
│       │       │           back.jpg
│       │       │           front.jpg
│       │       │           Snapinsta.app_452528308_518519754031599_1540479909316228227_n_1080.jpg
│       │       │           Snapinsta.app_452926799_1004734664712625_3205375846147657193_n_1080.jpg
│       │       │
│       │       └───tshirt yellow
│       │               back.jpg
│       │               front.jpg
│       │
│       └───Logo
│               TOMO LOGOS NOBG.png
│               TOMO LOGOS.png
│
└───styles
        About.css
        CardProduct.css
        CategoryHodie.css
        CategoryTshirt.css
        Feedback.css
        Footer.css
        ForgotPassword.css
        FormLogin.css
        FormRegistration.css
        main.css
        Navbar.css
        PrivacyPolicy.css
        QuickView.css
        Shoppingandreturnpolicy.css
        ShowcaseMVP.css
        SizeGuide.css

## PRODUCT IMAGE SOURCE 
- IG: https://www.instagram.com/snazzyflip.std/ 




**Features**
- Modular Components: Setiap komponen frontend seperti navbar, footer, dan produk dikembangkan secara modular.
- Kategori Produk: Produk dikategorikan berdasarkan tipe (hoodie, t-shirt) untuk memudahkan navigasi.
- Quick View: Fitur quick view untuk melihat detail produk tanpa harus berpindah halaman.
- Form Login dan Registrasi: Fitur otentikasi dengan formulir login dan registrasi.
- Panduan Ukuran dan Kebijakan Pengembalian: Informasi lengkap mengenai ukuran produk dan kebijakan     pengembalian.
- Address Shipping Locatio
 
**Installation**
1. Clone repository ini:
    https://github.com/9riffegndi/Pre-order-ClotingBrand-.git
2. Buka folder proyek di text editor favorit Anda.
3. Jalankan website secara lokal dengan membuka file IndexMVP.html di browser.


*License*
- Project ini menggunakan lisensi MIT.


## thx
