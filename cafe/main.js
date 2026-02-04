document.getElementById('menu-toggle').addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Mensaje enviado con éxito!');
        });

  (function(d,t) {
    var BASE_URL="https://fulgid-unisomeric-marylee.ngrok-free.dev:3000";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.nautoConsoleSDK.run({
        websiteToken: 'NC2djJyq3ZykX41x1H59Lixb',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
