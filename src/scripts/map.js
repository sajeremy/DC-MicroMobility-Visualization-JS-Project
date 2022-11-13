
const dcMapURL = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Administrative_Other_Boundaries_WebMercator/MapServer/17/query?outFields=*&where=1%3D1&f=geojson"
let canvas = d3.select('#canvas')


export async function getMapDC() {
    const response = await fetch(dcMapURL);
    let dcData =  await response.json();
    drawMap(dcData);
    console.log("This is geojson data");
    console.log(dcData.features);

}

let drawMap = (dcData) => {

    canvas.selectAll('path')
        .data(dcData)
        .enter()
        .append('path')
        .attr('d',d3.geoPath())
        .attr('class','county')
}

export {drawMap}
