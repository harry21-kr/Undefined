import useMovieSearchData from "./hook/useMovieSearchData.js";

const { getSearchedMoviesData } = useMovieSearchData();

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("change", async (e) => {
  const searchedData = await getSearchedMoviesData(1, e.target.value);
  if (searchedData.length) {
    sessionStorage.setItem("searchedMovie", JSON.stringify(searchedData));
  }
  location.href = "search.html";
});
