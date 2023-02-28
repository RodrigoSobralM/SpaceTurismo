const crew = [
    {job: "COMANDER", name: "DOUGLAS HURLEY", paragraphCrew: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", imgPeople: "assets/comander.svg"},
    {job: "Mission Specialist", name: "MARK SHUTTLEWORTH", paragraphCrew: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", imgPeople: "assets/missionSpecialist.svg"},
    {job: "PILOT", name: "Victor Glover", paragraphCrew: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", imgPeople: "assets/pilot.svg"},
    {job: "Flight Engineer", name: "Anousheh Ansari", paragraphCrew: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.", imgPeople: "assets/flightEngineer.svg"}
]

let lisCrew = document.querySelectorAll('.information1Crew li')

let jobs = document.querySelector(".information1Crew h2")
let names = document.querySelector(".information1Crew h1")
let subTitleCrew = document.querySelector(".information1Crew p")
let peoples = document.querySelector(".jobs img")

for (let i = 0; i < lisCrew.length; i++) {

    lisCrew[0].classList.add('active')
    lisCrew[i].classList.remove('active')

    jobs.innerHTML = crew[0].job
    names.innerHTML = crew[0].name
    subTitleCrew.innerHTML = crew[0].paragraphCrew
    peoples.src = crew[0].imgPeople
    
    lisCrew[i].addEventListener('click', function() {

        for (const el of lisCrew) {
            el.classList.remove('active');
        }

        this.classList.add('active');

        jobs.innerHTML = crew[i].job
        names.innerHTML = crew[i].name
        subTitleCrew.innerHTML = crew[i].paragraphCrew
        peoples.src = crew[i].imgPeople
    });
}