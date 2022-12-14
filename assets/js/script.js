////// Important DOM elements////////
//search element
var searchCityEl = document.getElementById("search-city");
var searchBtn = document.getElementById("search-button");
var pastCitiesEl = document.getElementById("past-cities");
var clearBtn = document.getElementById("clear-history-btn");
//selected city elements
var todaysWeatherEl = document.getElementById("todays-weather");
var currentCity = document.getElementById("current-city");
var currentDateEl = document.getElementById("current-date");
var temperatureEl = document.getElementById("temperature");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");

var title5DayEl = document.getElementById("title5day");
var todayEl = document.getElementById("today");
var fiveBoxesEl = document.getElementById("5boxes");
//API key for weather
const APIKey = "a8bb7cc0fbe94b1d7ce387b2fe9f1984"


/////////// function to get weather from weather api
// call api for coordinates 

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCityEl + "&appid=" + APIKey;


//////function that will run when opening page
function init() {
    //get items from local storage
    renderSearchHistory();
}

//////function that runs when button is clicked
function clickSearch() {
    var cityName = searchCityEl.value;
    getCity(cityName); 
}

//converts dt into better format to read
function dateConverter(currentDate) {
    var a = new Date(currentDate * 1000);
    var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = a.getDate();
    var time = month + ' / ' + day + ' / ' +  year;
    return time;
}

//function to get current weather data from city name
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
            todayEl.classList.remove("d-none");

             ///////////current day//////////////////
             var todayCity = $("#current-city");
             todayCity.text(data.name);
             //temp and convert from Kelvin to F
             var todayTemp = $("#temperature");
             var tempK0 = data.main.temp;
             var tempF0 = ((tempK0 - 273.15) * 1.8 +32).toFixed(0);
             todayTemp.text("Temp: " + tempF0 + "??F");
             var todayHumidity = $("#humidity");
             todayHumidity.text("Humidity: " + data.main.humidity + " %");
             var todayWind = $("#wind");
             todayWind.text("Wind: " + data.wind.speed + " MPH");
             //weather icon
             var currentIcon = data.weather[0].icon;
             var icon0Url = "https://openweathermap.org/img/w/" + currentIcon + ".png";
             document.getElementById("current-image").src = icon0Url;
             //date
             var currentDate = data.dt;
             $("#current-date").html(dateConverter(currentDate));
              
                

            getWeather(lat, lon);
            //get lat and long and display into html
            // take information given and display it in the dashboard 

})        
};


