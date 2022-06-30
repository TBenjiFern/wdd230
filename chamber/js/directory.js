const directoryCard = document.querySelector("#businessDirectoryCard");
const jsonURL = "../json/data.json";

const gridViewBtn = document.querySelector("#gridViewBtn");
const listViewBtn = document.querySelector("#listViewBtn");

gridViewBtn.addEventListener("click", activateGrid);
listViewBtn.addEventListener("click", activateList)

function activateGrid() {
    console.log("Hello World");
    let businessDirectoryCardWrapper = document.querySelector("#businessDirectoryCard");
    let cardSectionClass = document.querySelectorAll("#cardSection");

    businessDirectoryCardWrapper.classList.remove("listDirectoryCards");
    businessDirectoryCardWrapper.classList.add("businessDirectoryCards");
    cardSectionClass.forEach(el => el.classList.remove("listCardSection"));
    cardSectionClass.forEach(el => el.classList.add("cardSection"));
}

function activateList() {
    console.log("World, Hello");
    let businessDirectoryCardWrapper = document.querySelector("#businessDirectoryCard");
    let cardSectionClass = document.querySelectorAll("#cardSection");

    businessDirectoryCardWrapper.classList.remove("businessDirectoryCards");
    businessDirectoryCardWrapper.classList.add("listDirectoryCards");
    cardSectionClass.forEach(el => el.classList.remove("cardSection"));
    cardSectionClass.forEach(el => el.classList.add("listCardSection"));
}

fetch(jsonURL)
    .then(response => response.json())
    .then(data => {

        data.forEach(company => {
            const companySection = document.createElement("section");
            const name = document.createElement("h2");
            const imgTag = document.createElement("img");
            const address = document.createElement("p");
            const phoneNum = document.createElement("p");
            const webDiv = document.createElement("div");
            const webTag = document.createElement("a");

            companySection.className = "cardSection";
            companySection.id = "cardSection";
            name.className = "cardHeader";
            imgTag.className = "cardImg";
            address.className = "cardAddress";
            phoneNum.className = "cardPhone";
            webTag.className = "cardWeb";
            webDiv.className = "webLinkDiv"

            name.textContent = company["name"];
            imgTag.src = company["imageURL"];
            imgTag.width = 300;
            imgTag.height = 200;
            imgTag.loading = "lazy";
            imgTag.alt = "Company Logo"
            address.textContent = company["address"];
            phoneNum.textContent = company["phone"];
            webTag.href = company["url"];
            webTag.textContent = company["url"];
            webDiv.appendChild(webTag);

            companySection.appendChild(name);
            companySection.appendChild(imgTag);
            companySection.appendChild(address);
            companySection.appendChild(phoneNum);
            companySection.appendChild(webDiv);

            directoryCard.appendChild(companySection);

        });

    });