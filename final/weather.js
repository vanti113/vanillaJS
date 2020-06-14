const COORDS = "coords";
const API_KEY = "e24d4d7d62f7fdb36958bce46ed3759f";

function paintWeather(weather) {
  const skyPart = document.querySelector(".weather_icon"),
    location = document.querySelector(".location");
  const temp = document.createElement("span");
  temp.innerText = weather.temp;
  const local = document.createElement("span");
  local.innerText = weather.location;
  const image = new Image();

  image.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  image.classList.add("skyImage");
  skyPart.appendChild(image);
  skyPart.appendChild(temp);
  location.appendChild(local);
}
function getWeather(lat, log) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let weather = {
        main: json.weather[0].main,
        temp: `${json.main.temp}º`,
        location: json.name,
        icon: json.weather[0].icon,
      };
      paintWeather(weather);
    });
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("Can't access Geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
