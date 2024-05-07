export default function NoSearchResult(keyword) {
  return `
    <div class="no-search-result-wrap">
        <img src="img/sad_emogi.png" class="no-search-result-img" />
        <p class="no-search-result-text">${keyword}에 대한 검색 결과가 없습니다.</p>
        <p class="no-search-result-text">다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요.</p>
    </div>
    `;
}
