const apiKey = `b601dc8f4ca74300ae27c7d99e388c8d`;
let newsList = new Array();
const listSizeSet = document.querySelector(".pageSizeChange select");
let totalResults = 0;
let pageSize = 10;
let groupSize = 5;
let page = 1;

const listSizeChange = (event) => {
  pageSize = event.target.value;
  getNews();
}

const render = () => {
  const renderTarget = document.querySelector(".newsList");
  let resultHtml = ``;
  resultHtml += newsList.map((itme, index) => `
    <div class="newsItem">
      <a href="${itme.url}" target="_blank">
        <p><img src="${itme.urlToImage}" alt="" onerror="this.src='https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg'"></p>
        <div>
          <p class="tit">${itme.title}</p>
          <p class="publishedAt">${itme.publishedAt}</p>
        </div>
      </a>
    </div>
  `).join("");
  renderTarget.innerHTML = resultHtml;
}

const getNews = async (page) => {
  const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);
  url.searchParams.set('pageSize', pageSize);
  url.searchParams.set('page', page);
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  totalResults = data.totalResults;
  render();
  paginationRender();
  console.log(data);
}

const paginationRender = () => {
  // totalPages
  const totalPages = Math.ceil(totalResults / pageSize);
  // pageGroup
  const pageGroup = Math.ceil(page / groupSize);
  // lastPage
  let lastPage = pageGroup * groupSize;
  if (lastPage > totalPages) {
    lastPage = totalPages
  }
  // firstPage
  const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);

  let paginationHtml = `
    <button class="first" onclick="moveToPage(${1})">first</button>
    <button class="prev" onclick="moveToPage(${page - 1 <= 1 ? 1 : page - 1})">Previous</button>
  `;

  for (let i = firstPage; i <= lastPage; i++) {
    paginationHtml += `<button class="${i === page ? 'act' : ''}" onclick="moveToPage(${i})">${i}</button>`;
  }

  paginationHtml += `
    <button class="nexr" onclick="moveToPage(${page + 1 >= totalPages ? totalPages : page + 1})">Next</button>
    <button class="last" onclick="moveToPage(${totalPages})">Last</button>
  `

  document.querySelector(".pagination").innerHTML = paginationHtml;
}

const moveToPage = (pageNum) => {
  page = pageNum;
  getNews(pageNum);
}

getNews();