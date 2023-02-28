const tech = [
    {subTitleTech: "THE TERMINOLOGY…", imgRockets: "assets/launch.svg" , titleTech: "LAUNCH VEHICLE", paragraphTechs: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},
    {subTitleTech: "THE TERMINOLOGY…", imgRockets: "assets/space.svg" , titleTech: "SPACEPORT", paragraphTechs: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},
    {subTitleTech: "THE TERMINOLOGY…", imgRockets: "assets/capsule.svg" , titleTech: "SPACE CAPSULE", paragraphTechs: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}
]

let lisTech = document.querySelectorAll(".information1Tech li")
let subTitlesTech = document.querySelector(".information1Tech h2")
let titlesTech = document.querySelector(".information1Tech h1")
let paragraphTech = document.querySelector(".information1Tech p")
let rockets = document.querySelector(".information1Tech img")

for (let i = 0; i < lisTech.length; i++) {

    lisTech[0].classList.add('active')
    lisTech[i].classList.remove('active')

    subTitlesTech.innerHTML = tech[0].subTitleTech
    titlesTech.innerHTML = tech[0].titleTech
    paragraphTech.innerHTML = tech[0].paragraphTechs
    rockets.src = tech[0].imgRockets

    lisTech[i].addEventListener('click', function() {

        for (const el of lisTech) {
            el.classList.remove('active');
        }

        this.classList.add('active');

        subTitlesTech.innerHTML = tech[i].subTitleTech
        titlesTech.innerHTML = tech[i].titleTech
        paragraphTech.innerHTML = tech[i].paragraphTechs
        rockets.src = tech[i].imgRockets
    });
}