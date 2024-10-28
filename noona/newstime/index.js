const apiKey = `b601dc8f4ca74300ae27c7d99e388c8d`;
let newsList = [];
const menus = document.querySelectorAll(".tab button");
const searchBtn = document.querySelector(".search button");
let url;
let totalResults = 0;
let page = 1;
const pageSize = 10;
const groupSize = 5;

menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByCategory(event))
);

searchBtn.addEventListener("click", () => getNewsByKeyword());

let getNews = () => {
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("오류");
      }
      return response.json();
    })
    .then((data) => {
      if (data.articles.length === 0) {
        document.querySelector(".pagiNation-wrap").style.display = "none";
        throw new Error("검색된 내용이 없습니다.");
      } else {
        document.querySelector(".pagiNation-wrap").style.display = "block";
        newsList = data.articles;
        console.log(newsList);
        totalResults = data.totalResults;
        render();
        paginationRender();
      }
    })
    .catch((error) => {
      errorRender(error.message);
    });
};

// const getNews = async () => {
//   try {
//     url.searchParams.set("page", page);
//     url.searchParams.set("pageSize", pageSize);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     if (response.status == 200) {
//       if (data.articles.length === 0) {
//         throw new Error("검색된 내용이 없습니다.");
//       }
//       newsList = data.articles;
//       totalResults = data.totalResults;
//       render();
//       paginationRender();
//     } else {
//       throw new Error(data.message);
//     }
//   } catch (error) {
//     errorRender(error.message);
//   }
// };

const getLatestNews = () => {
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  getNews();
};

const getNewsByCategory = (event) => {
  let category = event.target.textContent.toLowerCase();
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
  );
  getNews();
};

const getNewsByKeyword = () => {
  let keyWord = document.querySelector(".search input").value;
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&q=${keyWord}&apiKey=${apiKey}`
  );
  getNews();
  document.querySelector(".search input").value = "";
};

const render = () => {
  const renderTarget = document.querySelector(".newsArea");
  const newsHTML = newsList
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
  renderTarget.innerHTML = newsHTML;
};

const errorRender = (msg) => {
  const renderTarget = document.querySelector(".newsArea");
  const errorHtml = `<div>
                        ${msg}
                    </div>`;
  renderTarget.innerHTML = errorHtml;
};

const paginationRender = () => {
  // totalResult
  // page
  // pageSize
  // groupSize

  // pageGroup
  const pageGroup = Math.ceil(page / groupSize);
  // lastPage
  let lastPage = pageGroup * groupSize;
  // firstPage
  const firstPage =
    lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
  // totalPages
  const totalPages = Math.ceil(totalResults / pageSize);

  let paginationHtml = `<li><a href="javascript:;" onclick="movePage(${
    page - 1
  })">이전</a></li>`;

  // 마지막 페이징이 pageGroup보다 작을 경우
  if (lastPage > totalPages) {
    lastPage = totalPages;
  }

  for (let i = firstPage; i <= lastPage; i++) {
    paginationHtml += `<li><a href="javascript:;" onclick="movePage(${i})">${i}</a></li>`;
  }
  paginationHtml += `<li><a href="javascript:;" onclick="movePage(${
    page + 1
  })">다음</a></li>`;
  document.querySelector(".pagiNation").innerHTML = paginationHtml;
};

const movePage = (pageNum) => {
  page = pageNum;
  getNews();
};

getLatestNews();
