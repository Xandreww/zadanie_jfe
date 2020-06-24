export const switchSortTypeListeners = () => {
  const buttonDesc = document.getElementById("desc");
  const buttonAsc = document.getElementById("asc");

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

export default switchSortTypeListeners;
