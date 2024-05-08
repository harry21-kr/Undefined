import MoviesInfo from "../main/components/MoviesInfo.js";
import addSearchEvent from "./addSearchEvent.js";
import NoSearchResult from "./components/NoSearchResult.js";

const searchResultWrap = document.getElementById("search-result-wrap");
const searchResultTitle = document.getElementById("search-result-title");
const searchResultSelect = document.getElementById("search-result-select");

const searchedMovieData = JSON.parse(sessionStorage.getItem("searchedMovie"));
const element = searchedMovieData.data.length
  ? MoviesInfo(searchedMovieData.data)
  : NoSearchResult(searchedMovieData.keyword);

searchResultWrap.innerHTML = element;
searchResultTitle.innerText = `${searchedMovieData.keyword}의 검색 결과 (${searchedMovieData.data.length}건)`;

searchResultSelect.addEventListener("change", (e) => {
  if (e.target.value === "rating") {
    const items = JSON.parse(sessionStorage.getItem("searchedMovie"));
    items.data.sort((a, b) => b.vote_average - a.vote_average);
    sessionStorage.setItem("searchedMovie", JSON.stringify(items));
    const element = MoviesInfo(
      JSON.parse(sessionStorage.getItem("searchedMovie")).data
    );
    searchResultWrap.innerHTML = element;
    searchResultTitle.innerText = `${searchedMovieData.keyword}의 검색 결과 (${searchedMovieData.data.length}건)`;
    return;
  }

  if (e.target.value === "popular") {
    const items = JSON.parse(sessionStorage.getItem("searchedMovie"));
    items.data.sort((a, b) => b.popularity - a.popularity);
    sessionStorage.setItem("searchedMovie", JSON.stringify(items));
    const element = MoviesInfo(
      JSON.parse(sessionStorage.getItem("searchedMovie")).data
    );
    searchResultWrap.innerHTML = element;
    searchResultTitle.innerText = `${searchedMovieData.keyword}의 검색 결과 (${searchedMovieData.data.length}건)`;
    return;
  }
});

addSearchEvent();
