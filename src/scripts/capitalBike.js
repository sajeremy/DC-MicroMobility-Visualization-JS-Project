import { map } from "./map";

//Declare Constants and Variables
const capitalBikeURL =
  "https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json";
let capitalData;
let lat;
let lon;
let capitalMarkerArr;
let firstCluster = 0;

//Fetch data from Capital Bikeshare API
export async function getCapitalBike() {
  const loadingModal = document.getElementById("loading-microMobilityModal");
  const response = await fetch(capitalBikeURL);
  capitalData = await response.json();

  // console.log("This is Capital Bike Data");
  // console.log(capitalData);
  const capitalBikeArr = capitalData.data.bikes;

  let numBikes = capitalBikeArr.length;
  let availableBikes = 0;
  capitalMarkerArr = [];

  // Create markers for bikes not disabled or reserved
  for (let i = 0; i < numBikes; i++) {
    if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
      lat = capitalBikeArr[i].lat;
      lon = capitalBikeArr[i].lon;
      capitalMarkerArr.push(addCapitalMarker(lat, lon, firstCluster));
      availableBikes += 1;
    }
  }

  map.addLayer(capitalMarkerClusters);
  updateNumCapitalBikes(availableBikes);
  loadingModal.style.display = "none";
}

//Capital Bike Icon Image
let capitalBikeIcon = L.icon({
  iconUrl: "./imgs/red.png",
  iconSize: [36, 36],
  iconAnchor: [28, 14],
});

// // **Attempt for custom Icon creation inside markerClusterGroup**
// iconCreateFunction: function (cluster) {
//     let markers = cluster.getAllChildMarkers();
//     let html = '<div class="capital">' + markers.length + '</div>';
//     return L.divIcon({html: html, className: 'capital', iconSize: L.point(32,32)});
// },

//Create Capital Bike Marker Cluster
let capitalMarkerClusters = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html:
        "<div class='redMarker'>" +
        "<img src='./imgs/red.png'><b>" +
        cluster.getChildCount() +
        "<b></div>",
      className: "capitalIcon",
      iconAnchor: [24, 24],
    });
  },
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  animate: true,
});

//Capital Bike Set Maker onto Map
let addCapitalMarker = function (lat, lon, firstCluster) {
  //Remove previous cluster layer after every API call once initiated
  if (firstCluster > 0) {
    capitalMarkerClusters.removeLayer(capitalMarker);
  } else {
    firstCluster = 1;
  }
  //Create Marker and Pop Up for Visualization
  let capitalMarker = L.marker([lat, lon], { icon: capitalBikeIcon });
  let capitalPopup =
    "<b>Capital Bikeshare</b> <br>" +
    "<img src='./imgs/capitalBike.png'>" +
    `<b>Last Updated:</b><br> ${capitalFetchDate}<br>` +
    '<b><a href="https://account.lyft.com/findaccount?v=capital-bikeshare"' +
    'target="_blank">Reserve Me</a></b>';
  capitalMarker.bindPopup(capitalPopup).openPopup();

  // capitalMarker.addTo(map)
  capitalMarkerClusters.addLayer(capitalMarker);
  return capitalMarker;
};

//Capital Bike Async Function Helpers
function bikeNotDisabeled(idx) {
  return capitalData.data.bikes[idx].is_disabled === 0;
}
function bikeNotReserved(idx) {
  return capitalData.data.bikes[idx].is_reserved === 0;
}
let capitalFetchDate = new Date().toLocaleString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

function updateNumCapitalBikes(availableBikes) {
  let numCapitalBikes = `Currently <span>${availableBikes}</span> Capital Bikes are available`;
  document.getElementById(
    "capitalDate"
  ).innerHTML = `Last Updated: <span>${capitalFetchDate}</span>`;
  document.getElementById("capitalBike").innerHTML = numCapitalBikes;
  document.getElementById("capital-title").innerHTML = "Capital";
}

export { capitalMarkerArr, capitalMarkerClusters };
