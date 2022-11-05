////// Important DOM elements////////
//search element
var searchCityEl = document.getElementById("search-city");
var searchBtn = document.getElementById("search-button");
var pastCitiesEl = document.getElementById("past-cities");
//selected city elements
var todaysWeatherEl = document.getElementById("todays-weather");
var currentCity = document.getElementById("current-city");
var currentDateEl = document.getElementById("current-date");
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


//function to get current day weather and 5 day forecast
function getWeather(lat, lon) {


var newQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            fetch(newQueryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    ///////////current day//////////////////
                    var todayCity = $("#current-city");
                    todayCity.text(data.city.name);
                    //temp and convert from Kelvin to F
                    var todayTemp = $("#temperature");
                    var tempK0 = data.list[0].main.temp;
                    var tempF0 = ((tempK0 - 273.15) * 1.8 +32).toFixed(0);
                    todayTemp.text("Temp: " + tempF0 + "°F");
                    //humidity and wind
                    var todayHumidity = $("#humidity");
                    todayHumidity.text("Humidity: " + data.list[0].main.humidity + " %");
                    var todayWind = $("#wind");
                    todayWind.text("Wind: " + data.list[0].wind.speed + " MPH");
                    //weather icon
                    var currentIcon = data.list[0].weather[0].icon;
                    var icon0Url = "https://openweathermap.org/img/w/" + currentIcon + ".png";
                    document.getElementById("current-image").src = icon0Url;
    
                    //date
                    var currentDate = data.list[0].dt_txt;
                    $("#current-date").html(currentDate);
                    // var currentDate = new Date(data.list[0].dt * 1000);
                    // var day = currentDate.getDate();
                    // var month = currentDate.getMonth() + 1;
                    // var year = currentDate.getFullYear();
                    // currentDateEl.innerHTML = " (" + month + "/" + day + "/" + year + ") ";



                    
                    //////// 5 day forecast///////////
                    // take info and display it into 5 day forecast

                    //day 1
                    var day1Temp = $("#day1temperature");
                    var tempK1 = data.list[1].main.temp;
                    var tempF1 = ((tempK1 - 273.15) * 1.8 +32).toFixed(0);
                    day1Temp.text("Temp: " + tempF1 + "°F");
                    var day1Wind = $("#day1wind");
                    day1Wind.text("Wind: " + data.list[1].wind.speed + " MPH");
                    var day1Humidity = $("#day1humidity");
                    day1Humidity.text("Humidity: " + data.list[1].main.humidity + " %");
                    var day1Icon = data.list[1].weather[0].icon;
                    var icon1Url = "https://openweathermap.org/img/w/" + day1Icon + ".png";
                    document.getElementById("imgday1").src = icon1Url;
                    var day1Date = data.list[1].dt_txt;
                    $("#day1date").html(day1Date);
                   


                    //day 2
                    var day2Temp = $("#day2temperature");
                    var tempK2 = data.list[2].main.temp;
                    var tempF2 = ((tempK2 - 273.15) * 1.8 +32).toFixed(0);
                    day2Temp.text("Temp: " + tempF2 + "°F");
                    var day2Wind = $("#day2wind");
                    day2Wind.text("Wind: " + data.list[2].wind.speed + " MPH");
                    var day2Humidity = $("#day2humidity");
                    day2Humidity.text("Humidity: " + data.list[2].main.humidity + " %");
                    var day2Icon = data.list[2].weather[0].icon;
                    var icon2Url = "https://openweathermap.org/img/w/" + day2Icon + ".png";
                    document.getElementById("imgday2").src = icon2Url;
                    var day2Date = data.list[2].dt_txt;
                    $("#day2date").html(day2Date);

                    //day 3
                    var day3Temp = $("#day3temperature");
                    var tempK3 = data.list[3].main.temp;
                    var tempF3 = ((tempK3 - 273.15) * 1.8 +32).toFixed(0);
                    day3Temp.text("Temp: " + tempF3 + "°F");
                    var day3Wind = $("#day3wind");
                    day3Wind.text("Wind: " + data.list[3].wind.speed + " MPH");
                    var day3Humidity = $("#day3humidity");
                    day3Humidity.text("Humidity: " + data.list[4].main.humidity + " %");
                    var day3Icon = data.list[3].weather[0].icon;
                    var icon3Url = "https://openweathermap.org/img/w/" + day3Icon + ".png";
                    document.getElementById("imgday3").src = icon3Url;
                    
                    //day 4
                    var day4Temp = $("#day4temperature");
                    var tempK4 = data.list[4].main.temp;
                    var tempF4 = ((tempK4 - 273.15) * 1.8 +32).toFixed(0);
                    day4Temp.text("Temp: " + tempF4 + "°F");
                    var day4Wind = $("#day4wind");
                    day4Wind.text("Wind: " + data.list[4].wind.speed + " MPH");
                    var day4Humidity = $("#day4humidity");
                    day4Humidity.text("Humidity: " + data.list[4].main.humidity + " %");
                    var day4Icon = data.list[4].weather[0].icon;
                    var icon4Url = "https://openweathermap.org/img/w/" + day4Icon + ".png";
                    document.getElementById("imgday4").src = icon4Url;
                    
                    //day 5
                    var day5Temp = $("#day5temperature");
                    var tempK5 = data.list[5].main.temp;
                    var tempF5 = ((tempK5 - 273.15) * 1.8 +32).toFixed(0);
                    day5Temp.text("Temp: " + tempF5 + "°F");
                    var day5Wind = $("#day5wind");
                    day5Wind.text("Wind: " + data.list[5].wind.speed + " MPH");
                    var day5Humidity = $("#day5humidity");
                    day5Humidity.text("Humidity: " + data.list[5].main.humidity + " %");
                    var day5Icon = data.list[5].weather[0].icon;
                    var icon5Url = "https://openweathermap.org/img/w/" + day5Icon + ".png";
                    document.getElementById("imgday5").src = icon5Url;

                })
            

}



// button event listener
searchBtn.addEventListener("click", init);




////// Local Storage /////////
// get from local storage to show history
// function getHistory {

// }

// save to local storage city name only





