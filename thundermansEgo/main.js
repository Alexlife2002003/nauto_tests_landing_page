document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                console.log('CTA clicked:', this.textContent);
            });
        });

(function(d,t){
      var BASE_URL="https://fulgid-unisomeric-marylee.ngrok-free.dev";
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function() {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: 'JwivGvHoav5RpDzZznbbQDnE',
            baseUrl: BASE_URL
          });
        }
      };
    })(document, "script");
