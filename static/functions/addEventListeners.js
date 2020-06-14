import channels from "../channels.js";
import loadContent from "../functions/loadContent.js";
import toImperialNotation from "../functions/toImperialNotation.js";

const addEventListeners = () => {
  const title = document.getElementById("title");
  const titleButton = document.getElementById("sort-title");
  const subscribers = document.getElementById("subscribers");
  const subscribersButton = document.getElementById("sort-subscribers");
  const videos = document.getElementById("videos");
  const videosButton = document.getElementById("sort-videos");
  const views = document.getElementById("views");
  const viewsButton = document.getElementById("sort-views");
  const sortButtons = [
    titleButton,
    subscribersButton,
    videosButton,
    viewsButton,
  ];
  const clear = document.getElementById("clear");

  title.addEventListener("change", () => {
    console.log("Sort by title");
  });

  subscribers.addEventListener("change", () => {
    if ((subscribersButton.checked = true)) {
      console.log("Sort by subscribers");
      sortBySubs(channels);
    }
  });

  videos.addEventListener("change", () => {
    console.log("Sort by videos");
  });

  views.addEventListener("change", () => {
    console.log("Sort by views");
  });

  clear.addEventListener("click", () => {
    for (let sortButton of sortButtons) {
      sortButton.checked = false;
    }
    loadContent(toImperialNotation(channels));
  });

  const prepareNumbers = (x) => {
    return parseInt(x.replace(/[., ]/g, ""));
  };

  const sortBySubs = (array) => {
    let sortedBySubs = [...array];
    sortedBySubs.sort((a, b) => {
      return (
        prepareNumbers(b.statistics.subscriberCount) -
        prepareNumbers(a.statistics.subscriberCount)
      );
    });

    loadContent(sortedBySubs);
  };
};

export default addEventListeners;
