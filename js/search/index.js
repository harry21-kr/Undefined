import MoviesInfo from "../main/components/MoviesInfo.js";
import NoSearchResult from "./components/NoSearchResult.js";

const searchResultWrap = document.getElementById("search-result-wrap");
const searchResultTitle = document.getElementById("search-result-title");

const searchedMovieData = JSON.parse(sessionStorage.getItem("searchedMovie"));
const element = searchedMovieData.data.length
  ? MoviesInfo(searchedMovieData.data)
  : NoSearchResult(searchedMovieData.keyword);

searchResultWrap.innerHTML = element;
searchResultTitle.innerText = `${searchedMovieData.keyword}의 검색 결과 (${searchedMovieData.data.length}건)`;
