function toggleMenu() {
    document.getElementById("naviLinks").classList.toggle("appear");
    document.getElementById("collapsingBtn").classList.toggle("open");
}

const collapsingBtn = document.getElementById("collapsingBtn");
collapsingBtn.onclick = toggleMenu;

const currentYear = document.getElementById("currentYear");

let todayDate = new Date();
const year = todayDate.getFullYear();

currentYear.textContent = year;
document.getElementById("updateDate").textContent = document.lastModified;
