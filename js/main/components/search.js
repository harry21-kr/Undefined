import { API_KEY, TMDB_API_URL } from "../../config/constants/index.js";

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const inputText = searchInput.value;
  console.log(inputText);
  location.href = `/searchList.html?inputText=${inputText}`;
  // localhost:5500/index.html -> localhost:5500/searchList.html?inputText=범죄도시
  // click.preventDefault();
});

// =========================================================================
// #여기 아래부터 : 튜터님과 함께 한 작업
// #드문드문 구멍난 나의 기억력.... 잘 모르는 부분은 '여기!'로 주석처리

// 1. 페이지 진입 시 영화 API 조회 - 세 서버의 데이터 가져오기
const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
  getPopularMovies(1),
  getTopRatedMovies(1),
  getUpcomingMovies(1),
]);

// 2. url에서 검색어 가져오기
const url = new URL(window.location.href);
const searchParams = url.serachPrams; // 여기!
const 검색어 = searchParams.get("key"); // 여기!

//3. inputText로 영화 데이터 제목을 필터링
movieData.filter((movie) => {
  if (movie.title.includes(검색어)) return true;
  return false;
});

// 4. 필터링 된 영화데이터를 화면에 그려주기
// 4-1. movieData

const movieListWrapper = document.querySelector(".movieList");
let html = ""; // 여기!
movieData.forEach((movie) => {
  html = html + "<div>${movie.title}</div>";
});
movieListWrapper.innerHtml = html;

// 4-2. 영화가 없을 때
movieListWrapper.innerHtml = "검색결과가 없습니다.";
