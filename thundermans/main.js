function smoothScroll(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
            console.log(`CTA clicked: ${targetId}`);
        }
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', smoothScroll);
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