//Font Awesome Icons
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

//Bike, Scooter APIs with map
import { map } from "./scripts/map";
import {
  capitalMarkerArr,
  getCapitalBike,
  capitalMarkerClusters,
} from "./scripts/capitalBike";
import {
  getHelbizScooter,
  helbizMarkerArr,
  helbizMarkerClusters,
} from "./scripts/helbizScooter";
import {
  getBirdScooter,
  birdMarkerArr,
  birdMarkerClusters,
} from "./scripts/birdScooter";

const markerDivElements = document.getElementsByClassName(
  "leaflet-pane leaflet-marker-pane"
);
let buttonArr = [];
const loadingModal = document.getElementById("loading-microMobilityModal");

const helbizButton = document.getElementById("helbizFilter");
helbizButton.addEventListener("click", function () {
  // if (markerDivElements) {markerDivElements[0].remove()};
  // const newMarkerDiv = document.createElement("div");
  // newMarkerDiv.setAttribute("class","leaflet-pane leaflet-marker-pane")
  // markerDivElementParent[0].appendChild(newMarkerDiv);

  if (!buttonArr.includes("helbiz")) {
    loadingModal.style.display = "block";
    buttonArr.push("helbiz");
    document.getElementById("helbizFilter").className = "blueFilter";
    getHelbizScooter();
  } else {
    helbizMarkerClusters.removeLayers(helbizMarkerArr);
    document.getElementById("helbizFilter").className = "noFilter";
    let idx = buttonArr.findIndex((el) => el === "helbiz");
    buttonArr.splice(idx, 1);

    document.getElementById("helbiz-title").innerHTML = "";
    document.getElementById("helbizDate").innerHTML = "";
    document.getElementById("helbizScooter").innerHTML = "";

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

const capitalButton = document.getElementById("capitalFilter");
capitalButton.addEventListener("click", function () {
  if (!buttonArr.includes("capital")) {
    loadingModal.style.display = "block";
    buttonArr.push("capital");
    document.getElementById("capitalFilter").className = "redFilter";
    getCapitalBike();
  } else {
    capitalMarkerClusters.removeLayers(capitalMarkerArr);
    document.getElementById("capitalFilter").className = "noFilter";
    let idx = buttonArr.findIndex((el) => el === "capital");
    buttonArr.splice(idx, 1);

    document.getElementById("capital-title").innerHTML = "";
    document.getElementById("capitalDate").innerHTML = "";
    document.getElementById("capitalBike").innerHTML = "";

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

const birdButton = document.getElementById("birdFilter");
birdButton.addEventListener("click", async function () {
  if (!buttonArr.includes("bird")) {
    loadingModal.style.display = "block";
    buttonArr.push("bird");
    let birdFilter = document.getElementById("birdFilter");
    birdFilter.className = "greenFilter";
    const result = await getBirdScooter();

    if (result === null) {
      let idx = buttonArr.findIndex((el) => el === "bird");
      buttonArr.splice(idx, 1);
    }
  } else {
    birdMarkerClusters.removeLayers(birdMarkerArr);
    document.getElementById("birdFilter").className = "noFilter";
    let idx = buttonArr.findIndex((el) => el === "bird");
    buttonArr.splice(idx, 1);

    document.getElementById("bird-title").innerHTML = "";
    document.getElementById("birdDate").innerHTML = "";
    document.getElementById("birdScooter").innerHTML = "";

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
const modalContainer = document.getElementById("microMobilityModal");
const viewMap = document.getElementById("leafletMap");
const birdDateNum = document.getElementById("Bird-Date-Number")
  ? document.getElementById("Bird-Date-Number")
  : null;
const helbizDateNum = document.getElementById("Helbiz-Date-Number")
  ? document.getElementById("Helbiz-Date-Number")
  : null;
const capitalDateNum = document.getElementById("Capital-Date-Number")
  ? document.getElementById("Capital-Date-Number")
  : null;

modalContainer.addEventListener("click", function (event) {
  modalContainer.style.display = "none";
  viewMap.style.opacity = "100";
  birdDateNum ? (birdDateNum.style.color = "#2f455b") : null;
  helbizDateNum ? (helbizDateNum.style.color = "#2f455b") : null;
  capitalDateNum ? (capitalDateNum.style.color = "#2f455b") : null;
});

const infoButton = document.getElementById("modalToggle");
const modalAppear = document.getElementById("appear");

infoButton.addEventListener("click", function () {
  modalContainer.style.display = "block";
  viewMap.style.opacity = "0";
  birdDateNum ? (birdDateNum.style.color = "#b7cce0") : null;
  helbizDateNum ? (helbizDateNum.style.color = "#b7cce0") : null;
  capitalDateNum ? (capitalDateNum.style.color = "#b7cce0") : null;
  let opa = 0;
  const inc = 0.05;
  while (opa < 1) {
    setInterval(function appear() {
      opa = opa + inc;
      modalAppear.style.opacity = opa;
    }, 0.1);
    opa = opa + inc;
  }
});

// //Alternate Approach for selecting outside of modal
// window.addEventListener("click",function(event) {
//     if (event.target == modalContainer) {
//         modalContainer.style.display = "none";
//         viewMap.style.opacity = "100";
//         console.log("Window was clicked");
//     }
// });
