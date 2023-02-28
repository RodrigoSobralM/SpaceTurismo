const destination = [
                    {   
                        imgPlanet: "assets/moon.svg", 
                        title: "MOON", 
                        paragraph: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                        distance: "384,400 km",
                        travelTime: "3 days",
                    },
                    {
                        imgPlanet: "assets/mars.svg",
                        title: "MARS",
                        paragraph: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                        distance: "225 MIL. km",
                        travelTime: "9 months"
                    },
                    {
                        imgPlanet: "assets/europa.svg",
                        title: "EUROPA",
                        paragraph: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                        distance: "628 MIL. km",
                        travelTime: "3 years"
                    },
                    {
                        imgPlanet: "assets/titan.svg",
                        title: "TITAN",
                        paragraph: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                        distance: "1.6 BIL. km",
                        travelTime: "7 years"
                    }
                    ]

let lisPlanet = document.querySelectorAll(".information1Dest li")
let planet = document.querySelector("#planet img")
let titles = document.querySelector(".information1Dest h1")
let subTitleDest = document.querySelector(".information1Dest p")
let distances = document.querySelector(".distances")
let travels = document.querySelector(".travels")

for(let i = 0; i < lisPlanet.length; i++) {

    lisPlanet[0].classList.add('active')
    lisPlanet[i].classList.remove('active');
    
    planet.src = destination[0].imgPlanet
    titles.innerHTML = destination[0].title
    subTitleDest.innerHTML = destination[0].paragraph
    distances.innerHTML = destination[0].distance
    travels.innerHTML = destination[0].travelTime

    lisPlanet[i].addEventListener('click', function() {

        for (const el of lisPlanet) {

            el.classList.remove('active');

        }
        
        this.classList.add('active')
        
        planet.src = destination[i].imgPlanet
        titles.innerHTML = destination[i].title
        subTitleDest.innerHTML = destination[i].paragraph
        distances.innerHTML = destination[i].distance
        travels.innerHTML = destination[i].travelTime

    });
}








