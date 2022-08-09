const searchButtonEl = document.querySelector("#search-button");

const currentcityEl = document.querySelector(".current-city");
const currentWeatherEl = document.querySelector(".current-weather");
const pastSearchesEl = document.querySelector(".past-search-wrapper");

// var getCityWeather = function(cityUrl) {
//   fetch(cityUrl).then(function(response) {
//       // request was successful
//       if (response.ok) {
//         response.json().then(function(data) {
//           console.log(data);
//           displayWeather(data);
//         });
//       }
//       else {
//         alert("There was a problem with your request!");
//       }
//   });
// }

// getCityWeather(cityUrl);

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

  // var currentTemp = document.createElement("p");
  // currentTemp.textContent = data.temp;

  // currentWeatherEl.appendChild(currentTemp);
}

const displayWeather = function(lat, lon) {

  fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e53413e7d520a9be0760317a0280fb3f").then(function(response) {
    response.json().then(function(data) {
      console.log(data.main.temp);
      currentcityEl.textContent = data.name;
    });
  });
}


searchButtonEl.addEventListener("click", searchButtonHandler);