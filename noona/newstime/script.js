const apiKey = `b601dc8f4ca74300ae27c7d99e388c8d`;
let categoryBtn = document.querySelectorAll(".tab button");
let keywordBtn = document.querySelector(".search button");
let url;
let newsList = [];
let pageSize = 10;
let page = 1;

categoryBtn.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    getCategoryNews(event);
  });
});

let getNews = async () => {
  url.searchParams.set('page', page);
  url.searchParams.set('pageSize', pageSize);
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
}


let getLatestNews = async () => {
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`
  );
  getNews();
};

let getCategoryNews = async (event) => {
  let category = event.target.innerHTML.toLowerCase();
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${apiKey}`
  );
  getNews();
};

let getKeywordNews = async () => {
  let keyword = document.querySelector(".search input");
  if (keyword.value.length !== 0) {
    url = new URL(
      `https://newsapi.org/v2/top-headlines?country=kr&q=${keyword.value}&apiKey=${apiKey}`
    );
    getNews();
  } else {
    alert("검색어 입력");
    keyword.focus();
  }
  keyword.value = "";
};

let render = () => {
  let renderTarget = document.querySelector(".newsArea");
  let resultHtml = "";
  resultHtml += newsList
    .map(
      (item) => `
        <div class="news">
            <a href="${item.url}">
                <div class="newsImg">
                    <img src="${item.urlToImage}" alt="">
                </div>
                <div class="newsTxt">
                    <p>${item.title}</p>
                    <p>${item.description}</p>
                    <p>${item.publishedAt}</p>
                </div>
            </a>
        </div>
    `
    )
    .join("");
  renderTarget.innerHTML = resultHtml;
};

keywordBtn.addEventListener("click", getKeywordNews);

getLatestNews();
