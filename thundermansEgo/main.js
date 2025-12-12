document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                console.log('CTA clicked:', this.textContent);
            });
        });


  (function(d,t) {
    var BASE_URL="https://console-test.nauto.la";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'intT26gP7CRipRpaGqm7TYaM',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");


