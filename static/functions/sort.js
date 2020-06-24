import loadContent from "./loadContent.js";

const prepareNumbers = (x) => {
  return parseInt(x.replace(/[., ]/g, ""));
};

export const sortBySubs = (array, sortByAsc) => {
  let sortedBySubs = [...array];
  sortedBySubs.sort((a, b) => {
    if (!sortByAsc) {
      return (
        prepareNumbers(b.statistics.subscriberCount) -
        prepareNumbers(a.statistics.subscriberCount)
      );
    } else {
      return (
        prepareNumbers(a.statistics.subscriberCount) -
        prepareNumbers(b.statistics.subscriberCount)
      );
    }
  });

  loadContent(sortedBySubs);
};

export const sortByVideos = (array, sortByAsc) => {
  let sortedByVideos = [...array];
  sortedByVideos.sort((a, b) => {
    if (!sortByAsc) {
      return (
        prepareNumbers(b.statistics.videoCount) -
        prepareNumbers(a.statistics.videoCount)
      );
    } else {
      return (
        prepareNumbers(a.statistics.videoCount) -
        prepareNumbers(b.statistics.videoCount)
      );
    }
  });

  loadContent(sortedByVideos);
};

export const sortByViews = (array, sortByAsc) => {
  let sortedByViews = [...array];
  sortedByViews.sort((a, b) => {
    if (!sortByAsc) {
      return (
        prepareNumbers(b.statistics.viewCount) -
        prepareNumbers(a.statistics.viewCount)
      );
    } else {
      return (
        prepareNumbers(a.statistics.viewCount) -
        prepareNumbers(b.statistics.viewCount)
      );
    }
  });

  loadContent(sortedByViews);
};

export const sortByTitle = (array, sortByAsc) => {
  let sortedByTitle = [...array];
  sortedByTitle.sort((a, b) => {
    var nameA = a.title.toUpperCase();
    var nameB = b.title.toUpperCase();
    if (!sortByAsc) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    } else {
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    }
  });

  loadContent(sortedByTitle);
};

export const sortWithInput = (arr, query) => {
  let cloneArr = [...arr];
  return cloneArr.filter(
    (el) => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};
