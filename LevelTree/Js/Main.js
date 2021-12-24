"use Strict"

//functie om van de modal terug naar het startscherm te gaan en header terug zichtbaar te maken
function terugNaarStart() {
    document.getElementById('tree').click();
    document.getElementById("header").style.display="flex";
}

//Bij het laden van de pagina wordt er rustig uigezoomd tot de boom volledig zichtbaar is
window.addEventListener('load', (event) => {
    document.getElementById("zoomStartpunt").click();
    setTimeout(terugNaarStart, 500);
});

//Check of de pagina herladen wordt, zoja? ga terug naar de homepage. Oplossing voor bug met het laden van info in de modal.
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    window.location.href = "home.html";
}

//Functies om de inhoud van de modal te veranderen
document.getElementById('tooltipLv1').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv2').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv3').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv4').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv5').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv6').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv7').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv8').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});
document.getElementById('tooltipLv9').addEventListener('click', function () {
    VulModalMetJuisteGegevens(this.dataset.level);
});

//Functie om de modal op te vullen met de juiste accordions en de correcte inhoud per level + Header te verbergen
function VulModalMetJuisteGegevens(levelId) {
    /*header niet zichtbaar maken als de modal open gaat*/
    document.getElementById("header").style.display="none";

    let juisteObject;
    for (let i = 0; i < alleDataLevels.length; i++)
    {
        if (alleDataLevels[i].id.toString() === levelId.toString()){
            juisteObject = alleDataLevels[i];
        }
    }
    /*LEVEL TITLE*/
    document.getElementById('modal-title').innerHTML = juisteObject.Title;

    /*LEVEL EXPERIENCE*/
    document.getElementById('modal-experience').innerHTML = juisteObject.Experience;

    /*LEVEL ACCORDIONS*/
    let accordionContainer = document.getElementById('accordion-container');
    accordionContainer.innerHTML = "";
    /*Loopt over soft, technical, text , bto & qualifications skills*/
    for (let i = 3; i < 9; i++) {
        let key = Object.keys(juisteObject)[i];
        let lijst; //Lijst voor de listItems
        if (juisteObject[key].length !== 0) {
            /*Accordion aanmaken met de bijhorende classes*/
            let accordion = document.createElement("div");
            accordion.classList.add("accordion");
            accordionContainer.appendChild(accordion);

            /*Input voor de accordion*/
            let inputAccordion = document.createElement("input");
            inputAccordion.id = "check" + (i-2);
            inputAccordion.setAttribute("type", "radio");
            inputAccordion.setAttribute("name", "radio-a");

            //Mag alleen maar voor de eerste true zijn
            if (i === 3) {
                inputAccordion.checked = true;
            }
            accordion.appendChild(inputAccordion);

            /*Label voor de accordion*/
            let labelAccordion = document.createElement("label");
            labelAccordion.classList.add("accordion-label");
            labelAccordion.setAttribute("for", "check" + (i-2));
            labelAccordion.innerHTML = key;
            accordion.appendChild(labelAccordion);

            /*Div voor de inhoud van de accordion*/
            let containerInhoudAccordion = document.createElement("div");
            containerInhoudAccordion.classList.add("accordion-content");
            accordion.appendChild(containerInhoudAccordion);

            //Inhoud van de accordion
            lijst = document.createElement("ul");
            containerInhoudAccordion.appendChild(lijst);
        }

        /*Loopt over alle items per skill*/
        for (let x = 0; x < juisteObject[key].length; x++){
            if (juisteObject[key] != null) {
                console.log(juisteObject[key][x][0] + "/" + juisteObject[key][x][1]);
                let lijstItem = document.createElement("li");
                lijstItem.innerHTML = juisteObject[key][x][0];
                if (juisteObject[key][x][1] == "lead"){
                    lijstItem.classList.add("cat-lead");
                }
                else if (juisteObject[key][x][1] == "technical"){
                    lijstItem.classList.add("cat-technical");
                }
                else if (juisteObject[key][x][1] == "tester"){
                    lijstItem.classList.add("cat-manual");
                }
                lijst.appendChild(lijstItem);
            }
        }
    }
}

