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

const jsonURL = "../json/spotlightData.json";

console.log(jsonURL);

fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let companies = [];
        data.forEach(company => {
            if (company.membershipLevel == "Gold" || company.membershipLevel == "Silver") {
                companies.push(company);
                console.log(company);
            }
        });

        let times = 3;
        let counter = 0;
        for (var i = 0; i < times; i++) {
            let randomNumLimit = companies.length;
            let randomNum = Math.floor(Math.random() * randomNumLimit);
            let tempCompany = companies.slice(randomNum, randomNum + 1);
            counter++
            if (counter == 1) {
                companyOneName.textContent = tempCompany["name"];
                companyOneImg.src = tempCompany["imgURL"];
                companyOneImg.alt = `${tempCompany["name"]} Company Logo`;
                // companyOneSlogan.textContent = tempCompany[];
                companyOneWebsite.textContent = tempCompany["url"];
                companyOnePhone.textContent = tempCompany["phone"];
            } else if (counter == 2) {
                companyTwoName.textContent = tempCompany["name"];
                companyTwoImg.src = tempCompany["imgURL"];
                companyTwoImg.alt = `${tempCompany["name"]} Company Logo`;
                // companyTwoSlogan.textContent = tempCompany[];
                companyTwoWebsite.textContent = tempCompany["url"];
                companyTwoPhone.textContent = tempCompany["phone"];
            } else {
                companyThreeName.textContent = tempCompany["name"];
                companyThreeImg.src = tempCompany["imgURL"];
                companyThreeImg.alt = `${tempCompany["name"]} Company Logo`;
                // companyThreeSlogan.textContent = tempCompany[];
                companyThreeWebsite.textContent = tempCompany["url"];
                companyThreePhone.textContent = tempCompany["phone"];
            };
        }
    });