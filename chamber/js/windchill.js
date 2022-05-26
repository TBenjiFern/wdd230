const tempF = parseFloat(document.querySelector("#tempF").textContent);
const windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);

const windChill = document.querySelector("#windChill");

console.log(tempF);
console.log(windSpeed);

if (tempF <= 50 && windSpeed > 3.0) {
    let windChillVal = 35.74 + (0.6215 * tempF) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * tempF * (windSpeed ** 0.16));
    console.log(windChillVal)
    windChill.textContent = Math.round(windChillVal * 100) / 100;
} else {
    windChill.textContent = "N/A";
};

