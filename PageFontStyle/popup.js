
const setLangInfo = info => {
    document.getElementById('pageLanguage').textContent = info.pageLanguage;
  };
  
  // Once the DOM is ready...
  window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'LanguageInfo'},
          // ...also specifying a callback to be called 
          //    from the receiving end (content script).
          setLangInfo);
    });
  });


$(function () {
    $('#btnChange').click(function () {
        var selectedLang = $('#selectedLang').val();
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "changeLanguage", selectedLang: selectedLang });
        });
    });
});

