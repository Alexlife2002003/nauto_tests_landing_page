function smoothScroll(target) {
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
        function logClick(event) {
            console.log(event.target.innerText + ' clicked');
        }

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