import {map} from './map'

//Declare Constants and Variables
const capitalBikeURL = "https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json" 
let capitalData;
let lat;
let lon;
let firstCluster = 0;

//Fetch data from Capital Bikeshare API
export async function getCapitalBike() {
    const response = await fetch(capitalBikeURL);
    capitalData = await response.json();

    console.log("This is Capital Bike Data");
    console.log(capitalData);
    const capitalBikeArr = capitalData.data.bikes;

    let numBikes = capitalBikeArr.length;
    let availableBikes = 0;
    let bikeMarkerArr = [];
    

    // Create markers for bikes not disabled or reserved 
    for (let i=0; i < 1; i++) {  
        bikeMarkerArr = [];   
        if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
            lat = capitalBikeArr[i].lat
            lon = capitalBikeArr[i].lon
            bikeMarkerArr.push(addCapitalMarker(lat, lon, firstCluster));  
            availableBikes += 1;
        };
    }
    
    map.addLayer(capitalMarkerClusters)
    updateNumCapitalBikes(availableBikes);
}

//Capital Bike Icon Image
let capitalBikeIcon = L.icon({
    iconUrl: './imgs/red.png',
    iconSize: [40,28],
    iconAnchor: [28,14]
});

//Capital Bike Marker Cluster
let capitalMarkerClusters = L.markerClusterGroup({
    spiderfyOnMaxZoom: false,
	showCoverageOnHover: false,
	zoomToBoundsOnClick: true
});

//Capital Bike Set Maker onto Map
let addCapitalMarker = function(lat,lon, firstCluster) {
    if (firstCluster > 0) {
        capitalMarkerClusters.removeLayer(capitalMarker);
    } else {
        firstCluster = 1;
    }

    let capitalMarker = L.marker([lat,lon], {icon: capitalBikeIcon})
    let capitalPopup = '<b>Capital Bikeshare</b> <br>' +
                        "<img src='./imgs/capitalBike.png'>" + 
                        `Last Updated: ${Date()}<br>` +
                        '<a href="https://capitalbikeshare.com/"' +
                        'target="_blank">Reserve Me</a>'
    capitalMarker.bindPopup(capitalPopup).openPopup();

    // capitalMarker.addTo(map)
    capitalMarkerClusters.addLayer(capitalMarker)
    debugger
    return capitalMarker;
};

//Capital Bike Async Function Helpers
function bikeNotDisabeled(idx) {
    return capitalData.data.bikes[idx].is_disabled === 0;
};
function bikeNotReserved(idx) {
    return capitalData.data.bikes[idx].is_reserved === 0;
};
function updateNumCapitalBikes(availableBikes) {
    let numCapitalBikes = `Currently ${availableBikes} Capital bikes are available`; 
    document.getElementById("capitalBike").innerHTML = numCapitalBikes;
}