
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
        document.getElementById('helbizFilter').className = "greenFilter"
        getHelbizScooter();
    } else {
        document.getElementById('helbizFilter').className = "noFilter"
        document.getElementById('capitalFilter').className = "noFilter"
        document.getElementById('birdFilter').className = "noFilter"
        while (markerDivElements[0].firstChild) {
            markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        }
        let idx = buttonArr.findIndex(el => el === "helbiz");
        buttonArr.splice(idx,1);

    }
      
});

const capitalButton = document.getElementById("capitalFilter")
capitalButton.addEventListener("click",function() {
    // debugger
    // markerDivElements[0].remove();
    // while (markerDivElements[0].firstChild) {
    //     markerDivElements[0].removeChild(markerDivElements[0].lastChild)
    // }
    // getCapitalBike();

    if (!buttonArr.includes("capital")) {
        buttonArr.push("capital");
        document.getElementById('capitalFilter').className = "greenFilter"
        getCapitalBike();
    } else {
        document.getElementById('helbizFilter').className = "noFilter"
        document.getElementById('capitalFilter').className = "noFilter"
        document.getElementById('birdFilter').className = "noFilter"
        while (markerDivElements[0].firstChild) {
            markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        }
        let idx = buttonArr.findIndex(el => el === "capital");
        buttonArr.splice(idx,1);

    }
});

const birdButton = document.getElementById("birdFilter")
birdButton.addEventListener("click",function() {

    if (!buttonArr.includes("bird")) {
        buttonArr.push("bird");
        document.getElementById('birdFilter').className = "greenFilter"
        getBirdScooter();
    } else {
        document.getElementById('helbizFilter').className = "noFilter"
        document.getElementById('capitalFilter').className = "noFilter"
        document.getElementById('birdFilter').className = "noFilter"
        while (markerDivElements[0].firstChild) {
            markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        }
        let idx = buttonArr.findIndex(el => el === "bird");
        buttonArr.splice(idx,1);

    }

});

// const allButton = document.getElementById("allFilter")
// allButton.addEventListener("click",function() {

//     getCapitalBike();
//     getHelbizScooter();
//     getBirdScooter();
// });

// map;
// addTiles;


// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });



