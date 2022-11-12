//Create Map
const map = L.map('leafletMap').setView([38.9, -77.04], 12.3);
const attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution: attr, className: 'darkMode'});
let addTiles = tiles.addTo(map);

//Create Marker Adding function
let capitalBikeIcon = L.icon({
    iconUrl: 'capitalBike.png',
    iconSize: [40,28],
    iconAnchor: [28,14]
});

let helbizScooterIcon = L.icon({
    iconUrl: 'helbizScooter.png',
    iconSize: [40,28],
    iconAnchor: [28,14]
});

let addCapitalMarker = function(lat,lon) {
    L.marker([lat,lon], {icon: capitalBikeIcon}).addTo(map)
};

let addHelbizMarker = function(lat,lon) {
    L.marker([lat,lon], {icon: helbizScooterIcon}).addTo(map)
};


export {map, addTiles, addCapitalMarker, addHelbizMarker};


