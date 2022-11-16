import {map} from './map'

//Declare Constants and Variables
const birdScooterURL = "https://cryptic-beyond-07137.herokuapp.com/https://gbfs.bird.co/dc" 
let birdData;
let lat;
let lon;
let birdMarkerArr;
let firstCluster = 0;

//Fetch data from Bird Scooter API
export async function getBirdScooter() {
    const response = await fetch(birdScooterURL);
    birdData = await response.json();

    console.log("This is Bird Scooter Data");
    console.log(birdData);
    const birdScooterArr = birdData.data.bikes;

    let numBikes = birdScooterArr.length;
    let availableBikes = 0;
    birdMarkerArr = [];

    // Create markers for bikes not disabled or reserved 
    for (let i=0; i < numBikes; i++) {     
        if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
            lat = birdScooterArr[i].lat
            lon = birdScooterArr[i].lon
            birdMarkerArr.push(addBirdMarker(lat, lon,birdScooterArr[i], firstCluster)); 
            availableBikes += 1;
            // addBirdMarker(lat, lon, birdScooterArr[i]);  
        };
    }
    map.addLayer(birdMarkerClusters)
    updateNumBirdScooters(availableBikes);
}

//Bird Scooter Icon Image
let birdScooterIcon = L.icon({
    iconUrl: './imgs/green.png',
    iconSize: [36,36],
    iconAnchor: [28,14]
});

//Create Bird Scooter Marker Cluster
let birdMarkerClusters = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
    return L.divIcon({html: "<div class='greenMarker'>"
                            +"<img src='./imgs/green.png'><b>"
                            +cluster.getChildCount()
                            +"<b></div>",
                            className: 'birdIcon',
                            iconAnchor: [24,24]});
},
spiderfyOnMaxZoom: true,
showCoverageOnHover: false,
zoomToBoundsOnClick: true,
animate: true
});

//Bird Scooter Set Marker onto Map
let addBirdMarker = function(lat,lon,scooter, firstCluster) {
    //Remove previous cluster layer after every API call once initiated
    if (firstCluster > 0) {
        birdMarkerClusters.removeLayer(birdMarker);
    } else {
        firstCluster = 1;
    }
    //Create Marker and Pop Up for Visualization
    let birdMarker = L.marker([lat,lon], {icon: birdScooterIcon})
    let birdPopup = '<b>Bird</b> <br>' + 
                    "<img src='./imgs/birdScooter.png' width='100px'>" +
                    `Last Updated: ${Date()}<br>` +
                    `Charge: ${scooter.battery_level}%<br>`+
                    '<a href="https://www.bird.co/bird-access-dc/"' +
                    'target="_blank">Reserve Me</a>'
    birdMarker.bindPopup(birdPopup).openPopup();

    birdMarkerClusters.addLayer(birdMarker);
    return birdMarker;
    // birdMarker.addTo(map)
};

//Bird Scooter Async Function Helpers
function bikeNotDisabeled(idx) {
    return birdData.data.bikes[idx].is_disabled === false;
};
function bikeNotReserved(idx) {
    return birdData.data.bikes[idx].is_reserved === false;
};
function updateNumBirdScooters(availableBikes) {
    let numBirdScooters = `Currently ${availableBikes} Bird scooters are available`; 
    document.getElementById("birdScooter").innerHTML = numBirdScooters;
}

export {birdMarkerArr, birdMarkerClusters};


