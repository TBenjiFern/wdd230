function toggleMenu() {
    document.getElementById("navLink").classList.toggle("open");
    document.getElementById("collapsingBtn").classList.toggle("open");

}

function displayDate() {
    // console.log(Date.now());
}

function sendDate() {
    document.getElementById("submissionDate").value = Date.now();
}

const collapsingBtn = document.getElementById("collapsingBtn");
collapsingBtn.onclick = toggleMenu;

let today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth();// Months start at 0!
let dd = today.getDate();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (dd < 10) dd = '0' + dd;
let monthNum = today.getMonth() + 1;

let dateString = monthNum + "/" + dd + "/" + yyyy;

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date(dateString);
let dayName = days[d.getDay()];


today = dayName + ", " + dd + " " + months[mm] + " " + yyyy;

document.querySelector("#todayDate").textContent = today;

document.querySelector("#lastUpdate").textContent = document.lastModified;
document.querySelector("#currentYear").textContent = new Date().getFullYear();

const banner = document.querySelector(".banner");

if (d.getDay() == 1 || d.getDay() == 2) {
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
}