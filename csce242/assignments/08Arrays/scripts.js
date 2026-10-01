

const destinationType = document.getElementById("destination-type");
const destinationLinks = document.getElementById("destination-links");
const map = document.getElementById("map");
//Array for City Skylines
const citySkylines = {
    "Dubai, United Arab Emirates":
        "https://www.google.com/maps?q=Dubai%20United%20Arab%20Emirates&output=embed",

    "Tokyo, Japan":
        "https://www.google.com/maps?q=Tokyo%20Japan&output=embed",

    "Singapore":
        "https://www.google.com/maps?q=Singapore&output=embed",

    "Hong Kong":
        "https://www.google.com/maps?q=Hong%20Kong&output=embed"
};

//Array for Beaches
const beaches = {
    "Bora Bora, French Polynesia":
        "https://www.google.com/maps?q=Bora%20Bora%20French%20Polynesia&output=embed",

    "Maldives":
        "https://www.google.com/maps?q=Maldives&output=embed",

    "Santorini, Greece":
        "https://www.google.com/maps?q=Santorini%20Greece&output=embed",

    "Gold Coast, Australia":
        "https://www.google.com/maps?q=Gold%20Coast%20Australia&output=embed"
};

// Gives the four destination links for the type chosen
const giveDestinations = (destinations) => {
    destinationLinks.innerHTML = "";
    map.style.display = "none";
    map.src = "";

    for (const destination in destinations) {
        const link = document.createElement("a");
        link.href = destinations[destination];
        link.innerHTML = destination;
        
        link.onclick = (e) => {
            e.preventDefault();
            map.src = destinations[destination];
            map.style.display = "block";
        };

    destinationLinks.append(link);
    }
};

// Checks which option is selected in the dropdown menu
destinationType.onchange = (e) => {
    if (e.target.value === "cities") {
        giveDestinations(citySkylines);
    }

    if (e.target.value === "beaches") {
        giveDestinations(beaches);
    }

    if (e.target.value === "") {
        destinationLinks.innerHTML = "";
        map.style.display = "none";
        map.src = "";
    }
};