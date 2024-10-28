const apiKey = `b601dc8f4ca74300ae27c7d99e388c8d`;
let newsList = [];
let pageSize = 10;
let page = 1;

const pageSizeChange = () => {
  const pagesSizeSelect = document.querySelector(".pageSize");
  console.log(pagesSizeSelect);

  pagesSizeSelect.addEventListener("input", (event) => {
    alert(this.value);
    let changeValue = event.target.value;
    console.log(event.target.value);
  });
};

const getNews = async () => {
  let url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`
  );
  url.searchParams.set("page", page);
  url.searchParams.set("pageSize", pageSize);
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log(newsList);
};

const render = () => {
  const renderArea = document.querySelector(".newsList");
  let resultHtml = "";
  resultHtml = newsList
    .map(
      (item) =>
        `<li>
      <a href="${item.url}" target="_blank">
        <p><img src="${item.urlToImage}" onerror="this.src='https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'" /></p>
        <div>
          <p>${item.title}</p>
          <p>${item.publishedAt}</p>
        </div>
      </a>
    </li>`
    )
    .join("");
  renderArea.innerHTML = resultHtml;
};

getNews();

const listSizeChange = (event) => {
  pageSize = event.target.value;
  getNews();
};
