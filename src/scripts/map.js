
//Create Map
const attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const map = L.map('leafletMap').setView([38.9, -77.04], 12.3);
const tiles = L.tileLayer(tileUrl,{attribution: attr, className: 'darkMode'});
let addTiles = tiles.addTo(map);

export {map, addTiles};

