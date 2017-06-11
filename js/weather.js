
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;
function LoadWeather(){
// GET THE CONDITIONS
    var country = document.getElementById("country-select").value;
    var city = document.getElementById("city-select").value;
    var submitOK = "false";
    if (city.toString() == "Ashdod")
        {
            city = "Ashdod";
            submitOK = "true";
        } 
    if (city.toString() == "Tel Aviv") 
        {
            city = "Tel_Aviv"
            submitOK = "true";
        }
    if (submitOK == "false")
        {
            return false;
        }
var conditionsPath="http://api.wunderground.com/api/a41fd5622d5a8ded/conditions/q/"+country+"/"+city+".json";
var forcastPath = "http://api.wunderground.com/api/a41fd5622d5a8ded/forecast/q/"+country+"/"+city+".json";
weatherConditions.open('get', conditionsPath, true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

// GET THE FORECARST
weatherForecast.open('get', forcastPath, true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();
}

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML=cObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML=cObj.current_observation.weather;
        document.getElementById('temperature').innerHTML=cObj.current_observation.temp_c;
        document.getElementById('desc').innerHTML=cObj.weather;


    } //end if
}; //end function

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
    document.getElementById('desc').innerHTML=conditionsPath.forecast.txt_forecast.forecastday["0"].fcttext;
    //Day 1
    document.getElementById('r1c1').innerHTML=fObj.forecast.simpleforecast.forecastday[1].date.weekday;
    document.getElementById('r1c3').innerHTML=fObj.forecast.simpleforecast.forecastday[1].high.celsius;
    document.getElementById('r1c4').innerHTML=fObj.forecast.simpleforecast.forecastday[1].low.celsius;
    var imagePath = fObj.forecast.simpleforecast.forecastday[1].icon_url;
    document.getElementById('r1c2').src =imagePath;
    //Day 2
    document.getElementById('r2c1').innerHTML=fObj.forecast.simpleforecast.forecastday[2].date.weekday;
    document.getElementById('r2c3').innerHTML=fObj.forecast.simpleforecast.forecastday[2].high.celsius;
    document.getElementById('r2c4').innerHTML=fObj.forecast.simpleforecast.forecastday[2].low.celsius;
    var imagePath = fObj.forecast.simpleforecast.forecastday[2].icon_url
    document.getElementById('r2c2').src =imagePath;
    //Day 3
    document.getElementById('r3c1').innerHTML=fObj.forecast.simpleforecast.forecastday[3].date.weekday;
    document.getElementById('r3c3').innerHTML=fObj.forecast.simpleforecast.forecastday[3].high.celsius;
    document.getElementById('r3c4').innerHTML=fObj.forecast.simpleforecast.forecastday[3].low.celsius;
    var imagePath = fObj.forecast.simpleforecast.forecastday[3].icon_url;
    document.getElementById('r3c2').src = imagePath;

} //end if
}; //end function


