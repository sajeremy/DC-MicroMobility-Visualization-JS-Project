//Font Awesome Icons
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//Bike, Scooter APIs with map
import {getCapitalBike, getHelbizScooter, getBirdScooter} from './scripts/bikeAPI'
import {map, addTiles} from './scripts/map'

getCapitalBike();
getHelbizScooter();
getBirdScooter();
map;
addTiles;


// import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
// });



