const templeCards = document.getElementById("templeCards");
const jsonPath = "../json/temples.json";
let counter = 0;

fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
            data.forEach(temple => {
                const templeSection = document.createElement("section");
                const templeName = document.createElement("h2");
                const pictureEl = document.createElement("picture");
                const templeImg = document.createElement("img");
                const infoPackage = document.createElement("div");
                const address = document.createElement("p");
                const phone = document.createElement("p");
                const email = document.createElement("p");
                const history = document.createElement("p");
                const services = document.createElement("div");
                const servicesCollection = document.createElement("div");
                const servicesLabel = document.createElement("h3");
                const ordinanceSched = document.createElement("div");
                const ordinancesLabel = document.createElement("h3");
                const ordinanceCollection = document.createElement("div");
                const baptismIniSealLabel = document.createElement("p");
                const endowmentLabel = document.createElement("p");
                const baptism = document.createElement("p");
                const initiatory = document.createElement("p");
                const endowment = document.createElement("p");
                const sealing = document.createElement("p");
                const sessionSched = document.createElement("div");
                const sessionsLabel = document.createElement("h3");
                const sessionCollection = document.createElement("div");
                const sessionCollection2 = document.createElement("div");
                const sessionTimeCollection = document.createElement("div");
                const sessionTimeCollection2 = document.createElement("div");
                const closureSched = document.createElement("div");
                const closureLabel = document.createElement("h3");
                const closureList = document.createElement("ul");

                templeName.textContent = temple["name"];
                templeImg.src = temple["image"];
                templeImg.alt = `${temple["name"]} exterior landscape view.`;
                address.innerHTML = `<strong>Address: </strong><br>${temple["address"]}`;
                phone.innerHTML = `<strong>Phone: </strong><br>${temple["phone"]}`;
                email.innerHTML = `<strong>Email: </strong><br>${temple["email"]}`;
                history.innerHTML = `<strong>History: </strong><br>${temple["history"]}`;

                servicesLabel.textContent = "Services: "
                services.appendChild(servicesLabel);
                services.className = "servicesCollection";
                temple["services"].forEach(service => {
                    let serviceItem = service["service"];
                    let serviceP = document.createElement("p");
                    serviceP.textContent = serviceItem;
                    servicesCollection.appendChild(serviceP);
                });
                services.appendChild(servicesCollection);

                ordinancesLabel.textContent = "Ordinances Schedule"
                ordinanceSched.appendChild(ordinancesLabel);

                baptism.innerHTML = `<strong>Baptism: </strong>${temple["ordinance_schedule"]["baptism"]}`;
                initiatory.innerHTML = `<strong>Initiatory: </strong>${temple["ordinance_schedule"]["initiatory"]}`;
                endowment.innerHTML = `<strong>Endowment: </strong>${temple["ordinance_schedule"]["endowment"]}`;
                sealing.innerHTML = `<strong>Sealing: </strong>${temple["ordinance_schedule"]["sealing"]}`;

                ordinanceCollection.appendChild(baptism);
                ordinanceCollection.appendChild(initiatory);
                ordinanceCollection.appendChild(endowment);
                ordinanceCollection.appendChild(sealing);
                ordinanceSched.appendChild(ordinanceCollection);
                ordinanceSched.className = "ordinanceSchedule";


                baptismIniSealLabel.innerHTML = "<strong>Baptism, Initiatory, Sealing: </strong>";
                sessionsLabel.textContent = "Session Schedule";
                sessionSched.appendChild(sessionsLabel);
                sessionCollection.appendChild(baptismIniSealLabel);
                sessionSched.className = "sessionSchedule";
                temple["session_schedule"]["baptism"]["sessions"].forEach(session => {
                    let sessionItem = session["time"];
                    let sessionP = document.createElement("p");
                    sessionP.textContent = sessionItem;
                    sessionTimeCollection.appendChild(sessionP);
                });
                sessionCollection.appendChild(sessionTimeCollection);
                sessionCollection.className = "sessionCollection";
                sessionSched.appendChild(sessionCollection);

                endowmentLabel.innerHTML = "<strong>Endowment: </strong>";
                sessionCollection2.appendChild(endowmentLabel);
                temple["session_schedule"]["endowment"]["sessions"].forEach(session => {
                    let sessionItem = session["time"];
                    let sessionP = document.createElement("p");
                    sessionP.textContent = sessionItem;
                    sessionTimeCollection2.appendChild(sessionP);
                });
                sessionCollection2.appendChild(sessionTimeCollection2);
                sessionCollection2.className = "sessionCollection";
                sessionSched.appendChild(sessionCollection2);


                closureLabel.textContent = "Temple Closure Dates";
                closureSched.appendChild(closureLabel);
                temple["closure_schedule"].forEach(occurance => {
                    let closeTime = occurance["closed"];
                    let closeP = document.createElement("li");
                    closeP.textContent = closeTime;
                    closureList.appendChild(closeP);
                });

                closureSched.appendChild(closureList);

                pictureEl.appendChild(templeImg);

                infoPackage.appendChild(history);
                infoPackage.appendChild(services);
                infoPackage.appendChild(ordinanceSched);
                infoPackage.appendChild(sessionSched);
                infoPackage.appendChild(closureSched);
                infoPackage.className = "infoPacket";
                infoPackage.id = `infoPacket${counter}`;


                templeSection.appendChild(templeName);
                templeSection.appendChild(pictureEl);
                templeSection.appendChild(address);
                templeSection.appendChild(phone);
                templeSection.appendChild(email);
                templeSection.appendChild(infoPackage);
                templeSection.className = "templeSection";
                templeSection.id = `templeClass${counter}`;

                counter++;
                templeCards.appendChild(templeSection);

            })
            const templeClass0 = document.getElementById("templeClass0");
            const templeClass1 = document.getElementById("templeClass1");
            const templeClass2 = document.getElementById("templeClass2");
            const templeClass3 = document.getElementById("templeClass3");
    
            templeClass0.addEventListener("click", toggleCard0)
            templeClass1.addEventListener("click", toggleCard1)
            templeClass2.addEventListener("click", toggleCard2)
            templeClass3.addEventListener("click", toggleCard3)
    
            function toggleCard0() {
                document.getElementById("infoPacket0").classList.toggle("infoPacketVisible");
                document.getElementById("templeClass0").classList.toggle("stretchOn");
            };
            function toggleCard1() {
                document.getElementById("infoPacket1").classList.toggle("infoPacketVisible");
                document.getElementById("templeClass1").classList.toggle("stretchOn");
            };
            function toggleCard2() {
                document.getElementById("infoPacket2").classList.toggle("infoPacketVisible");
                document.getElementById("templeClass2").classList.toggle("stretchOn");
            };
            function toggleCard3() {
                document.getElementById("infoPacket3").classList.toggle("infoPacketVisible");
                document.getElementById("templeClass3").classList.toggle("stretchOn");
            };
        }
    );
