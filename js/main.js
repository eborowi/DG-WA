import {
    addSpinner, displayError
} from "./domFunctions.js"
import CurrentLocation from "./CurrentLocation.js";
const currentLoc= new CurrentLocation();

const initApp = () => {
    // add listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather)
    // set up

    // load default weather
}

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather= (event) => {
    if (event) {
        if (event.type === "click") {
            const mapIcon = document.querySelector(".fa-map-marker-alt");
            addSpinner(mapIcon);
        }
    }
    if (!navigator.geolocation) return geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

const geoError = (errObj) => {
    const errMsg= errObj ? erroObj : "Geolocation not supported";
    displayError(errMsg, errMsg);
}

const geoSuccess = (position) => {
    
}