import useMovieSearchData from "./hook/useMovieSearchData.js";

const { getSearchedMoviesData } = useMovieSearchData();

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchInput.addEventListener("change", async (e) => {
  const searchedData = await getSearchedMoviesData(1, e.target.value);
  if (searchedData.length) {
    sessionStorage.setItem(
      "searchedMovie",
      JSON.stringify({
        keyword: e.target.value,
        data: searchedData,
      })
    );
  } else {
    sessionStorage.setItem(
      "searchedMovie",
      JSON.stringify({
        keyword: e.target.value,
        data: [],
      })
    );
  }
  location.href = "search.html";
});

searchBtn.addEventListener("click", async () => {
  const value = searchInput.target.value;
  const searchedData = await getSearchedMoviesData(1, value);
  if (searchedData.length) {
    sessionStorage.setItem(
      "searchedMovie",
      JSON.stringify({
        keyword: value,
        data: searchedData,
      })
    );
  } else {
    sessionStorage.setItem(
      "searchedMovie",
      JSON.stringify({
        keyword: value,
        data: [],
      })
    );
  }
  location.href = "search.html";
});
