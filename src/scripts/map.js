
//Create Map
const attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';


const tiles = L.tileLayer(tileUrl,{id: 'mapbox/streets-v11',attribution: attr, className: 'darkMode'});
const map = L.map('leafletMap').setView([38.9, -77.04], 12.3);
let addTiles = tiles.addTo(map);

//Create Overlays
// const capitalBikes = L.control.layers
// L.control.layers(baseMaps, overlayMaps).addTo(map)
// L.layerGroup([littleton, denver, aurora, golden])

export {map, addTiles};

