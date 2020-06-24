import channels from "./channels.js";
import toImperialNotation from "./functions/toImperialNotation.js";
import loadContent from "./functions/loadContent.js";
import addSortListeners from "./functions/addEventListeners/addSortListeners.js";
import { switchSortTypeListeners } from "./functions/addEventListeners/switchSortTypeListeners.js";

window.onload = () => {
  loadContent(toImperialNotation(channels));
};

addSortListeners();
switchSortTypeListeners();
