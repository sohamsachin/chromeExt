var s1 = document.createElement('script');
s1.src = chrome.extension.getURL('myscript.js');
(document.head||document.documentElement).appendChild(s1);
s1.onload = function() {
    s1.parentNode.removeChild(s1);
};

var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('translate.js');
(document.head||document.documentElement).appendChild(s2);
s2.onload = function() {
    s2.parentNode.removeChild(s2);
};

