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
export let sortByAsc = false;

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
  const clear = document.getElementById("clear");
  const buttonDesc = document.getElementById("desc");
  const buttonAsc = document.getElementById("asc");
  const sortButtons = [
    titleButton,
    subscribersButton,
    videosButton,
    viewsButton,
  ];

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

  buttonDesc.addEventListener("click", () => {
    if (sortByAsc === true) {
      let checked = sortButtons.filter(
        (sortButton) => sortButton.checked === true
      );

      sortByAsc = false;
      const sortBy = checked[0].id;

      switch (sortBy) {
        case "sort-title":
          sortByTitle(channels, sortByAsc);
          break;
        case "sort-subscribers":
          sortBySubs(channels, sortByAsc);
          break;
        case "sort-videos":
          sortByVideos(channels, sortByAsc);
          break;
        case "sort-views":
          sortByViews(channels, sortByAsc);
          break;
      }
      return sortByAsc;
    }
  });

  buttonAsc.addEventListener("click", () => {
    if (sortByAsc === false) {
      let checked = sortButtons.filter(
        (sortButton) => sortButton.checked === true
      );

      sortByAsc = true;
      const sortBy = checked[0].id;

      switch (sortBy) {
        case "sort-title":
          sortByTitle(channels, sortByAsc);
          break;
        case "sort-subscribers":
          sortBySubs(channels, sortByAsc);
          break;
        case "sort-videos":
          sortByVideos(channels, sortByAsc);
          break;
        case "sort-views":
          sortByViews(channels, sortByAsc);
          break;
      }
      return sortByAsc;
    }
  });
};

export default addSortListeners;
