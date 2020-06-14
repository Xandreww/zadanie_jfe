import loadContent from "./loadContent.js";

const prepareNumbers = (x) => {
  return parseInt(x.replace(/[., ]/g, ""));
};

export const sortBySubs = (array) => {
  let sortedBySubs = [...array];
  sortedBySubs.sort((a, b) => {
    return (
      prepareNumbers(b.statistics.subscriberCount) -
      prepareNumbers(a.statistics.subscriberCount)
    );
  });

  loadContent(sortedBySubs);
};

export const sortByVideos = (array) => {
  let sortedByVideos = [...array];
  sortedByVideos.sort((a, b) => {
    return (
      prepareNumbers(b.statistics.videoCount) -
      prepareNumbers(a.statistics.videoCount)
    );
  });

  loadContent(sortedByVideos);
};

export const sortByViews = (array) => {
  let sortedByViews = [...array];
  sortedByViews.sort((a, b) => {
    return (
      prepareNumbers(b.statistics.viewCount) -
      prepareNumbers(a.statistics.viewCount)
    );
  });

  loadContent(sortedByViews);
};

export const sortByTitle = (array) => {
  let sortedByTitle = [...array];
  sortedByTitle.sort((a, b) => {
    var nameA = a.title.toUpperCase();
    var nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  loadContent(sortedByTitle);
};

export const sortWithInput = (arr, query) => {
  let cloneArr = [...arr];
  return cloneArr.filter(
    (el) => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};
