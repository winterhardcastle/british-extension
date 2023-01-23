const translations = {
  upset: "gutted",
  happy: "chuffed",
  tired: "knackered",
  very: "bloody",
  attractive: "fit",
  elevator: "lift",
  apartment: "flat",
  bathroom: "loo",
  trash: "rubbish",
  dumpster: "skip",
  pants: "trousers",
  pharmacy: "chemist",
  truck: "lorry",
  stroller: "buggy",
  diaper: "nappy",
  drunk: "pissed",
  cart: "trolley",
  sneakers: "trainers",
  gas: "petrol",
  vacation: "holiday",
  handled: "sorted",
  trunk: "boot",
  fries: "chips",
  chips: "crisps",
  zucchini: "courgette",
  eggplant: "aubergine",
  cilantro: "coriander",
  arugula: "rocket",
  beet: "beetroot",
  oatmeal: "porridge",
  popsicle: "ice lolly",
  dessert: "pudding",
  candy: "sweets",
  ordinary: "bog standard",
  cookie: "biscuit",
  windshield: "windscreen",
  booger: "bogey",
  man: "bloke",
  awesome: "ace",
  color: "colour",
  soccer: "football",
  math: "maths",
  bath: "bathtub",
  uniform: "kit",
  behavior: "behaviour",
  meter: "metre",
  college: "university",
  cleats: "boots",
};

String.prototype.replaceArray = function (find, replace) {
  let replaceString = this;
  let regex;
  for (let i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "gi");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

const keys = Object.keys(translations);
const values = Object.values(translations);

const replacer = () => {
  const allNodes = document.getElementsByTagName("*");
  for (let i = 0; i < allNodes.length; i++) {
    const element = allNodes[i];
    for (let j = 0; j < element.childNodes.length; j++) {
      let node = element.childNodes[j];
      if (node.nodeType === 3) {
        let text = node.nodeValue;
        let replacedText = text.replaceArray(keys, values);
        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
};

window.onload = replacer;
