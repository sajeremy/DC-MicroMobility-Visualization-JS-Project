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

    for (let i=0; i < 10; i++) {
        node = document.createElement("li");
        textnode = document.createTextNode(
        `This is an ${capitalData.data.bikes[i].type} 
        with latitude: ${capitalData.data.bikes[i].lat} 
        and longitude: ${capitalData.data.bikes[i].lon}`);
        node.appendChild(textnode);
        document.getElementById("capitalBike").appendChild(node);
    }
       
}

export async function getHelbizScooter() {
    const response = await fetch(helbizScooterURL);
    helbizData = await response.json();

    console.log("This is Helbiz Scooter Data");
    console.log(helbizData);

    let node;
    let textnode;

    for (let i=0; i < 10; i++) {
        node = document.createElement("li");
        textnode = document.createTextNode(
        `This is a ${helbizData.data.bikes[i].vehicle_type} 
        with latitude: ${helbizData.data.bikes[i].lat} 
        and longitude: ${helbizData.data.bikes[i].lon}`);
        node.appendChild(textnode);
        document.getElementById("helbizScooter").appendChild(node);
    }
   
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