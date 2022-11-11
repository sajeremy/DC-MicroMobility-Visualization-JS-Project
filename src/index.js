// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });


const capitalBike_url = "https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json" 
const birdScooter_url = "https://gbfs.bird.co/dc" 

async function getCapitalBike() {
    let capitalData;
    const response = await fetch(capitalBike_url);
    capitalData = await response.json();
    const {latitude, longitude} = capitalData;

    console.log(capitalData);
}

async function getBirdScooter() {
    let birdData;
    const response = await fetch(birdScooter_url);
    birdData = await response.json();
    // const {latitude, longitude} = data;

    console.log(birdData);
    // return birdData;
}

// debugger
getCapitalBike();
// debugger
getBirdScooter();


