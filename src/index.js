// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });



const capitalBike_url = "https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json" 
const birdScooter_url = "https://cors-anywhere.herokuapp.com/https://gbfs.bird.co/dc" 

// const requestOptions = {
//     headers: {    
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*' }
// }

let capitalData;
let birdData;

async function getCapitalBike() {
    
    const response = await fetch(capitalBike_url);
    capitalData = await response.json();
    const firstBike = capitalData.data.bikes[0];
    // debugger
    console.log(firstBike.lat);
    console.log(firstBike.lon);
    console.log(firstBike.type);
    return capitalData;

}

// async function getBirdScooter() {
   
//     const response = await fetch(birdScooter_url);
//     birdData = await response.json();
//     // const {latitude, longitude} = birdData;

//     console.log(birdData);
//     // return birdData;
// }

// debugger
getCapitalBike();
// debugger
// getBirdScooter();


