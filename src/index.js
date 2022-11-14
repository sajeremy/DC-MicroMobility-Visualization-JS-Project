
//Font Awesome Icons
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//Bike, Scooter APIs with map
import {map, addTiles} from './scripts/map'
import {getCapitalBike} from './scripts/capitalBike'
import {getHelbizScooter} from './scripts/helbizScooter'
import {getBirdScooter} from './scripts/birdScooter'


const helbizButton = document.getElementById("helbizFilter")
const markerDivElements = document.getElementsByClassName("leaflet-pane leaflet-marker-pane")
helbizButton.addEventListener("click",function() {
    getHelbizScooter();
});

const capitalButton = document.getElementById("capitalFilter")
capitalButton.addEventListener("click",function() {
    getCapitalBike();
});

const birdButton = document.getElementById("birdFilter")
birdButton.addEventListener("click",function() {
    getBirdScooter();
});

const allButton = document.getElementById("allFilter")
allButton.addEventListener("click",function() {
    getCapitalBike();
    getHelbizScooter();
    getBirdScooter();
});

map;
addTiles;


// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });



