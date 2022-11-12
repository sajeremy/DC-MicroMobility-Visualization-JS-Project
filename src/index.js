// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });


// import test from "./scripts/map"

const capitalBikeURL = "https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json" 
const helbizScooterURL = "https://admin-api-prod.helbizscooters.com//reporting/washington/gbfs/free_bike_status.json"
// const birdScooterURL = "https://gbfs.bird.co/dc" 
// const limeScooterURL = "https://data.lime.bike/api/partners/v1/gbfs/washington_dc/free_bike_status.json"
// const lyftScooterURL = "https://s3.amazonaws.com/lyft-lastmile-production-iad/lbs/dca/free_bike_status.json"


let capitalData;
let helbizData;
// let birdData;
// let limeData;
// let lyftData;


async function getCapitalBike() {
    const response = await fetch(capitalBikeURL);
    capitalData = await response.json();
    // const firstBike = capitalData.data.bikes[0];
    console.log("This is Capital Bike Data");
    console.log(capitalData);
}
async function getHelbizScooter() {
    const response = await fetch(helbizScooterURL);
    helbizData = await response.json();
    // const firstBike = capitalData.data.bikes[0];
    console.log("This is Helbiz Scooter Data");
    console.log(helbizData);
}
// async function getBirdScooter() {
//     const response = await fetch(birdScooterURL);
//     birdData = await response.json();
//     // const firstBike = capitalData.data.bikes[0];
//     console.log("This is Bird Scooter Data");
//     console.log(birdData);
// }
// async function getLimeScooter() {
//     const response = await fetch(limeScooterURL);
//     limeData = await response.json();
//     // const firstBike = capitalData.data.bikes[0];
//     console.log("This is Lime Scooter Data");
//     console.log(limeData);
// }
// async function getLyftScooter() {
//     const response = await fetch(lyftScooterURL);
//     lyftData = await response.json();
//     // const firstBike = capitalData.data.bikes[0];
//     console.log("This is Lyft Scooter Data");
//     console.log(lyftData);
// }


getCapitalBike();
getHelbizScooter();
// getBirdScooter();
// getLimeScooter();
// getLyftScooter();



// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });


