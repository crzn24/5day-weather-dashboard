# 5 Day Weather Forecast Dashboard

## Description
This project was a challenge assigned to us where we had to create a weather dashboard application from no starter code. 

Once you open the dashboard, you can search for a city and will have the city's name, the date, and current weather conditions (temperature, humidity, and wind speed) displayed, as well as an icon to represent the the weather conditions. You will also be presented with a 5-day forecast for the city displaying the same information as the current conditions. After searching for a city, that city will be saved into local storage and displayed on the dashboard so that a user can click on a past search to have the weather be shown again.

In this challenge I incorporated some jQuery if I was unsure of the syntax for JavaScript. I'm beginning to understand more of the logic and syntax of JavaScript compared to previous challenges. The new challenge I faced was using an API. Learning how to get the information that was sent in the response was difficult at first, but after being walked through it and trying on my own, I was able to figure it out. Two difficulties I had were learning how to make functions to convert temperature in Kelvin to Fahrenheit and converting Unix timestamps to display the date in a more user friendly way. Local storage is also starting to make more sense to me, but I still ran into a few bugs when clicking on past searches and retrieving from local storage to use the values to get the weather again.



## Usage
This application serves as dashboard to check the current weather as well as the 5 day forecast for various cities that are searched. Its creation is also a way to practice JavaScript, jQuery, and use APIs.

[Link to application](https://crzn24.github.io/5day-weather-dashboard/)



![Screenshot of weather dashboard](/assets/images/weather-dashboard-screenshot.png)

## Credits
* (Bootstrap Containers)[https://getbootstrap.com/docs/5.2/layout/containers/]
* (Bootstrap Colors)[https://getbootstrap.com/docs/5.2/customize/color/]
* (Bootstrap Cards)[https://getbootstrap.com/docs/4.0/components/card/]
* (How to use API Keys)[https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys]
* (OpenWeather Current Weather documentation)[https://openweathermap.org/current#one]
* (OpenWeather 5 Day forecast documentation)[https://openweathermap.org/forecast5#5days]
* (OpenWeather Icons)[https://openweathermap.org/weather-conditions]
* (How to convert Unix Timestamps)[https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript]


## License

MIT License