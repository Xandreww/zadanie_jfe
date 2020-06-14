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
