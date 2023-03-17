"use strict";
//function to pull info from api to html
function geoCodeBuildWeather(searchString) {
    let html = "";
    geocode(searchString, MAPBOX_KEY).then(function (results) {

        console.log(results)
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`);

        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {
            console.log(data);
            //get map to move to location user types
            map.flyTo({
                center:results,
                zoom:9
            })
            myMarker.setLngLat(results)
            html += `<h4>Current location: ${data.name}</h4>`;
            html += `<h4>Current weather: ${data.weather[0].description}</h4>`;
            html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;
            html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;
            html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
            $("#weatherBody").html(html);

        })
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(function (data) {
            console.log(data);



        let addhtml= ""

          // day1
            addhtml += `<h4>Current location: ${data.city.name}</h4>`;
            addhtml += `<h4>Date: ${data.list[1].dt_txt}</h4>`
            addhtml += `<h4>Future weather: ${data.list[1].weather[0].description}</h4>`;
            addhtml += `<h5>Current average wind speed: ${parseInt(data.list[1].wind.speed)} knots</h5>`;
            addhtml += `<h5>Current Temperature: ${parseInt(data.list[1].main.temp)} &deg;</h5>`;
            addhtml += `<h5>Current humidity: ${parseInt(data.list[1].main.humidity)}</h5>`;
            $("#day1").html(addhtml);


            let html1= ""
            // day2
            html1 += `<h4>Current location: ${data.city.name}</h4>`;
            html1 += `<h4>Date: ${data.list[4].dt_txt}</h4>`
            html1 += `<h4>Future weather: ${data.list[4].weather[0].description}</h4>`;
            html1 += `<h5>Current average wind speed: ${parseInt(data.list[4].wind.speed)} knots</h5>`;
            html1 += `<h5>Current Temperature: ${parseInt(data.list[4].main.temp)} &deg;</h5>`;
            html1 += `<h5>Current humidity: ${parseInt(data.list[4].main.humidity)}</h5>`;
            $("#day2").html(html1)

            let html2= ""
            // day3
            html2 += `<h4>Current location: ${data.city.name}</h4>`;
            html2 += `<h4>Date: ${data.list[12].dt_txt}</h4>`
            html2 += `<h4>Future weather: ${data.list[12].weather[0].description}</h4>`;
            html2 += `<h5>Current average wind speed: ${parseInt(data.list[12].wind.speed)} knots</h5>`;
            html2 += `<h5>Current Temperature: ${parseInt(data.list[12].main.temp)} &deg;</h5>`;
            html2 += `<h5>Current humidity: ${parseInt(data.list[12].main.humidity)}</h5>`;
            $("#day3").html(html2);

            let html3=""

            // day4
            html3 += `<h4>Current location: ${data.city.name}</h4>`;
            html3 += `<h4>Date: ${data.list[23].dt_txt}</h4>`
            html3 += `<h4>Future weather: ${data.list[23].weather[0].description}</h4>`;
            html3 += `<h5>Current average wind speed: ${parseInt(data.list[23].wind.speed)} knots</h5>`;
            html3 += `<h5>Current Temperature: ${parseInt(data.list[23].main.temp)} &deg;</h5>`;
            html3 += `<h5>Current humidity: ${parseInt(data.list[23].main.humidity)}</h5>`;
            $("#day4").html(html3);

            let html4=""
            // day5
            html4 += `<h4>Current location: ${data.city.name}</h4>`;
            html4 += `<h4>Date: ${data.list[27].dt_txt}</h4>`
            html4 += `<h4>Future weather: ${data.list[27].weather[0].description}</h4>`;
            html4 += `<h5>Current average wind speed: ${parseInt(data.list[27].wind.speed)} knots</h5>`;
            html4 += `<h5>Current Temperature: ${parseInt(data.list[27].main.temp)} &deg;</h5>`;
            html4 += `<h5>Current humidity: ${parseInt(data.list[27].main.humidity)}</h5>`;
            $("#day5").html(html4);

        })
        })
};

 $("#myBtn").click(function(e){
   e.preventDefault();
   geoCodeBuildWeather($("#searchInput").val());
})
// map
let myToken='pk.eyJ1IjoiY3JvbmWVyb3dyaSIsImEiOiJjbGY3b3djNTIxeWJxM3FsaDVwMmk3bG1hIn0.BsnAIPXkwdx4vSb54XsQuQ'
mapboxgl.accessToken = MAPBOX_KEY;
 const map = new mapboxgl.Map({
     container: 'map',
     style:'mapbox://styles/mapbox/streets-v12',
     center: [-95.44603513271272,29.803873398161578],
     zoom: 11,
 })
let myMarker = new mapboxgl.Marker({
    draggable:true
})
myMarker.setLngLat([0,0]);
myMarker.addTo(map);

map.addControl( new mapboxgl.GeolocateControl({
    positionOptions:{
        enableHighAccuracy:true
    },
    trackUserLocation: true,
    showUserHeading: true
}));
// functionality of marker to update weather
function onDragEnd(){
    let lngLat = myMarker.getLngLat();
    let arWeather = [lngLat.lng, lngLat.lat];
    geoCodeBuildWeather((arWeather))
}
myMarker.on(`dragend`,onDragEnd)