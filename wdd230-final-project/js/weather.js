// 7294e7be11cf3a02c424a31759e82f74

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const todayImg = document.getElementById("todayWeatherImg");
const todayDescription = document.getElementById("todayWeatherDescription");
const todayTemp = document.getElementById("todayTemp");
const todayHumidity = document.getElementById("todayHumidity");

const dayOneDay = document.getElementById("dayOneDay");
const oneImg = document.getElementById("oneWeatherImg");
const oneDescription = document.getElementById("oneWeatherDescription");
const dayOneTemp = document.getElementById("dayOneTemp");
const dayOneHumidity = document.getElementById("dayOneHumidity");

const dayTwoDay = document.getElementById("dayTwoDay");
const twoImg = document.getElementById("twoWeatherImg");
const twoDescription = document.getElementById("twoWeatherDescription");
const dayTwoTemp = document.getElementById("dayTwoTemp");
const dayTwoHumidity = document.getElementById("dayTwoHumidity");

const dayThreeDay = document.getElementById("dayThreeDay");
const threeImg = document.getElementById("threeWeatherImg");
const threeDescription = document.getElementById("threeWeatherDescription");
const dayThreeTemp = document.getElementById("dayThreeTemp");
const dayThreeHumidity = document.getElementById("dayThreeHumidity");

const apiKey = "7294e7be11cf3a02c424a31759e82f74";
const lat = "43.1";
const lon = "141.4";
const unit = "imperial";
const exclusions = "minutely, hourly"
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=${exclusions}&appid=${apiKey}`
// const url = "https://api.openweathermap.org/data/2.5/forecast?q=Rexburg&units=imperial&appid=7294e7be11cf3a02c424a31759e82f74"

let today = new Date();
const yyyy = today.getFullYear();
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
let monthNum = today.getMonth() + 1;

let dateString = monthNum + "/" + dd + "/" + yyyy;

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date(dateString);
let dayName = days[d.getDay()];

switch (dayName) {
    case "Sunday":
        dayOneDay.textContent = "Monday";
        dayTwoDay.textContent = "Tuesday";
        dayThreeDay.textContent = "Wednesday";
        break;
    case "Monday":
        dayOneDay.textContent = "Tuesday";
        dayTwoDay.textContent = "Wednesday";
        dayThreeDay.textContent = "Thursday";
        break;
    case "Tuesday":
        dayOneDay.textContent = "Wednesday";
        dayTwoDay.textContent = "Thursday";
        dayThreeDay.textContent = "Friday";
        break;
    case "Wednesday":
        dayOneDay.textContent = "Thursday";
        dayTwoDay.textContent = "Friday";
        dayThreeDay.textContent = "Saturday";
        break;
    case "Thursday":
        dayOneDay.textContent = "Friday";
        dayTwoDay.textContent = "Saturday";
        dayThreeDay.textContent = "Sunday";
        break;
    case "Friday":
        dayOneDay.textContent = "Saturday";
        dayTwoDay.textContent = "Sunday";
        dayThreeDay.textContent = "Monday";
        break;
    case "Saturday":
        dayOneDay.textContent = "Sunday";
        dayTwoDay.textContent = "Monday";
        dayThreeDay.textContent = "Tuesday";
        break;
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        const iconsrcToday = `https://openweathermap.org/img/wn/${data["current"]["weather"][0]["icon"]}@2x.png`;
        todayImg.alt = `Today's weather description is ${data["current"]["weather"][0]["description"]}`;
        todayDescription.textContent = toTitleCase(data["current"]["weather"][0]["description"]);
        todayImg.src = iconsrcToday;
        todayTemp.textContent = data["current"]["temp"];
        todayHumidity.textContent = data["current"]["humidity"];

        const iconsrcOne = `https://openweathermap.org/img/wn/${data["daily"][0]["weather"][0]["icon"]}@2x.png`;
        oneImg.src = iconsrcOne;
        oneImg.alt = `Day one's weather description is ${data["daily"][0]["weather"][0]["description"]}`;
        oneDescription.textContent = toTitleCase(data["daily"][0]["weather"][0]["description"]);
        dayOneTemp.textContent = data["daily"][0]["temp"]["day"];
        dayOneHumidity.textContent = data["daily"][0]["humidity"];

        const iconsrcTwo = `https://openweathermap.org/img/wn/${data["daily"][1]["weather"][0]["icon"]}@2x.png`;
        twoImg.src = iconsrcTwo;
        twoImg.alt = `Day two's weather description is ${data["daily"][1]["weather"][0]["description"]}`;
        twoDescription.textContent = toTitleCase(data["daily"][1]["weather"][0]["description"]);
        dayTwoTemp.textContent = data["daily"][1]["temp"]["day"];
        dayTwoHumidity.textContent = data["daily"][1]["humidity"];

        const iconsrcThree = `https://openweathermap.org/img/wn/${data["daily"][2]["weather"][0]["icon"]}@2x.png`;
        threeImg.src = iconsrcThree;
        threeImg.alt = `Day three's weather description is ${data["daily"][2]["weather"][0]["description"]}`;
        threeDescription.textContent = toTitleCase(data["daily"][2]["weather"][0]["description"]);
        dayThreeTemp.textContent = data["daily"][2]["temp"]["day"];
        dayThreeHumidity.textContent = data["daily"][2]["humidity"];
    });

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}