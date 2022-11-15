
//Create Map
// const attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attr2 = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ';
const tileUrl2 = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';

const tiles = L.tileLayer(tileUrl2,{attribution: attr2, className: 'darkMode'});
const map = L.map('leafletMap', {center: [38.9, -77.04], zoom: 13, maxZoom: 16.49});
let addTiles = tiles.addTo(map);

//Create Overlays
// const capitalBikes = L.control.layers
// L.control.layers(baseMaps, overlayMaps).addTo(map)
// L.layerGroup([littleton, denver, aurora, golden])

export {map, addTiles};

