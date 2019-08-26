
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction")
    {
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }

   /* if (request.todo == "changeLanguage")
    {
        chrome.cookies.set({
            "name": "googtrans",
            "url": request.url,
            "value": request.newLang,
            "path": request.path
        }, function (cookie) {
            console.log(JSON.stringify(cookie));
        });
    }*/
});








