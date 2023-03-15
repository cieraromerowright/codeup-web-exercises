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
        let addHtml= ""

          // 'day2'
            addHtml += `<h4>Current location: ${data.city.name}</h4>`;
            addHtml += `<h4>Current weather: ${data.list[4].weather[0].description}</h4>`;
            addHtml += `<h5>Current average wind speed: ${parseInt(data.list[4].wind.speed)} knots</h5>`;
            addHtml += `<h5>Current Temperature: ${parseInt(data.list[4].main.temp)} &deg;</h5>`;
            addHtml += `<h5>Current humidity: ${parseInt(data.list[4].main.humidity)}</h5>`;
            $("#weatherBody").html(addHtml);
        })
        })
};







$("#myBtn").click(function(e){
    e.preventDefault();
    geoCodeBuildWeather($("#searchInput").val());
})

