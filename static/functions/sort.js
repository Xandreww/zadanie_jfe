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
