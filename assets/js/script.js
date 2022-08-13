const searchButtonEl = document.querySelector("#search-button");

const currentcityEl = document.querySelector(".current-city");
const currentTempEl = document.querySelector(".current-temp");
const currentWindEl = document.querySelector(".current-wind");
const currentHumidityEl = document.querySelector(".current-humidity");
const currentUvEl = document.querySelector(".current-UV");
const currentWeatherEl = document.querySelector(".current-weather");
const pastSearchesEl = document.querySelector(".past-search-wrapper");

// Forecast Document Elements
const day1dateEl = document.querySelector('#day1date');
const day2dateEl = document.querySelector('#day2date');
const day3dateEl = document.querySelector('#day3date');
const day4dateEl = document.querySelector('#day4date');
const day5dateEl = document.querySelector('#day5date');

const day1TempEl = document.querySelector('#day1Temp');
const day1WindEl = document.querySelector('#day1Wind');
const day1HumidEl = document.querySelector('#day1Humid');

const day2TempEl = document.querySelector('#day2Temp');
const day2WindEl = document.querySelector('#day2Wind');
const day2HumidEl = document.querySelector('#day2Humid');

const day3TempEl = document.querySelector('#day3Temp');
const day3WindEl = document.querySelector('#day3Wind');
const day3HumidEl = document.querySelector('#day3Humid');

const day4TempEl = document.querySelector('#day4Temp');
const day4WindEl = document.querySelector('#day4Wind');
const day4HumidEl = document.querySelector('#day4Humid');

const day5TempEl = document.querySelector('#day5Temp');
const day5WindEl = document.querySelector('#day5Wind');
const day5HumidEl = document.querySelector('#day5Humid');

// Date Formatting
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// Future Date Formatting
var tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1)
var dd1 = String(tomorrow.getDate()).padStart(2, '0');
var mm1 = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy1 = tomorrow.getFullYear();
tomorrow = mm1 + '/' + dd1 + '/' + yyyy1;

var day2 = new Date(today);
day2.setDate(day2.getDate() + 2)
var dd2 = String(day2.getDate()).padStart(2, '0');
var mm2 = String(day2.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy2 = day2.getFullYear();
day2 = mm2 + '/' + dd2 + '/' + yyyy2;

var day3 = new Date(today);
day3.setDate(day3.getDate() + 3)
var dd3 = String(day3.getDate()).padStart(2, '0');
var mm3 = String(day3.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy3 = day3.getFullYear();
day3 = mm3 + '/' + dd3 + '/' + yyyy3;

var day4 = new Date(today);
day4.setDate(day4.getDate() + 4)
var dd4 = String(day4.getDate()).padStart(2, '0');
var mm4 = String(day4.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy4 = day4.getFullYear();
day4 = mm4 + '/' + dd4 + '/' + yyyy4;

var day5 = new Date(today);
day5.setDate(day5.getDate() + 5)
var dd5 = String(day5.getDate()).padStart(2, '0');
var mm5 = String(day5.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy5 = day5.getFullYear();
day5 = mm5 + '/' + dd5 + '/' + yyyy5;

// Search Button Function
const searchButtonHandler = function() {

  let city = document.querySelector('input[name="search-input"]').value;
  
  let pastCityEl = document.createElement("button");
  pastCityEl.textContent = city;
  pastCityEl.classList.add('pastCityButton');
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
      day1dateEl.textContent = tomorrow;
      day2dateEl.textContent = day2;
      day3dateEl.textContent = day3;
      day4dateEl.textContent = day4;
      day5dateEl.textContent = day5;

      day1TempEl.textContent = "Temp: " + data.list[0].main.temp + "°F";
      day1WindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      day1HumidEl.textContent = "Humidity: " + data.list[0].main.humidity + "%";

      day2TempEl.textContent = "Temp: " + data.list[1].main.temp + "°F";
      day2WindEl.textContent = "Wind: " + data.list[1].wind.speed + " MPH";
      day2HumidEl.textContent = "Humidity: " + data.list[1].main.humidity + "%";

      day3TempEl.textContent = "Temp: " + data.list[2].main.temp + "°F";
      day3WindEl.textContent = "Wind: " + data.list[2].wind.speed + " MPH";
      day3HumidEl.textContent = "Humidity: " + data.list[2].main.humidity + "%";

      day4TempEl.textContent = "Temp: " + data.list[3].main.temp + "°F";
      day4WindEl.textContent = "Wind: " + data.list[3].wind.speed + " MPH";
      day4HumidEl.textContent = "Humidity: " + data.list[3].main.humidity + "%";

      day5TempEl.textContent = "Temp: " + data.list[4].main.temp + "°F";
      day5WindEl.textContent = "Wind: " + data.list[4].wind.speed + " MPH";
      day5HumidEl.textContent = "Humidity: " + data.list[4].main.humidity + "%";
    });
  });

  
  

}

pastSearchesEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('pastCityButton')) {
    let city = e.target.textContent;

    let pastCityEl = document.createElement("button");
    pastCityEl.textContent = city;
    pastCityEl.classList.add('pastCityButton');
    pastSearchesEl.appendChild(pastCityEl);

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&APPID=e53413e7d520a9be0760317a0280fb3f").then(function(response) {
      response.json().then(function(data) {
        searchLat = data[0].lat;
        searchLon = data[0].lon;
        displayWeather(searchLat, searchLon);
      }); 
    });
  }
});

searchButtonEl.addEventListener("click", searchButtonHandler);