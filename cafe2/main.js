document.getElementById('menu-toggle').onclick = function () {
            var menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        };

        document.querySelector('form').onsubmit = function (e) {
            e.preventDefault();
            alert('Mensaje enviado con éxito.');
        };

(function(d,t){
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.async=true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken:"vdTKwXXuTyNw7QujBGyQ7K8n",
            baseUrl:BASE_URL
          });
        }
      };
    })(document,"script");