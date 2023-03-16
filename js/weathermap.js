"use strict";
//example 'OneCall' api url: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// 29.501556262634445, -98.66778410650923

//First step: Get 'current' information on the page for your hometown / favorite city
//Second step: Get the forecast added onto the screen too
//Third step: "Search" capability with map
//Close it out: when the marker moves. . change weather to where the marker ended up

function geoCodeBuildWeather(searchString) {
    let html = "";
    geocode(searchString, MAPBOX_KEY).then(function (results) {
        console.log(results[0]);
        console.log(results[1]);

        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`);

        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {

            html += `<h4>Current location: ${data.name}</h4>`;
            html += `<h4>Current weather: ${data.weather[0].description}</h4>`;
            html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;
            html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;
            html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
            $("#weatherBody").html(html);

            })
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {console.log(data)

        let day1= ""

          // day1
            day1 += `<h4>Current location: ${data.city.name}</h4>`;
            day1 += `<h4>Current weather: ${data.list[1].description}</h4>`;
            day1 += `<h5>Current average wind speed: ${parseInt(data.list[1].wind.speed)} knots</h5>`;
            day1 += `<h5>Current Temperature: ${parseInt(data.list[1].main.temp)} &deg;</h5>`;
            day1 += `<h5>Current humidity: ${parseInt(data.list[1].main.humidity)}</h5>`;
            $("#weatherBody").html(day1);


            let day2= ""
            // day2
            day2 += `<h4>Current location: ${data.city.name}</h4>`;
            day2 += `<h4>Current weather: ${data.list[4].description}</h4>`;
            day2 += `<h5>Current average wind speed: ${parseInt(data.list[4].wind.speed)} knots</h5>`;
            day2 += `<h5>Current Temperature: ${parseInt(data.list[4].main.temp)} &deg;</h5>`;
            day2 += `<h5>Current humidity: ${parseInt(data.list[4].main.humidity)}</h5>`;
            $("#weatherBody").html(day2)

            let day3= ""
            // day3
            day3 += `<h4>Current location: ${data.city.name}</h4>`;
            day3 += `<h4>Current weather: ${data.list[12].description}</h4>`;
            day3 += `<h5>Current average wind speed: ${parseInt(data.list[12].wind.speed)} knots</h5>`;
            day3 += `<h5>Current Temperature: ${parseInt(data.list[12].main.temp)} &deg;</h5>`;
            day3 += `<h5>Current humidity: ${parseInt(data.list[12].main.humidity)}</h5>`;
            $("#weatherBody").html(day3);

            let day4=""

            // day4
            day4 += `<h4>Current location: ${data.city.name}</h4>`;
            day4 += `<h4>Current weather: ${data.list[23].description}</h4>`;
            day4 += `<h5>Current average wind speed: ${parseInt(data.list[23].wind.speed)} knots</h5>`;
            day4 += `<h5>Current Temperature: ${parseInt(data.list[23].main.temp)} &deg;</h5>`;
            day4 += `<h5>Current humidity: ${parseInt(data.list[23].main.humidity)}</h5>`;
            $("#weatherBody").html(day4);

            let day5=""
            // day5
            day5 += `<h4>Current location: ${data.city.name}</h4>`;
            day5 += `<h4>Current weather: ${data.list[27].description}</h4>`;
            day5 += `<h5>Current average wind speed: ${parseInt(data.list[27].wind.speed)} knots</h5>`;
            day5 += `<h5>Current Temperature: ${parseInt(data.list[27].main.temp)} &deg;</h5>`;
            day5 += `<h5>Current humidity: ${parseInt(data.list[27].main.humidity)}</h5>`;
            $("#weatherBody").html(day5);




        })
        })
};






 $("#myBtn").click(function(e){
   e.preventDefault();
   geoCodeBuildWeather($("#searchInput").val());
})

