var textAreaToTranslate = document.querySelector(".textAreaToTranslate");

var btnTranslate = document.querySelector(".translateButton");

var translatedTextArea = document.querySelector(".translatedTextArea");

var Url = "https://api.funtranslations.com/translate/valyrian";

function getTranslationURL(text) {
  return Url + "?" + "text=" + text;
}

function clickHandler() {
  var userInput = textAreaToTranslate.value;
  console.log(userInput);
  fetch(getTranslationURL(userInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      translatedTextArea.innerText = translatedText;
      console.log(translatedText);
      console.log(translatedTextArea.value);
    });
}

btnTranslate.addEventListener("click", clickHandler);
