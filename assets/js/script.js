

var response = fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=London&APPID=e53413e7d520a9be0760317a0280fb3f").then(
        function(response) {
            response.json().then(function(data) {
                console.log(data);
            });
});

var currentWeatherEl = document.querySelector(".current-weather");
