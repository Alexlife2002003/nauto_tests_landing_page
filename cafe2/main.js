document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.querySelector('nav div.md\\:flex');
            menu.classList.toggle('hidden');
        });

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('form-message').classList.remove('hidden');
            this.reset();
        });

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