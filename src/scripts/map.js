
//Create Map
// const attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const attr2 = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ';
    const tileUrl2 = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';

    const CartoDB_Positron = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
	const cartoAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


    const map = L.map('leafletMap', {
                        center: [38.9, -77.04], 
                        zoom: 13});
    const tiles = L.tileLayer(CartoDB_Positron,{
                        attribution: cartoAttr,
                        subdomains: 'abcd',
                        maxZoom: 20,
                        className: 'darkMode'});
    let addTiles = tiles.addTo(map);
    
    // let capitalMarkerClusters = L.markerClusterGroup();



//Create Overlays
// const capitalBikes = L.control.layers
// L.control.layers(baseMaps, overlayMaps).addTo(map)
// L.layerGroup([littleton, denver, aurora, golden])

export {map};

