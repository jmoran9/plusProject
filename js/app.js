/* 
let weather = {
    "paris": {
        temp: 19.7,
        humidity: 80,
        ftemp: 67.46
    },
    tokyo: {
        temp: 17.3,
        humidity: 50,
        ftemp: 63.14
    },
    lisbon: {
        temp: 30.2,
        humidity: 20,
        ftemp: 86.36
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100,
        ftemp: 69.82
    },
    oslo: {
        temp: -5,
        humidity: 20,
        ftemp: 23
    }
};


let cityInput = prompt("Enter a city");
let notFound = "Sorry we don't have the weather for this city, try going to https://www.google.com/search?q=weather+" + cityInput;

cityInput = cityInput.trim().toLowerCase();
let nestedTemp = weather[cityInput];
if (cityInput in weather) {
    let nestedTemp = weather[cityInput].temp;
    let fNestedTemp = weather[cityInput].ftemp;
    let inputHumid = weather[cityInput].humidity;
    nestedTemp = Math.round(nestedTemp);
    fNestedTemp = Math.round(fNestedTemp);
    alert(`It is currently ${nestedTemp}°C ( ${fNestedTemp}°F ) in ${cityInput} with a humidity of ${inputHumid}%`);
} else {
    alert(notFound);
};

*/
function updateTime(event) {
    event.preventDefault();
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];

    let description = document.querySelector(".current-day-time");
    description.innerHTML = `${day} ${hours}:${minutes}`;

};
function updateLocation(city) {
    city.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityHeading = document.querySelector("#current-city");
    cityHeading.innerHTML = searchInput.value;
}



let searchForm = document.querySelector("#enter-city");

searchForm.addEventListener("submit", updateTime);
searchForm.addEventListener("submit", updateLocation);
