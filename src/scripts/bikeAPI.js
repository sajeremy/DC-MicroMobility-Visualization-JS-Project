import {addCapitalMarker, addHelbizMarker} from './map'


const capitalBikeURL = "https://gbfs.capitalbikeshare.com/gbfs/en/free_bike_status.json" 
const helbizScooterURL = "https://admin-api-prod.helbizscooters.com//reporting/washington/gbfs/free_bike_status.json"

let capitalData;
let helbizData;

export async function getCapitalBike() {
    const response = await fetch(capitalBikeURL);
    capitalData = await response.json();

    console.log("This is Capital Bike Data");
    console.log(capitalData);

    let node;
    let textnode;
    let lat;
    let lon;
    let numBikes = capitalData.data.bikes.length;

    function bikeNotDisabeled(idx) {
        return capitalData.data.bikes[idx].is_disabled === 0;
    };

    function bikeNotReserved(idx) {
        return capitalData.data.bikes[dx].is_reserved === 0;
    };

    let availableBikes = 0;

    for (let i=0; i < numBikes; i++) {
        //Create list elements for first 10 bikes
        // node = document.createElement("li");
        // textnode = document.createTextNode(
        // `This is an ${capitalData.data.bikes[i].type} 
        // with latitude: ${capitalData.data.bikes[i].lat} 
        // and longitude: ${capitalData.data.bikes[i].lon}`);
        // node.appendChild(textnode);
        // document.getElementById("capitalBike").appendChild(node);

        //Create markers for bikes not disabled or reserved 
        if (bikeNotDisabeled(i) || bikeNotReserved(i)) {
            lat = capitalData.data.bikes[i].lat
            lon = capitalData.data.bikes[i].lon
            addCapitalMarker(lat, lon);
            availableBikes += 1;
        };

    }

    let numCapitalBikes = 
        `Currently ${availableBikes} Capital bikes are available`; 
    document.getElementById("capitalBike").innerHTML = numCapitalBikes;
       
}

export async function getHelbizScooter() {
    const response = await fetch(helbizScooterURL);
    helbizData = await response.json();

    console.log("This is Helbiz Scooter Data");
    console.log(helbizData);

    let node;
    let textnode;
    let lat;
    let lon;
    let numScooters = helbizData.data.bikes.length;

    for (let i=0; i < numScooters; i++) {
        // node = document.createElement("li");
        // textnode = document.createTextNode(
        // `This is a ${helbizData.data.bikes[i].vehicle_type} 
        // with latitude: ${helbizData.data.bikes[i].lat} 
        // and longitude: ${helbizData.data.bikes[i].lon}`);
        // node.appendChild(textnode);
        // document.getElementById("helbizScooter").appendChild(node);

        //Create markers for scooters
        lat = helbizData.data.bikes[i].lat
        lon = helbizData.data.bikes[i].lon
        addHelbizMarker(lat, lon);
    }

    let numHelbizScooters = 
        `Currently ${numScooters} Helbiz Scooters are available`; 
    document.getElementById("helbizScooter").innerHTML = numHelbizScooters;
   
}

const birdScooterURL = "https://cryptic-beyond-07137.herokuapp.com/https://gbfs.bird.co/dc" 
let birdData;

export async function getBirdScooter() {
    const response = await fetch(birdScooterURL);
    birdData = await response.json();

    console.log("This is Bird Scooter Data");
    console.log(birdData);

    let node;
    let textnode;

    // for (let i=0; i < 10; i++) {
    //     node = document.createElement("li");
    //     textnode = document.createTextNode(
    //     `This is an ${capitalData.data.bikes[i].type} 
    //     with latitude: ${capitalData.data.bikes[i].lat} 
    //     and longitude: ${capitalData.data.bikes[i].lon}`);
    //     node.appendChild(textnode);
    //     document.getElementById("capitalBike").appendChild(node);
    // }
       
}