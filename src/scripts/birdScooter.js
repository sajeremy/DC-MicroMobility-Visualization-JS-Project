import {map} from './map'

//Declare Constants and Variables
const birdScooterURL = "https://cryptic-beyond-07137.herokuapp.com/https://gbfs.bird.co/dc" 
let birdData;
let lat;
let lon;

//Fetch data from Bird Scooter API
export async function getBirdScooter() {
    const response = await fetch(birdScooterURL);
    birdData = await response.json();

    console.log("This is Bird Scooter Data");
    console.log(birdData);
    const birdScooterArr = birdData.data.bikes;

    let numBikes = birdScooterArr.length;
    let availableBikes = 0;

    // Create markers for bikes not disabled or reserved 
    for (let i=0; i < numBikes; i++) {     
        if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
            lat = birdScooterArr[i].lat
            lon = birdScooterArr[i].lon
            addBirdMarker(lat, lon, birdScooterArr[i]);  
            availableBikes += 1;
        };
    }
    updateNumBirdScooters(availableBikes);
}

//Bird Scooter Icon Image
let birdScooterIcon = L.icon({
    iconUrl: './imgs/green.png',
    iconSize: [40,28],
    iconAnchor: [28,14]
});

//Bird Scooter Set Marker onto Map
let addBirdMarker = function(lat,lon,scooter) {
    let birdMarker = L.marker([lat,lon], {icon: birdScooterIcon})
    birdMarker.bindPopup('<b>Bird</b> <br>' + 
                "<img src='./imgs/helbizScooter.png' width='100px'>" +
                `Last Updated: ${Date()}<br>` +
                `Charge: ${scooter.battery_level}%<br>`+
                '<a href="https://www.bird.co/bird-access-dc/"' +
                'target="_blank">Reserve Me</a>')
                 .openPopup();
    birdMarker.addTo(map)

    return birdMarker;
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


