
//Font Awesome Icons
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//Bike, Scooter APIs with map
import {map} from './scripts/map'
import {capitalMarkerArr, getCapitalBike, capitalMarkerClusters} from './scripts/capitalBike'
import {getHelbizScooter, helbizMarkerArr, helbizMarkerClusters} from './scripts/helbizScooter'
import {getBirdScooter, birdMarkerArr, birdMarkerClusters} from './scripts/birdScooter'

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
        helbizMarkerClusters.removeLayers(helbizMarkerArr)
        document.getElementById('helbizFilter').className = "noFilter"
        let idx = buttonArr.findIndex(el => el === "helbiz");
        buttonArr.splice(idx,1);

        // // // **Alternative Approach using DOM Manipulation**
        // document.getElementById('helbizFilter').className = "noFilter"
        // document.getElementById('capitalFilter').className = "noFilter"
        // document.getElementById('birdFilter').className = "noFilter"
        // while (markerDivElements[0].firstChild) {
        //     markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        // }
        // let idx = buttonArr.findIndex(el => el === "helbiz");
        // buttonArr.splice(idx,1);

    }
      
});

const capitalButton = document.getElementById("capitalFilter")
capitalButton.addEventListener("click",function() {

    if (!buttonArr.includes("capital")) {
        buttonArr.push("capital");
        document.getElementById('capitalFilter').className = "greenFilter"
        getCapitalBike();
    } else {
        capitalMarkerClusters.removeLayers(capitalMarkerArr)
        document.getElementById('capitalFilter').className = "noFilter"
        let idx = buttonArr.findIndex(el => el === "capital");
        buttonArr.splice(idx,1);
    
        // // // **Alternative Approach using DOM Manipulation**
        // document.getElementById('helbizFilter').className = "noFilter"
        // document.getElementById('capitalFilter').className = "noFilter"
        // document.getElementById('birdFilter').className = "noFilter"
        // while (markerDivElements[0].firstChild) {
        //     markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        // }
        // let idx = buttonArr.findIndex(el => el === "capital");
        // buttonArr.splice(idx,1);

    }
});

const birdButton = document.getElementById("birdFilter")
birdButton.addEventListener("click",function() {

    if (!buttonArr.includes("bird")) {
        buttonArr.push("bird");
        document.getElementById('birdFilter').className = "greenFilter"
        getBirdScooter();
    } else {
        birdMarkerClusters.removeLayers(birdMarkerArr)
        document.getElementById('birdFilter').className = "noFilter"
        let idx = buttonArr.findIndex(el => el === "bird");
        buttonArr.splice(idx,1);

        // // // **Alternative Approach using DOM Manipulation**
        // document.getElementById('helbizFilter').className = "noFilter"
        // document.getElementById('capitalFilter').className = "noFilter"
        // document.getElementById('birdFilter').className = "noFilter"
        // while (markerDivElements[0].firstChild) {
        //     markerDivElements[0].removeChild(markerDivElements[0].lastChild)
        // }
        // let idx = buttonArr.findIndex(el => el === "bird");
        // buttonArr.splice(idx,1);

    }

});

//Close Modal when Clicking outside of Modal Region
const modal = document.getElementById("microMobilityModal")
const viewMap = document.getElementById("leafletMap")

window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        viewMap.style.opacity = "100";
        console.log("Window was clicked");
    }
});

// console.log(map.getBounds()._northEast.lat);
// console.log(map.getBounds()._northEast.lng);
// console.log(map.getBounds()._southWest.lat);
// console.log(map.getBounds()._southWest.lng);

viewMap.addEventListener("drag",function(event) {
    console.log("map was clicked")
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



