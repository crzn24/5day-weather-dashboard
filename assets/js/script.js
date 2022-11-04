////// Important DOM elements////////
//search element
var searchCityEl = document.getElementById("search-city");
var searchBtn = document.getElementById("search-button");
var pastCitiesEl = document.getElementById("past-cities");
//selected city elements
var todaysWeatherEl = document.getElementById("todays-weather");
var currentCity = document.getElementById("current-city");
var temperatureEl = document.getElementById("temperature");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");

//API key for weather
const APIKey = "a8bb7cc0fbe94b1d7ce387b2fe9f1984"


/////////// function to get weather from weather api
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// call api for coordinates 
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCityEl + "&appid=" + APIKey;

// "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=" + APIKey;
// var cityLatLong = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchCityEl + "&limit=5&appid=" + APIKey;
// "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=" + APIKey;


function init() {
    var cityName = searchCityEl.value;
    getCity(cityName); 
}
var currentCity = "";
//function to get weather data from city name
function getCity(cityName) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    fetch(queryURL)
        .then(function (response) {
            return response.json();
         })
        .then(function (data) {
            console.log(data);
            console.log(cityName);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            
            console.log(currentCity);
            getWeather(lat, lon);
            //get lat and long and display into html
            // take information given and display it in the dashboard 

})        
};

// function kelvinConvert(K) {
//     return Math.floor((K - 273.15) * 1.8 + 32);
// }

function getWeather(lat, lon) {


var newQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            fetch(newQueryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    var todayCity = $("#current-city");
                    todayCity.text(data.city.name);
                    var todayTemp = $("#temperature");
                    todayTemp.text(data.list[0].main.temp);
                    var todayHumidity = $("#humidity");
                    todayHumidity.text(data.list[0].main.humidity);
                    var todayWind = $("#wind");
                    todayWind.text(data.list[0].wind.speed);

                    var day1Temp = $("#day1temperature");
                    day1Temp.text(data.list[1].main.temp);

                })
            // temperatureEl.innerHTML = "Temperature: " + (data.main.temp) + " &#176F";

}

// function to get 5 day forecast
// take info and display it into 5 day forecast
// "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid="+ APIKey


// button event listener
searchBtn.addEventListener("click", init);




////// Local Storage /////////
// get from local storage to show history
// function getHistory {

// }

// save to local storage city name only





