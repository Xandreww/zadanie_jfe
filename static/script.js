import channels from "./channels.js";
import toImperialNotation from "./functions/toImperialNotation.js";
import loadContent from "./functions/loadContent.js";
import addEventListeners from "./functions/addEventListeners.js";

window.onload = () => {
  loadContent(toImperialNotation(channels));
};

addEventListeners();