//INHOUD MODALS
    alleDataLevels =  [

        //---------------------------LEVEL1---------------------------
        {
            "id" : 1,
            "Title" : "LEVEL 1 AGILE TEST ENGINEER",
            "Experience" : "< 1 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Result oriented","tester"],
                                    ["Flexibility","tester"],
                                    ["Teamwork","tester"],
                                    ["Quality focussed","tester"],
                                    ["Professional attitude","tester"],
                                    ["Bright Ambassador (Like & share Brightest posts, verbal,...","tester"]
            ],
            "Technical Skills" : [
                                    //GENERAL
                                    ["Understanding code","tester"],
                                    ["Test Automatisation (tooling) basics","tester"],
                                    ["SQL, XML, JSON","tester"],
                                    ["Test Management Tools basics (incl. defect mngt)","tester"],

                                    //SPECIFIC
                                    ["Automatisation Framework basics","technical"],
                                    ["Programming skills basics","technical"],
                                    ["Performance Testing basics","technical"]
            ],
            "Test Skills" : [
                                    //GENERAL
                                    ["Structured Testing (test Design basics)","tester"]
            ],
            "BTO/C Skills" : [
                                    //GEEN BIJ LEVEL 1
            ],
            "Qualifications" : [
                                    //GENERAL
                                    ["Bachelor of Master degree (or eq. in experience)","tester"],
                                    ["ISTQB Foundation CTFL certification","tester"],

                                    //SPECIFIC
                                    ["Start with swITch","technical"]
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL2---------------------------
        {
            "id" : 2,
            "Title" : "LEVEL 2 AGILE TEST ENGINEER",
            "Experience" : "> 1 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["First Time Right attitude","tester"],
                                    ["Communication skills (verbal & non-verbal)","tester"],
                                    ["Proactive (think ahead with your team)","tester"]
            ],
            "Technical Skills" : [
                                    //GENERAL
                                    ["Basic coding & scripting skills","tester"],
                                    ["API Testing basics","tester"],

                                    //SPECIFIC
                                    ["API Test Automation","technical"],
                                    ["Using Automation Framework/Tools","technical"],
                                    ["Technology basics: NodeJS, GIT, CI/CD, Rest, PHP, MySQL, Java IntelliJ, Microservices","technical"]
            ],
            "Test Skills" : [
                                    //GENERAL
                                    ["Basic test estimation & reporting (for yourself)","tester"]
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Basic Training / Presentation skills","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL
                                    ["ISTQB Certified Agile Tester","tester"],
                                    ["BDD Essentials","tester"],

                                    //SPECIFIC
                                    ["swITch track finalized","technical"]
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL3---------------------------
        {
            "id" : 3,
            "Title" : "LEVEL 3 AGILE TEST AUTOMATION ENGINEER",
            "Experience" : "> 2 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Ownership","tester"],
                                    ["Self-development","tester"],
                                    ["Assertiveness","tester"],
                                    ["Detect opportunities (at customer)","tester"],

                                    //SPECIFIC
                                    ["Lead/coach a small team (1 - 3 people)","lead"],
                                    ["Basic coaching and coordination skills","lead"]
            ],
            "Technical Skills" : [
                                    //GENERAL
                                    ["DevOps Basic Concepts (via training =>)","tester"],
                                    ["Shift-left Basic Concepts (via training =>)","tester"],
                                    ["Build Domain(s) (via training =>)","tester"],

                                    //SPECIFIC
                                    ["Automation tool specialist","technical"],
                                    ["Java, Javascript/Typescript of C# knowledge","technical"],
                                    ["Advanced SQL or noSQL db's","technical"],
                                    ["Optional specialisation: Performance testing Advanced skills","technical"]
            ],
            "Test Skills" : [
                                    //GENERAL
                                    ["Able to select \"Test Mngt Tool\" & organise","tester"],
                                    ["Exploratory Testing (via (self)training) =>)","tester"],
                                    ["Build Domain Expertise (sector, QA related topics)","tester"],

                                    //SPECIFIC
                                    ["basic project estimates & reporting","lead"],
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Training & Presentation skills","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL
                                    ["Shift-left concepts (incl. TDD unit testing principles,...)","tester"],
                                    ["DevOps Basic Concepts","tester"],
                                    ["Exploratory Testing","tester"],
                                    ["Train the trainer (IF Brightest Trainer)","tester"],

                                    //SPECIFIC
                                    ["Certified Scrum Master","lead"],
                                    ["Test Management Basics (incl. reporting, estimation,...)","lead"]
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL4---------------------------
        {
            "id" : 4,
            "Title" : "LEVEL 4 AGILE TEST COORDINATOR",
            "Experience" : "> 3 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Networking (sell Brightest to possible candidates & extra solutions for customer)","tester"],
                                    ["Adaptability (easy integration in new situations/customers)","tester"],
                                    ["Organisational sensitivity","tester"],
                                    ["Detect opportunities (outside your own customer)","tester"],
                                    ["Lead by example","tester"],
                                    ["Bright Ambassador (Share own content on social media,...)","tester"],

                                    //SPECIFIC
                                    ["Lead/coach a few small teams (3 - 5 people)","lead"]
            ],
            "Technical Skills" : [
                                    //GENERAL
                                    ["Content Coaching (for your specialisations)","tester"],

                                    //SPECIFIC
                                    ["Build Automation Framework","technical"],
                                    ["Advanced programming skills (OOP, design patterns,...)","technical"],
                                    ["DevOps Advanced (via training =>)","technical"]
            ],
            "Test Skills" : [
                                    //GENERAL
                                    ["Shift-left (able to assess testing pyramid)","tester"],
                                    ["Content Coaching (sector, QA related topics)","tester"],

                                    //SPECIFIC
                                    ["Project estimation & reporting","lead"],
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Construct Trainings (content)","tester"],
                                    ["Write blogs, papers, articles (content)","tester"],
                                    ["Knowledge Sharing (gastcolleges, stagebegeleiding,...","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL
                                    ["Scaled Agile Concepts (training mPower)","tester"],

                                    //SPECIFIC
                                    ["Prince2 Certified","lead"],
                                    ["SwITch final assignment (for those who didn't follow swITch)","technical"],
                                    ["DevOps Advanced training","technical"],
                                    ["IREB certification","tester"]
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL5---------------------------
        {
            "id" : 5,
            "Title" : "LEVEL 5 PRO",
            "Experience" : "> 4 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Leadership skills (motivation, team vision alignment,...)","tester"],
                                    ["Independence (team decisions, organisation,...)","tester"],
                                    ["Coach team members","tester"],

                                    //SPECIFIC
                                    ["Conflict Management","lead"],
                                    ["Budgeting","lead"],
                                    ["Manage/Lead/Coach more than 3 teams (5 - 10 people) or 1 test","lead"],
                                    ["Project (with possible several teams) (operational level)","lead"]
            ],
            "Technical Skills" : [
                                    //GENERAL
                                    ["Expert Coach in at least 1 domain (your specialisation)","tester"],
                                    ["Able to make POC in at least 1 domain (your specialisation)","tester"],
                                    ["Build Domain(s) Expertise (your specialisations - self development: new trends,...)","tester"],

                                    //SPECIFIC
                                    ["Advanced SQL or noSQL db's","tester"],
                                    ["Test Automation POC","technical"],
                                    ["DevOps Advanced (via training =>)","lead"]
            ],
            "Test Skills" : [
                                    //GENERAL
                                    ["Expert Coach in at least 1 domain (sector, QA related)","tester"],
                                    ["Build Domain(s) Expertise (sector, QA related topics - self development: new trends, ...)","tester"],

                                    //SPECIFIC
                                    ["Project planning & organisation (budget, resources, approach, ...)","lead"],
                                    ["Assist in Assessing a QA organisation (assist Brightscan)","lead"]
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["BPC role (possible to take up)","tester"],
                                    ["Construct Trainings (all in)","tester"],
                                    ["Write blogs, papers, articles (all in)","tester"],
                                    ["Knowledge Sharing (brown bags, webinars, ...)","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL
                                    ["Acceleration track: leading yourself + Value based selling","tester"],

                                    //SPECIFIC
                                    ["ISTQB Advanced Certified: Test Analyst","tester"],
                                    ["ISTQB Advanced Certified: Technical Test Analyst","technical"],
                                    ["DevOps Advanced training","lead"]
            ],
            "Video's" : [
                //Video links
                ["www.goole.com","video"],
                ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL6---------------------------
        {
            "id" : 6,
            "Title" : "LEVEL 6 JEDI",
            "Experience" : "> 7 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Market orientation (commerciele ingesteldheid, snappen wat nodig voor de klant & hoe vertalen nr onze solutions / cross selling)","tester"],
                                    ["Independence (multiple team decisions, organisation,...)","tester"],
                                    ["Leadership skills (motivation, multiple team vision alignment, ...)","tester"],
                                    ["Coach teams (dev, analyst, PO, ...)","tester"],

                                    //SPECIFIC
                                    ["Manage/Lead/Coach several Test projects (1-5 projects) (operational level)","lead"]
            ],
            "Technical Skills" : [
                                    //GENERAL

                                    //SPECIFIC
                                    ["Able to select Automation Tool","technical"],
                                    ["Set up test automation process (CI/CD, testing pyramid, …)","technical"]
            ],
            "Test Skills" : [
                                    //GENERAL

                                    //SPECIFIC
                                    ["Set up test process (shift-left, ...)","lead"]
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Presales","tester"],
                                    ["Proposal Writing (content delivery)","tester"],
                                    ["Value Based SPIN Selling (solution sales) (customer & colleagues)","tester"],
                                    ["Public speaking (domain / expertise on events)","tester"],
                                    ["Solution Architect (trekken van R&D, groep bijeen krijgen om aan dingen te werken, iets organiseren, lead workforces...)","tester"],
                                    ["Set up Continuous Improvement track (for your teams/small organisations)","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL
                                    ["Acceleration track: leading others & the company","tester"],

                                    //SPECIFIC
                                    ["BDD Practitioner","technical"],
                                    ["ISTQB Advanced Certified: Test Manager","lead"]
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL7---------------------------
        {
            "id" : 7,
            "Title" : "LEVEL 7 CZAR",
            "Experience" : "> 10 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Organisational Leadership skills (strategic level)","tester"],
                                    ["Change Managment skills (able to solve complex issues & guide organisations to next level)","tester"],
                                    ["Intrapreneurship","tester"],
                                    ["Stress resilience","tester"],
                                    ["Delegation","tester"],

                                    //SPECIFIC
                                    ["Manage/Lead/Coach several Test projects (5+ projects) (strategic level)","lead"],
                                    ["Test Competence Lead","lead"]
            ],
            "Technical Skills" : [
                                    //GENERAL

                                    //SPECIFIC

            ],
            "Test Skills" : [
                                    //GENERAL

                                    //SPECIFIC
                                    ["Asses QA organisation (all in Brightscan)","lead"]
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Innovation ideas","tester"],
                                    ["Proposal Writing (incl. budgets, all in)","tester"],
                                    ["Key account management","tester"],
                                    ["Be part of Brightest as a company (lead \"area\")","tester"],
                                    ["Content review or decide on subjects for (articles, blogs, papers...)","tester"],
                                    ["Set up & implement Continuous Improvement track (conceptual, organisation wide)","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL

                                    //SPECIFIC
                                    ["ITIL Foundation","lead"]
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL8---------------------------
        {
            "id" : 8,
            "Title" : "LEVEL 8 GURU",
            "Experience" : "> 15 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Negotiation Skills","tester"],
                                    ["Delivery management (opvolgen van projecten bij klanten, implementatie trajecten ...)","tester"],

                                    //SPECIFIC
                                    ["Lead QA company wide (strategic level)","lead"],
                                    ["Manage/Lead/Coach several Test projects or Test managers (5+) (strategic level)","lead"]
            ],
            "Technical Skills" : [
                                    //GENERAL

                                    //SPECIFIC

            ],
            "Test Skills" : [
                                    //GENERAL

                                    //SPECIFIC
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Organise external events (content, sector, ...)","tester"],
                                    ["Tender uitwerken (all in)","tester"],
                                    ["Business development","tester"],
                                    ["Create new services/solutions","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL

                                    //SPECIFIC
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        },

        //---------------------------LEVEL9---------------------------
        {
            "id" : 9,
            "Title" : "LEVEL 9 WZARD",
            "Experience" : "> 15 year experience",
            "Soft Skills" : [
                                    //GENERAL
                                    ["Drive innovation","tester"],
                                    ["Inspire people","tester"],
                                    ["Brightest Ambassador (breathe Brightest)","tester"]

                                    //SPECIFIC
            ],
            "Technical Skills" : [
                                    //GENERAL

                                    //SPECIFIC

            ],
            "Test Skills" : [
                                    //GENERAL

                                    //SPECIFIC
            ],
            "BTO/C Skills" : [
                                    //GENERAL
                                    ["Public speaking for the top (C-level)","tester"],
                                    ["Partner material (e.g. area manager (location))","tester"]
            ],
            "Qualifications" : [
                                    //GENERAL

                                    //SPECIFIC
            ],
            "Video's" : [
                                    //Video links
                                    ["www.goole.com","video"],
                                    ["www.brightest.be","video"],
            ]
        }
    ]
