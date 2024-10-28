const apiKey = `303b78cc1a0e877216c5e7f4f4460f1`;
const weatherRenderTarget = document.querySelector(".weatherInfo");
const cityLsit = ["Current", "New York", "London", "Tokyo", "Paris"];
const cityRenderTarget = document.querySelector(".citySelect");

const cityRender = () => {
  let cityHtml = ``;
  cityLsit.map((item) => {
    cityHtml += `
      <button type="button" onclick="citySelect(event);">${item}</button>
    `;
  });
  cityRenderTarget.innerHTML = cityHtml;
};

const citySelect = (event) => {
  let targetvalue = event.target.innerHTML;
  getCityWeather(targetvalue);
};

const getCityWeather = async (city) => {
  if (city !== "Current") {
    const url = new URL(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`
    );
    const response = await fetch(url);
    const data = await response.json();
    weatherRender(data);
  } else {
    getCurrentLocation();
  }
};

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    getCurrentWeather(lat, lon);
  });
};

const getCurrentWeather = async (lat, lon) => {
  try {
    const url = new URL(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
    );
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    if (response.status !== "200" || response.status === "401") {
      throw new Error("API KEY ERROR")
    }
    weatherRender(data);
  } catch (error) {
    console.log(error);

  }
};

const weatherRender = (data) => {
  let resultHtml = ``;
  resultHtml += `
    <p>${data.name}</p>
    <p>현재온도 : ${data.main.temp}&#8451</p>
    <p>최고 온도 : ${data.main.temp_max}&#8451, 최저 온도 : ${data.main.temp_min}&#8451</p>
    <p>${data.weather[0].description}</p>
  `;
  weatherRenderTarget.innerHTML = resultHtml;
};

cityRender();
getCurrentLocation();
