// Api Key

// 7294e7be11cf3a02c424a31759e82f74
// 64.835365, -147.776749
// http://api.openweathermap.org/data/2.5/forecast?lat=64.835365&lon=-147.776749&appid=7294e7be11cf3a02c424a31759e82f74

// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// const url = "https://api.openweathermap.org/data/2.5/forecast?lat=64.835365&lon=-147.776749&appid=7294e7be11cf3a02c424a31759e82f74"
const url = "https://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=7294e7be11cf3a02c424a31759e82f74"


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        currentTemp.innerHTML = `<strong>${data["list"][0]["main"]["temp"].toFixed(0)}</strong>`;

        const iconsrc = `https://openweathermap.org/img/w/${data["list"][0]["weather"][0].icon}.png`;
        const desc = data["list"][0]["weather"][0].description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = toTitleCase(desc);
    });

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}