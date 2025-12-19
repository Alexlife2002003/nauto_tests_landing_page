(function(d,t){
      var BASE_URL="https://console-test.nauto.la";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.async=true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken:"tKZckESgRozZCxUfsFZMPxgo",
            baseUrl:BASE_URL
          });
        }
      };
    })(document,"script");