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





function getWeather() {
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
         })
        .then(function (data) {
            console.log(data);
        })



var lat = response.data.coord.lat;
var lon = response.data.coord.lon;


}



// take information given and display it in the dashboard 



// function to get 5 day forecast

// take info and display it into 5 day forecast




// button event listener
searchBtn.addEventListener("click", getWeather);




////// Local Storage /////////
// get from local storage to show history
// function getHistory {

// }

// save to local storage city name only