//function to get 5 day forecast
function getWeather(pLat, pLon) {

    
var newQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + pLat + "&lon=" + pLon + "&appid=" + APIKey;
            fetch(newQueryURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                   
                    title5DayEl.classList.remove("d-none");
                    fiveBoxesEl.classList.remove("d-none");
                    //////// 5 day forecast///////////
                    // take info and display it into 5 day forecast

                    //day 1
                    var day1Temp = $("#day1temperature");
                    var tempK1 = data.list[5].main.temp;
                    var tempF1 = ((tempK1 - 273.15) * 1.8 +32).toFixed(0);
                    day1Temp.text("Temp: " + tempF1 + "??F");
                    var day1Wind = $("#day1wind");
                    day1Wind.text("Wind: " + data.list[5].wind.speed + " MPH");
                    var day1Humidity = $("#day1humidity");
                    day1Humidity.text("Humidity: " + data.list[5].main.humidity + " %");
                    var day1Icon = data.list[5].weather[0].icon;
                    var icon1Url = "https://openweathermap.org/img/w/" + day1Icon + ".png";
                    document.getElementById("imgday1").src = icon1Url;
                    var day1Date = data.list[5].dt;
                    $("#day1date").html(dateConverter(day1Date));
                   


                    //day 2
                    var day2Temp = $("#day2temperature");
                    var tempK2 = data.list[13].main.temp;
                    var tempF2 = ((tempK2 - 273.15) * 1.8 +32).toFixed(0);
                    day2Temp.text("Temp: " + tempF2 + "??F");
                    var day2Wind = $("#day2wind");
                    day2Wind.text("Wind: " + data.list[13].wind.speed + " MPH");
                    var day2Humidity = $("#day2humidity");
                    day2Humidity.text("Humidity: " + data.list[13].main.humidity + " %");
                    var day2Icon = data.list[13].weather[0].icon;
                    var icon2Url = "https://openweathermap.org/img/w/" + day2Icon + ".png";
                    document.getElementById("imgday2").src = icon2Url;
                    var day2Date = data.list[13].dt;
                    $("#day2date").html(dateConverter(day2Date));

                    //day 3
                    var day3Temp = $("#day3temperature");
                    var tempK3 = data.list[21].main.temp;
                    var tempF3 = ((tempK3 - 273.15) * 1.8 +32).toFixed(0);
                    day3Temp.text("Temp: " + tempF3 + "??F");
                    var day3Wind = $("#day3wind");
                    day3Wind.text("Wind: " + data.list[21].wind.speed + " MPH");
                    var day3Humidity = $("#day3humidity");
                    day3Humidity.text("Humidity: " + data.list[21].main.humidity + " %");
                    var day3Icon = data.list[21].weather[0].icon;
                    var icon3Url = "https://openweathermap.org/img/w/" + day3Icon + ".png";
                    document.getElementById("imgday3").src = icon3Url;
                    var day3Date = data.list[21].dt;
                    $("#day3date").html(dateConverter(day3Date));

                    //day 4
                    var day4Temp = $("#day4temperature");
                    var tempK4 = data.list[29].main.temp;
                    var tempF4 = ((tempK4 - 273.15) * 1.8 +32).toFixed(0);
                    day4Temp.text("Temp: " + tempF4 + "??F");
                    var day4Wind = $("#day4wind");
                    day4Wind.text("Wind: " + data.list[29].wind.speed + " MPH");
                    var day4Humidity = $("#day4humidity");
                    day4Humidity.text("Humidity: " + data.list[29].main.humidity + " %");
                    var day4Icon = data.list[29].weather[0].icon;
                    var icon4Url = "https://openweathermap.org/img/w/" + day4Icon + ".png";
                    document.getElementById("imgday4").src = icon4Url;
                    var day4Date = data.list[29].dt;
                    $("#day4date").html(dateConverter(day4Date));

                    //day 5
                    var day5Temp = $("#day5temperature");
                    var tempK5 = data.list[37].main.temp;
                    var tempF5 = ((tempK5 - 273.15) * 1.8 +32).toFixed(0);
                    day5Temp.text("Temp: " + tempF5 + "??F");
                    var day5Wind = $("#day5wind");
                    day5Wind.text("Wind: " + data.list[37].wind.speed + " MPH");
                    var day5Humidity = $("#day5humidity");
                    day5Humidity.text("Humidity: " + data.list[37].main.humidity + " %");
                    var day5Icon = data.list[37].weather[0].icon;
                    var icon5Url = "https://openweathermap.org/img/w/" + day5Icon + ".png";
                    document.getElementById("imgday5").src = icon5Url;
                    var day5Date = data.list[37].dt;
                    $("#day5date").html(dateConverter(day5Date));
                })
            

}



// button event listener
searchBtn.addEventListener("click", clickSearch);




////// Local Storage /////////
// save to local storage city name only
// get from local storage to show history
// var searchHistoryArray = []
var searchHistoryArray = JSON.parse(localStorage.getItem("search")) || [];


//function that will load list and allow you to click on past searches
function renderSearchHistory() {
    pastCitiesEl.innerHTML = "";
    for (let i = 0; i < searchHistoryArray.length; i++) {
        //
        var historyItem = document.createElement("input");
        historyItem.setAttribute("type", "text");
        historyItem.setAttribute("readonly", true);
        historyItem.setAttribute("class", "form-control d-block bg-white");
        historyItem.setAttribute("value", searchHistoryArray[i]);
        historyItem.addEventListener("click", function () {
            console.log(historyItem.value);
            getCity(historyItem.value);
            // getWeather(historyItem.value);
            // commented out this line of code to prevent an error on the API Call but need to figure out why
        });
        pastCitiesEl.append(historyItem);
    }
}


//adds new search to local storage array and refreshes the list
searchBtn.addEventListener("click", function () {
    var searchTerm = searchCityEl.value;
    searchHistoryArray.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistoryArray));
    renderSearchHistory();
});

//function to clear search history list and refresh list
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    // this makes the list dissappear. without it, it would remain on page until you refresh again v
    searchHistoryArray = [];
    renderSearchHistory();
});


init();