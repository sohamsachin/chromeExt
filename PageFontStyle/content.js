
/*var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
};

function checkFirstVisit() {
    if(document.cookie.indexOf('mycookie')==-1) {
      // cookie doesn't exist, create it now
      document.cookie = 'mycookie=1';
    }
    else {
        delete_cookie("googtrans");
      //alert('You refreshed!');
    }
}

  checkFirstVisit();*/
chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request.todo == "changeLanguage") {
        var selectedLang =  request.selectedLang;
       
    /*    chrome.runtime.sendMessage({
            todo: "changeLanguage",
            url: window.location.protocol + "//" + window.location.hostname,
            newLang: '/en/'+ selectedLang,
            path: "/"
        });*/

        //changeLanguageTo(selectedLang);
        //location.href="javascript:changeLanguageTo("+selectedLang+"); void 0";

      /*  var injectedCode = '(' + function() {
            alert(selectedLang);
            changeLanguageTo(selectedLang);
         
         } + ')();';
         
         var script = document.createElement('script');
         script.textContent = injectedCode;
         (document.head || document.documentElement).appendChild(script);
         script.parentNode.removeChild(script);*/
         var data = {
            selectedLang: selectedLang
          };

          document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
    }
});


chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'LanguageInfo')) {
      var domInfo = {
        pageLanguage : document.documentElement.lang,
      };
  
      // Directly respond to the sender (popup), 
      // through the specified callback.
      response(domInfo);
    }
  });