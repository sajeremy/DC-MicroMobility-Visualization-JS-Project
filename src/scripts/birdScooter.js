//Font Awesome Icons
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { map } from "./map";
// import { debug } from "webpack";

//Declare Constants and Variables
// const birdScooterURL = "https://cryptic-beyond-07137.herokuapp.com/https://gbfs.bird.co/dc"
const birdScooterURL = "https://gbfs.bird.co/dc";
// let birdData;
let lat;
let lon;
let birdMarkerArr;
let firstCluster = 0;

// //Fetch data from Bird Scooter API
// export async function getBirdScooter() {
//   const response = await fetch(birdScooterURL);
//   birdData = await response.json();

//   console.log("This is Bird Scooter Data");
//   console.log(birdData);
//   const birdScooterArr = birdData.data.bikes;

//   let numBikes = birdScooterArr.length;
//   let availableBikes = 0;
//   birdMarkerArr = [];

//   // Create markers for bikes not disabled or reserved
//   for (let i = 0; i < numBikes; i++) {
//     if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
//       lat = birdScooterArr[i].lat;
//       lon = birdScooterArr[i].lon;
//       birdMarkerArr.push(
//         addBirdMarker(lat, lon, birdScooterArr[i], firstCluster)
//       );
//       availableBikes += 1;
//       // addBirdMarker(lat, lon, birdScooterArr[i]);
//     }
//   }
//   map.addLayer(birdMarkerClusters);
//   updateNumBirdScooters(availableBikes);
// }

// //Fetch DC API bird data with backend
// export const getBirdScooter = (url = birdScooterURL) => {
//   fetch(`/cors?url=${encodeURIComponent(url)}`)
//     .then((res) => res.json())
//     .then((birdData) => {
//       console.log("This is Bird Scooter Data");
//       console.log(birdData);
//       console.log(birdData.data.bikes);
//     });
//   const birdScooterArr = birdData.data.bikes;

//   let numBikes = birdScooterArr.length;
//   let availableBikes = 0;
//   birdMarkerArr = [];

//   // Create markers for bikes not disabled or reserved
//   for (let i = 0; i < numBikes; i++) {
//     if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
//       lat = birdScooterArr[i].lat;
//       lon = birdScooterArr[i].lon;
//       birdMarkerArr.push(
//         addBirdMarker(lat, lon, birdScooterArr[i], firstCluster)
//       );
//       availableBikes += 1;
//       // addBirdMarker(lat, lon, birdScooterArr[i]);
//     }
//   }
//   map.addLayer(birdMarkerClusters);
//   updateNumBirdScooters(availableBikes);
// };

//Fetch DC API data with ES6 syntax
export async function getBirdScooter(url = birdScooterURL) {
  const authResponse = await fetch(`/auth`);
  const accessToken = await authResponse.json();

  const birdResponse = await fetch(
    `/bird?auth=${encodeURIComponent(accessToken)}`
  );
  const birdData = await birdResponse.json();
  console.log(birdData.birds);

  // const response = await fetch(`/cors?url=${encodeURIComponent(url)}`);
  // birdData = await response.json();
  // console.log("This is Bird Scooter Data");
  // console.log(birdData);

  const birdScooterArr = birdData.birds;

  let numBikes = birdScooterArr.length;
  let availableBikes = 0;
  birdMarkerArr = [];

  // Create markers for bikes not disabled or reserved
  for (let i = 0; i < numBikes; i++) {
    // if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
      lat = birdScooterArr[i].location.latitude;
      lon = birdScooterArr[i].location.longitude;
      birdMarkerArr.push(
        addBirdMarker(lat, lon, birdScooterArr[i], firstCluster)
      );
      availableBikes += 1;
      // addBirdMarker(lat, lon, birdScooterArr[i]);
    // }
  }
  map.addLayer(birdMarkerClusters);
  updateNumBirdScooters(availableBikes);
}

//Bird Scooter Icon Image
let birdScooterIcon = L.icon({
  iconUrl: "./imgs/green.png",
  iconSize: [36, 36],
  iconAnchor: [28, 14],
});

//Create Bird Scooter Marker Cluster
let birdMarkerClusters = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html:
        "<div class='greenMarker'>" +
        "<img src='./imgs/green.png'><b>" +
        cluster.getChildCount() +
        "<b></div>",
      className: "birdIcon",
      iconAnchor: [24, 24],
    });
  },
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  animate: true,
});

//Bird Scooter Set Marker onto Map
let addBirdMarker = function (lat, lon, scooter, firstCluster) {
  //Remove previous cluster layer after every API call once initiated
  if (firstCluster > 0) {
    birdMarkerClusters.removeLayer(birdMarker);
  } else {
    firstCluster = 1;
  }
  //Create Marker and Pop Up for Visualization
  let birdMarker = L.marker([lat, lon], { icon: birdScooterIcon });
  let birdPopup =
    "<b>Bird</b> <br>" +
    "<img src='./imgs/birdScooter.png' width='100px'>" +
    `<b>Last Updated:</b><br> ${Date().slice(0, 24)}<br>` +
    "<b>Charge:<b>" +
    ` ${scooter.battery_level}%` +
    "  " +
    batteryIcon(scooter.battery_level) +
    "<br>" +
    '<a href="https://www.bird.co/"' +
    'target="_blank">Reserve Me</a>';
  birdMarker.bindPopup(birdPopup).openPopup();
  birdMarkerClusters.addLayer(birdMarker);
  return birdMarker;
  // birdMarker.addTo(map)
};

//Bird Scooter Async Function Helpers
// function bikeNotDisabeled(idx) {
//   return birdData.data.bikes[idx].is_disabled === false;
// }
// function bikeNotReserved(idx) {
//   return birdData.data.bikes[idx].is_reserved === false;
// }
function updateNumBirdScooters(availableBikes) {
  let numBirdScooters = `Currently ${availableBikes} scooters are available`;
  document.getElementById(
    "birdDate"
  ).innerHTML = `Bird Last Updated: ${Date().slice(0, 24)}`;
  document.getElementById("birdScooter").innerHTML = numBirdScooters;
}
function batteryIcon(batteryLevel) {
  let result;

  if (batteryLevel <= 15) {
    result = '<i class="fa-solid fa-battery-empty fa-2xl"></i>';
  } else if (batteryLevel <= 40 && batteryLevel > 15) {
    result = '<i class="fa-solid fa-battery-quarter fa-2xl"></i>';
  } else if (batteryLevel <= 65 && batteryLevel > 40) {
    result = '<i class="fa-solid fa-battery-half fa-2xl"></i>';
  } else if (batteryLevel <= 85 && batteryLevel > 65) {
    result = '<i class="fa-solid fa-battery-three-quarters fa-2xl"></i>';
  } else {
    result = '<i class="fa-solid fa-battery-full fa-2xl"></i>';
  }
  return result;
}

export { birdMarkerArr, birdMarkerClusters };
