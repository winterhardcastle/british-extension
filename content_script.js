import translations from "./translations";

chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js");
      replacer();
      // ----------------------------------------------------------
    }
  }, 10);
});

const replacer = () => {
  const allNodes = document.getElemenentsByTagName("*");
  for (let i = 0; i < allNodes.length; i++) {
    for (let j = 0; j < translations.length; j++) {
      allNodes[i].innerHTML.replace(translations[j]);
    }
  }
  return allNodes;
};
