import channels from "../../channels.js";
import loadContent from "../loadContent.js";
import toImperialNotation from "../toImperialNotation.js";
import {
  sortBySubs,
  sortByVideos,
  sortByViews,
  sortByTitle,
  sortWithInput,
} from "../sort.js";

const addSortListeners = () => {
  const input = document.getElementById("input");
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

  let sortByAsc = false;

  input.addEventListener("input", () => {
    let filter = input.value.toUpperCase();
    loadContent(sortWithInput(channels, filter));
  });

  title.addEventListener("change", () => {
    if (titleButton.checked === true) {
      sortByTitle(channels, sortByAsc);
    }
  });

  subscribers.addEventListener("change", () => {
    if (subscribersButton.checked === true) {
      sortBySubs(channels, sortByAsc);
    }
  });

  videos.addEventListener("change", () => {
    if (videosButton.checked === true) {
      sortByVideos(channels, sortByAsc);
    }
  });

  views.addEventListener("change", () => {
    if (viewsButton.checked === true) {
      sortByViews(channels, sortByAsc);
    }
  });

  clear.addEventListener("click", () => {
    for (let sortButton of sortButtons) {
      sortButton.checked = false;
    }
    input.value = "";
    loadContent(toImperialNotation(channels));
  });
};

export default addSortListeners;
