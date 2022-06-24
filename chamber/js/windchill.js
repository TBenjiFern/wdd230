// Api Key
// 7294e7be11cf3a02c424a31759e82f74

const tempF = document.querySelector("#tempF");
const weatherIcon = document.querySelector("#weatherImg");
const captionDesc = document.querySelector("#weatherDescription");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill")
const url = "https://api.openweathermap.org/data/2.5/forecast?q=Rexburg&units=imperial&appid=7294e7be11cf3a02c424a31759e82f74"

fetch(url)
    .then(response => response.json())
    .then(data => {
        const currentTemp = data["list"][0]["main"]["temp"].toFixed(0);
        const currentWindSpeed = data["list"][0]["wind"]["speed"].toFixed(0);

        tempF.innerHTML = `<strong>${currentTemp}</strong>`;

        windSpeed.innerHTML = currentWindSpeed;

        const iconsrc = `https://openweathermap.org/img/wn/${data["list"][0]["weather"][0]["icon"]}@2x.png`;
        const desc = data["list"][0]["weather"][0].description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = toTitleCase(desc);

        if (currentTemp <= 50 && currentWindSpeed > 3.0) {
            let windChillVal = 35.74 + (0.6215 * currentTemp) - (35.75 * (currentWindSpeed ** 0.16)) + (0.4275 * currentTemp * (currentWindSpeed ** 0.16));
            console.log(windChillVal)
            windChill.textContent = Math.round(windChillVal * 100) / 100;
        } else {
            windChill.textContent = "N/A";
        };
    });

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}