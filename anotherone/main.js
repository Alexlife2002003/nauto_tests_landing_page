document.addEventListener('DOMContentLoaded', function() {
            const ctas = document.querySelectorAll('.cta');
            ctas.forEach(cta => {
                cta.addEventListener('click', () => {
                    console.log('CTA principal clicado');
                });
            });
            const scrollLinks = document.querySelectorAll('a[href^="#"]');
            scrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
                });
            });
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