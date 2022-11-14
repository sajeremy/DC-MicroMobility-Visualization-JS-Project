
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

const markerDivElements = document.getElementsByClassName("leaflet-pane leaflet-marker-pane")
let buttonArr = [];

const helbizButton = document.getElementById("helbizFilter")
helbizButton.addEventListener("click",function() {
    // if (markerDivElements) {markerDivElements[0].remove()};
    // const newMarkerDiv = document.createElement("div");
    // newMarkerDiv.setAttribute("class","leaflet-pane leaflet-marker-pane")
    // markerDivElementParent[0].appendChild(newMarkerDiv);

    if (!buttonArr.includes("helbiz")) {
        buttonArr.push("helbiz");
        getHelbizScooter();
    } else {
        while (markerDivElements[0].firstChild) {
            markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        }
        let idx = buttonArr.findIndex(el => el === "helbizer");
        buttonArr.splice(idx,1);

    }
    
    
});

const capitalButton = document.getElementById("capitalFilter")
capitalButton.addEventListener("click",function() {
    // debugger
    // markerDivElements[0].remove();
    while (markerDivElements[0].firstChild) {
        markerDivElements[0].removeChild(markerDivElements[0].lastChild)
    }
    getCapitalBike();
});

const birdButton = document.getElementById("birdFilter")
birdButton.addEventListener("click",function() {
    // markerDivElements[0].remove();
    // getBirdScooter();
    while (markerDivElements[0].firstChild) {
        markerDivElements[0].removeChild(markerDivElements[0].lastChild)
    }
});

const allButton = document.getElementById("allFilter")
allButton.addEventListener("click",function() {

    getCapitalBike();
    getHelbizScooter();
    getBirdScooter();
});

// map;
// addTiles;


// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });



