import {map} from './map'

//Declare Constants and Variables
const helbizScooterURL = "https://admin-api-prod.helbizscooters.com//reporting/washington/gbfs/free_bike_status.json"
let helbizData;
let lat;
let lon;

//Fetch data from Helbiz Scooter API
export async function getHelbizScooter() {
    const response = await fetch(helbizScooterURL);
    helbizData = await response.json();

    console.log("This is Helbiz Scooter Data");
    console.log(helbizData);
    const helbizScooterArr = helbizData.data.bikes;

    let numBikes = helbizScooterArr.length;
    let availableBikes = 0;

    // Create markers for bikes not disabled or reserved 
    for (let i=0; i < numBikes; i++) {     
        if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
            lat = helbizScooterArr[i].lat
            lon = helbizScooterArr[i].lon
            addHelbizMarker(lat, lon);  

            //add id attribute for bike and scooter
            // helbizMarkerID();
            
            // debugger
            availableBikes += 1;
        };
    }
    updateNumHelbizScooters(availableBikes);
}

//Helbiz Scooter Icon Image
let helbizScooterIcon = L.icon({
    iconUrl: './imgs/blue.png',
    iconSize: [40,28],
    iconAnchor: [28,14]
});

//Helbiz Scooter Set Marker onto Map
let addHelbizMarker = function(lat,lon) {
    let helbizMarker = L.marker([lat,lon], {icon: helbizScooterIcon})
    helbizMarker.bindPopup('<b>Helbiz</b> <br>' +
                "<img src='./imgs/helbizScooter.png'>" +
                '<a href="https://helbiz.com/"' +
                'target="_blank">Reserve Me</a>')
                 .openPopup();
    helbizMarker.addTo(map)

    // return helbizMarker;
};

//Helbiz Scooter Async Function Helpers
function bikeNotDisabeled(idx) {
    return helbizData.data.bikes[idx].is_disabled === 0;
};
function bikeNotReserved(idx) {
    return helbizData.data.bikes[idx].is_reserved === 0;
};
function updateNumHelbizScooters(availableBikes) {
    let numHelbizScooters = `Currently ${availableBikes} Helbiz scooters are available`; 
    document.getElementById("helbizScooter").innerHTML = numHelbizScooters;
}
// function helbizMarkerID() {
//     const markerDivElements = document.getElementsByClassName("leaflet-pane leaflet-marker-pane")
//     let marker = markerDivElements[0].lastChild;
//     let att = document.createAttribute("id");
//     att.value = "helbizMarker";
//     marker.setAttributeNode(att);
// }