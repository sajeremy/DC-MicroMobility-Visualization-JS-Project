import { map } from "./map";

//Declare Constants and Variables
const helbizScooterURL =
  "https://admin-api-prod.helbizscooters.com//reporting/washington/gbfs/free_bike_status.json";
let helbizData;
let lat;
let lon;
let helbizMarkerArr;
let firstCluster = 0;

//Fetch data from Helbiz Scooter API
export async function getHelbizScooter() {
  const response = await fetch(helbizScooterURL);
  helbizData = await response.json();

  console.log("This is Helbiz Scooter Data");
  console.log(helbizData);
  const helbizScooterArr = helbizData.data.bikes;

  let numBikes = helbizScooterArr.length;
  let availableBikes = 0;
  helbizMarkerArr = [];

  // Create markers for bikes not disabled or reserved
  for (let i = 0; i < numBikes; i++) {
    if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
      lat = helbizScooterArr[i].lat;
      lon = helbizScooterArr[i].lon;
      helbizMarkerArr.push(addHelbizMarker(lat, lon, firstCluster));
      availableBikes += 1;
      // addHelbizMarker(lat, lon);
    }
  }

  map.addLayer(helbizMarkerClusters);
  updateNumHelbizScooters(availableBikes);

  // console.log(map.getBounds()._northEast.lat);
  // console.log(map.getBounds()._northEast.lng);
  // console.log(map.getBounds()._southWest.lat);
  // console.log(map.getBounds()._southWest.lng);
  // const mapPaneXY = document.getElementsByClassName("leaflet-pane leaflet-map-pane");
  // const mapPaneZ = document.getElementsByClassName("leaflet-proxy leaflet-zoom-animated");
  // console.log(mapPaneXY)
  // console.log(mapPaneXY[0])
  // console.log(mapPaneZ)
  // console.log(mapPaneZ[0])
}

//Helbiz Scooter Icon Image
let helbizScooterIcon = L.icon({
  iconUrl: "./imgs/blue.png",
  iconSize: [36, 36],
  iconAnchor: [28, 14],
});

//Create Helbiz Scooter Marker Cluster
let helbizMarkerClusters = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html:
        "<div class='blueMarker'>" +
        "<img src='./imgs/blue.png'><b>" +
        cluster.getChildCount() +
        "<b></div>",
      className: "helbizIcon",
      iconAnchor: [24, 24],
    });
  },
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  animate: true,
});

//Helbiz Scooter Set Marker onto Map
let addHelbizMarker = function (lat, lon, firstCluster) {
  //Remove previous cluster layer after every API call once initiated
  if (firstCluster > 0) {
    helbizMarkerClusters.removeLayer(helbizMarker);
  } else {
    firstCluster = 1;
  }
  //Create Marker and Pop Up for Visualization
  let helbizMarker = L.marker([lat, lon], { icon: helbizScooterIcon });
  let helbizPopup =
    "<b>Helbiz</b> <br>" +
    "<img src='./imgs/helbizScooter.png' width='100px'>" +
    `<b>Last Updated:</b><br> ${helbizFetchDate}<br>` +
    '<b><a href="https://helbiz.com/login"' +
    'target="_blank">Reserve Me</a></b>';
  helbizMarker.bindPopup(helbizPopup).openPopup();

  helbizMarkerClusters.addLayer(helbizMarker);
  return helbizMarker;

  // helbizMarker.addTo(map)
};

//Helbiz Scooter Async Function Helpers
function bikeNotDisabeled(idx) {
  return helbizData.data.bikes[idx].is_disabled === 0;
}
function bikeNotReserved(idx) {
  return helbizData.data.bikes[idx].is_reserved === 0;
}
let helbizFetchDate = new Date().toLocaleString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
function updateNumHelbizScooters(availableBikes) {
  let numHelbizScooters = `Currently <span>${availableBikes}</span> Helbiz Scooters are available`;
  document.getElementById(
    "helbizDate"
  ).innerHTML = `Last Updated: <span>${helbizFetchDate}</span>`;
  document.getElementById("helbizScooter").innerHTML = numHelbizScooters;
  document.getElementById("helbiz-title").innerHTML = "Helbiz";
}

export { helbizMarkerArr, helbizMarkerClusters };

// function helbizMarkerID() {
//     const markerDivElements = document.getElementsByClassName("leaflet-pane leaflet-marker-pane")
//     let marker = markerDivElements[0].lastChild;
//     let att = document.createAttribute("id");
//     att.value = "helbizMarker";
//     marker.setAttributeNode(att);
// }
