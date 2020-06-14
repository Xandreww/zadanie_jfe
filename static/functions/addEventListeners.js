import channels from "../channels.js";
import loadContent from "../functions/loadContent.js";
import toImperialNotation from "../functions/toImperialNotation.js";
import {
  sortBySubs,
  sortByVideos,
  sortByViews,
  sortByTitle,
  sortWithInput,
} from "./sort.js";

const addEventListeners = () => {
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
  const buttonDesc = document.getElementById("desc");
  const buttonAsc = document.getElementById("asc");
  const clear = document.getElementById("clear");

  let sortByAsc = null;

  const simulateClick = (elem) => {
    var evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    let cancelled = !elem.dispatchEvent(evt);
  };

  input.addEventListener("input", () => {
    let filter = input.value.toUpperCase();
    loadContent(sortWithInput(channels, filter));
  });

  title.addEventListener("change", () => {
    if (titleButton.checked === true) {
      if (sortByAsc === null) {
        simulateClick(buttonDesc);
        buttonDesc.focus();
        sortByAsc = false;
      }
      sortByTitle(channels, sortByAsc);
    }
  });

  subscribers.addEventListener("change", () => {
    if (subscribersButton.checked === true) {
      if (sortByAsc === null) {
        simulateClick(buttonDesc);
        buttonDesc.focus();
        sortByAsc = false;
      }
      sortBySubs(channels, sortByAsc);
    }
  });

  videos.addEventListener("change", () => {
    if (videosButton.checked === true) {
      if (sortByAsc === null) {
        simulateClick(buttonDesc);
        buttonDesc.focus();
        sortByAsc = false;
      }
      sortByVideos(channels, sortByAsc);
    }
  });

  views.addEventListener("change", () => {
    if (viewsButton.checked === true) {
      if (sortByAsc === null) {
        simulateClick(buttonDesc);
        buttonDesc.focus();
        sortByAsc = false;
      }
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

  buttonDesc.addEventListener("click", () => {
    if (sortByAsc === true) {
      sortByAsc = false;
    }

    for (let sortButton of sortButtons) {
      if (sortButton.checked === true) {
        if (sortByAsc === false) {
          const sortBy = sortButton.id;
          switch (sortBy) {
            case "sort-title":
              sortByTitle(channels, sortByAsc);
            case "sort-subscribers":
              sortBySubs(channels, sortByAsc);
            case "sort-videos":
              sortByVideos(channels, sortByAsc);
            case "sort-views":
              sortByViews(channels, sortByAsc);
          }
        }
      }
    }
  });

  buttonAsc.addEventListener("click", () => {
    if (sortByAsc === false) {
      sortByAsc = true;
    }

    for (let sortButton of sortButtons) {
      if (sortButton.checked === true) {
        if (sortByAsc === true) {
          const sortBy = sortButton.id;
          switch (sortBy) {
            case "sort-title":
              sortByTitle(channels, sortByAsc);
            case "sort-subscribers":
              sortBySubs(channels, sortByAsc);
            case "sort-videos":
              sortByVideos(channels, sortByAsc);
            case "sort-views":
              sortByViews(channels, sortByAsc);
          }
        }
      }
    }
  });
};

export default addEventListeners;
