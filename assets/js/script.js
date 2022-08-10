const searchButtonEl = document.querySelector("#search-button");

const currentcityEl = document.querySelector(".current-city");
const currentTempEl = document.querySelector(".current-temp");
const currentWindEl = document.querySelector(".current-wind");
const currentHumidityEl = document.querySelector(".current-humidity");
const currentUvEl = document.querySelector(".current-UV");
const currentWeatherEl = document.querySelector(".current-weather");
const pastSearchesEl = document.querySelector(".past-search-wrapper");

// Date Formatting
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// Search Button Function
const searchButtonHandler = function() {

  let city = document.querySelector('input[name="search-input"]').value;
  
  let pastCityEl = document.createElement("button");
  pastCityEl.textContent = city;
  pastSearchesEl.appendChild(pastCityEl);

  fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&APPID=e53413e7d520a9be0760317a0280fb3f").then(function(response) {
    response.json().then(function(data) {
      searchLat = data[0].lat;
      searchLon = data[0].lon;
      displayWeather(searchLat, searchLon);
    }); 
  });
}

const displayWeather = function(lat, lon) {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e53413e7d520a9be0760317a0280fb3f&units=imperial").then(function(response) {
    response.json().then(function(data) {
      console.log(data.name);
      currentcityEl.textContent = data.name + " (" + today + ") ";
      currentTempEl.textContent = "Temp: " + data.main.temp + "°F";
      currentWindEl.textContent = "Wind: " + data.wind.speed + " MPH";
      currentHumidityEl.textContent = "Humidity: " + data.main.humidity + "%";
    });
  });

  display5Day(lat, lon);
}

const display5Day = function(lat, lon) {
  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&APPID=e53413e7d520a9be0760317a0280fb3f&units=imperial").then(function(response) {
    response.json().then(function(data) {
      console.log(data.list[0].main.humidity + "%");
    });
  });
}


searchButtonEl.addEventListener("click", searchButtonHandler);