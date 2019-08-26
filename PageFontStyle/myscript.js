function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "google_translate_element");
  // add the newly created element into the DOM 
  document.body.appendChild(newDiv); 
}

addElement();

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'auto',
      autoDisplay: false,
      includedLanguages: 'en,hi,de,fr,ar',
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
  }


  document.addEventListener('yourCustomEvent', function (e) {
    var data = e.detail;
    changeLanguageTo(data.selectedLang);
  });

  function changeLanguageTo(newLang) {
    var selectField = document.querySelector("#google_translate_element select");
    console.log(selectField);
    for(var i=0; i < selectField.children.length; i++){
      var option = selectField.children[i];
      // find desired langauge and change the former language of the hidden selection-field 
      if(option.value == newLang){
          console.log(option);
         selectField.selectedIndex = i;
         // trigger change event afterwards to make google-lib translate this side
         selectField.dispatchEvent(new Event('change'));
         break;
      }
    }
  }