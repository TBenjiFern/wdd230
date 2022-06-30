const companyOneName = document.getElementById("companyOneName");
const companyOneImg = document.getElementById("companyOneImg");
const companyOneSlogan = document.getElementById("companyOneSlogan");
const companyOneWebsite = document.getElementById("companyOneWebsite");
const companyOnePhone = document.getElementById("companyOnePhone");

const companyTwoName = document.getElementById("companyTwoName");
const companyTwoImg = document.getElementById("companyTwoImg");
const companyTwoSlogan = document.getElementById("companyTwoSlogan");
const companyTwoWebsite = document.getElementById("companyTwoWebsite");
const companyTwoPhone = document.getElementById("companyTwoPhone");

const companyThreeName = document.getElementById("companyThreeName");
const companyThreeImg = document.getElementById("companyThreeImg");
const companyThreeSlogan = document.getElementById("companyThreeSlogan");
const companyThreeWebsite = document.getElementById("companyThreeWebsite");
const companyThreePhone = document.getElementById("companyThreePhone");

const jsonURL = "json/spotlightData.json";

fetch(jsonURL)
.then(response => response.json())
.then(data => {
        let companies = [];
        data.forEach(company => {
            if (company.membershipLevel == "Gold" || company.membershipLevel == "Silver") {
                companies.push(company);
            }
        });
        let times = 3;
        let counter = 0;
        for (var i = 0; i < times; i++) {
            let randomNumLimit = companies.length;
            let randomNum = Math.floor(Math.random() * randomNumLimit);
            let tempCompany = companies.splice(randomNum, 1);
            counter++
            if (counter == 1) {
                companyOneName.textContent = tempCompany[0]["name"];
                companyOneImg.src = tempCompany[0]["imageURL"];
                companyOneImg.alt = `${tempCompany[0]["name"]} Company Logo`;
                companyOneSlogan.textContent = tempCompany[0]["slogan"];
                companyOneWebsite.textContent = tempCompany[0]["url"];
                companyOnePhone.textContent = tempCompany[0]["phone"];
            } else if (counter == 2) {
                companyTwoName.textContent = tempCompany[0]["name"];
                companyTwoImg.src = tempCompany[0]["imageURL"];
                companyTwoImg.alt = `${tempCompany[0]["name"]} Company Logo`;
                companyTwoSlogan.textContent = tempCompany[0]["slogan"];
                companyTwoWebsite.textContent = tempCompany[0]["url"];
                companyTwoPhone.textContent = tempCompany[0]["phone"];
            } else {
                companyThreeName.textContent = tempCompany[0]["name"];
                companyThreeImg.src = tempCompany[0]["imageURL"];
                companyThreeImg.alt = `${tempCompany[0]["name"]} Company Logo`;
                companyThreeSlogan.textContent = tempCompany[0]["slogan"];
                companyThreeWebsite.textContent = tempCompany[0]["url"];
                companyThreePhone.textContent = tempCompany[0]["phone"];
            };
        }
    });