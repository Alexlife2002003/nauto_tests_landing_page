  (function(d,t) {
    var BASE_URL="https://fulgid-unisomeric-marylee.ngrok-free.dev:3000";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'JwivGvHoav5RpDzZznbbQDnE',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");

