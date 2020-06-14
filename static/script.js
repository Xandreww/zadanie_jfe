import channels from "./channels.js";
import toImperialNotation from "./functions/toImperialNotation.js";
import loadContent from "./functions/loadContent.js";
import addEventListeners from "./functions/addEventListeners.js";

window.onload = () => {
  loadContent(toImperialNotation(channels));
};

// const addEventListeners = () => {
//   const title = document.getElementById("title");
//   const subscribers = document.getElementById("subscribers");
//   const videos = document.getElementById("videos");
//   const views = document.getElementById("views");

//   title.addEventListener("change", () => {
//     console.log("Sort by title");
//   });

//   subscribers.addEventListener("change", () => {
//     console.log("Sort by subscribers");
//     sortBySubs(channels);
//   });

//   videos.addEventListener("change", () => {
//     console.log("Sort by videos");
//   });

//   views.addEventListener("change", () => {
//     console.log("Sort by views");
//   });

//   const prepareNumbers = (x) => {
//     return parseInt(x.replace(/[., ]/g, ""));
//   };

//   const sortBySubs = (array) => {
//     let sortedBySubs = [...array];
//     sortedBySubs.sort((a, b) => {
//       return (
//         prepareNumbers(b.statistics.subscriberCount) -
//         prepareNumbers(a.statistics.subscriberCount)
//       );
//     });

//     loadContent(sortedBySubs);
//   };
// };

addEventListeners();
