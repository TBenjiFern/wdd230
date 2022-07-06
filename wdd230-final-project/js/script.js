function toggleMenu() {
    document.getElementById("naviLinks").classList.toggle("appear");
    document.getElementById("collapsingBtn").classList.toggle("open");
}

const collapsingBtn = document.getElementById("collapsingBtn");
collapsingBtn.onclick = toggleMenu;