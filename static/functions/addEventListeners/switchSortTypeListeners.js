export let sortByAsc = false;

export const switchSortTypeListeners = () => {
  const buttonDesc = document.getElementById("desc");
  const buttonAsc = document.getElementById("asc");

  buttonDesc.addEventListener("click", () => {
    console.log("click!");
    if (sortByAsc === true) {
      return (sortByAsc = false);
    }
  });

  buttonAsc.addEventListener("click", () => {
    console.log("click!");
    if (sortByAsc === false) {
      return (sortByAsc = true);
    }
  });
};
