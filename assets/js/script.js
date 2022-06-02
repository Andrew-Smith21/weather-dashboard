var city = "London";
var cityUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&APPID=e53413e7d520a9be0760317a0280fb3f";

var currentcityEl = document.querySelector(".current-city");

var currentWeatherEl = document.querySelector(".current-weather");

var getCityWeather = function(cityUrl) {

    fetch(cityUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
            displayWeather(data);
          });
        }
        else {
          alert("There was a problem with your request!");
        }
    });
}

getCityWeather(cityUrl);

var displayWeather = function(weather) {

    currentcityEl.textContent = city;

};