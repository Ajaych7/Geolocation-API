function clicked(){
    alert("Hey, I have been clicked!");
}

function submitted() {
    let loc = document.getElementById('location').value;
    let tok = document.getElementById('token').innerText;
    let url = `http://api.weatherstack.com/current?access_key=${tok}&query=${loc}`;

    fetch(url)
        .then(data => data.json())
        .then(json => {
            console.log(json);
            let weatherData = json.current;
            console.log("Data is", weatherData);
            document.getElementById('loca').innerText = weatherData.location.name;
            document.getElementById('lat').innerText = `Latitude: ${weatherData.location.lat}`;
            document.getElementById('lon').innerText = `Longitude: ${weatherData.location.lon}`;
            document.getElementById('timezone').innerText = `Timezone: ${weatherData.location.timezone_id}`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${weatherData.wind_speed} km/h`;
            document.getElementById('pressure').innerText = `Pressure: ${weatherData.pressure} mb`;
            document.getElementById('humidity').innerText = `Humidity: ${weatherData.humidity}%`;
            document.getElementById('wind-direction').innerText = `Wind Direction: ${weatherData.wind_dir}`;
            document.getElementById('uv-index').innerText = `UV Index: ${weatherData.uv_index}`;
            document.getElementById('feels-like').innerText = `Feels Like: ${weatherData.feelslike}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
