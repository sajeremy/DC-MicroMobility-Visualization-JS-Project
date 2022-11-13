
const dcMapURL = "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Administrative_Other_Boundaries_WebMercator/MapServer/17/query?outFields=*&where=1%3D1&f=geojson"
const worldMapURL = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
const nyMapURL = 'https://gist.githubusercontent.com/floledermann/92a56b764a92b55a857f5115236146b2/raw/b80ac35cc40de5651c6715c6abc4f8dd23b78c5e/streetnames_gender.geojson'
const bosMapURL = "https://gist.githubusercontent.com/cesandoval/09b2e39263c748fbcb84b927cecc7c46/raw/ab71d3638efd2545ec99c2651c6f2ddcea9d2a07/boston.json"
const boss311csv = 'https://gist.githubusercontent.com/cesandoval/046a91586ae76889aeb5b3e9db53016e/raw/ffb0c410ce8503c8c839cde01235bafb39cb14ad/bostosn_311.csv'
const bosNeighborhoods = d3.json(bosMapURL);
const nySenate = "https://raw.githubusercontent.com/dwillis/nyc-maps/master/state_senate.geojson"

//Atempt 4, Boston Example
// let bosNeighbordhoods = d3.json(bosMapURL);
// let boss311 = (await d3.csv(boss311csv), d => (d3.autoType(d)));



// //Attempt 3, does not work
//  //Width and height
//  let w = 500;
//  let h = 300;

//  //Define map projection

//  let projection = d3.geoMercator()
//                         .translate([0, 0])
//                         .scale(1);

//  //Define path generator
//  let path = d3.geoPath()
//                   .projection(projection);

//  //Create SVG element
//  let svg = d3.select("body")
//              .append("svg")
//              .attr("width", w)
//              .attr("height", h);

//  //Load in GeoJSON data
//  d3.json(dcMapURL, function(json) {

//      // Calculate bounding box transforms for entire collection
//      let b = path.bounds( json ),
//      s = .95 / Math.max((b[1][0] - b[0][0]) / w, (b[1][1] - b[0][1]) / h),
//      t = [(w - s * (b[1][0] + b[0][0])) / 2, (h - s * (b[1][1] + b[0][1])) / 2];

//      // Update the projection    
//      projection
//        .scale(s)
//        .translate(t);


//      //Bind data and create one path per GeoJSON feature
//      svg.selectAll("path")
//         .data(json.features)
//         .enter()
//         .append("path")
//         .attr("d", path)
//         .style("fill", "steelblue");

//  });






//Trial 2 (Working with World Map & NY senate)
const svg = d3.select('svg'),
    width = +svg.attr("width"),
    height = +svg.attr("height");

const bosProjection = d3.geoAlbers()
    .scale(60000)
    .rotate( [71.067,0] )
    .center( [-3, 40.65] )
    .translate([width/2, height/2])

// Load external data and boot
    d3.json(nySenate).then( function(data) {
    
    console.log("geojson data");
    console.log(data);
    let a = data;
    
    const bosGeoPath = d3.geoPath().projection(bosProjection)

    // Draw the map
        svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("fill", "#69b3a2")
        .attr("d", bosGeoPath)
        .style("stroke", "#333")
    })


// //Trial 1 not working
// export async function getMapDC() {
//     const response = await fetch(dcMapURL);
//     let dcData =  await response.json();
//     drawMap(dcData);
//     console.log("This is geojson data");
//     console.log(dcData.features);

// }

// let drawMap = (dcData) => {

//     canvas.selectAll('path')
//         .data(dcData)
//         .enter()
//         .append('path')
//         .attr('d',d3.geoPath())
//         .attr('class','county')
// }

// export {drawMap}
