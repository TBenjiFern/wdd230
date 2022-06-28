const imagesToLoad = document.querySelectorAll("img[data-src]")

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

let lastVisitDate;
const now = Date.now();

if (window.localStorage.getItem("lastVisitDate")) {
    lastVisitDate = window.localStorage.getItem("lastVisitDate");
} else {
    lastVisitDate = now;
}

window.localStorage.setItem("lastVisitDate", now);

const daysSinceLastVisit = Math.floor((now - lastVisitDate) / 86400);

document.querySelector("#daysAgo").textContent = daysSinceLastVisit;

// console.log(daysSinceLastVisit);
// console.log(now);