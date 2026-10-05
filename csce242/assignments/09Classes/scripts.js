class Vacation {
  constructor(title, type, description, thingsToDo, picture, mapSrc) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.thingsToDo = thingsToDo;
    this.picture = picture;
    this.mapSrc = mapSrc;
  }

  get card() {
    const section = document.createElement("section");
    section.classList.add("vacation-card");
    
    section.append(this.vacationName());
    section.append(this.vacationImage());
    section.onclick = () => {
      this.showModal();
    };
    return section;
  }

  vacationName() {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${this.title}</h3><p>${this.type} Vacation</p>`;
    return div;
  }

  vacationImage() {
    const img = document.createElement("img");
    img.src = `images/${this.picture}`;
    img.alt = `Picture of ${this.title}`;
    return img;
  }

  showModal() {
    document.querySelector("#modalImage").src = `images/${this.picture}`;
    document.querySelector("#modalImage").alt = `Picture of ${this.title}`;
    document.querySelector("#modalTitle").textContent = this.title;
    document.querySelector("#modalType").textContent = `Type: ${this.type}`;
    document.querySelector("#modalDescription").textContent = `Description: ${this.description}`;
    document.querySelector("#modalThings").textContent = `Things To Do: ${this.thingsToDo}`;
    document.querySelector("#modalThings").textContent =
    document.querySelector("#modalMap").src = this.mapSrc;
    document.querySelector("#vacationModal").style.display = "block";
  }
}

    const vacations = [];

    vacations.push(new Vacation(
        "Dubai",
        "City",
        "A modern city in the United Arab Emirates known for luxury shopping, tall buildings, and desert adventures.",
        "Visit the Burj Khalifa, shop at Dubai Mall, and go on a desert safari.",
        "dubai.jpg",
        "https://www.google.com/maps?q=Dubai,United+Arab+Emirates&output=embed"
    ));

    vacations.push(new Vacation(
        "Tokyo",
        "City",
        "Japan's exciting capital city, filled with technology, food, shopping, and historic temples.",
        "Visit Shibuya Crossing, explore Tokyo Disneyland, and try Japanese food.",
        "tokyo.jpg",
        "https://www.google.com/maps?q=Tokyo,Japan&output=embed"
    ));

    vacations.push(new Vacation(
        "Amalfi Coast",
        "Beach",
        "A beautiful coastline in Italy with colorful towns, beaches, and views of the Mediterranean Sea.",
        "Visit Positano, ride a boat, and enjoy Italian food.",
        "amalfi.jpg",
        "https://www.google.com/maps?q=Amalfi+Coast,Italy&output=embed"
    ));

    vacations.push(new Vacation(
        "Monaco",
        "City",
        "A small and wealthy country on the French Riviera known for its harbor, casinos, and luxury cars.",
        "Visit the Monte Carlo Casino, see the yachts, and walk around the harbor.",
        "monaco.jpg",
        "https://www.google.com/maps?q=Monaco&output=embed"
    ));

    vacations.push(new Vacation(
        "Greece",
        "Beach",
        "A country with sunny islands, white buildings, ancient history, and clear blue water.",
        "Visit Santorini, see the Acropolis, and relax at the beach.",
        "greece.jpg",
        "https://www.google.com/maps?q=Greece&output=embed"
    ));

    vacations.push(new Vacation(
        "Singapore",
        "City",
        "A clean and modern island country in Southeast Asia with gardens, amazing food, and tall buildings.",
        "Visit Gardens by the Bay, see the Marina Bay Sands, and eat at a hawker center.",
        "singapore.jpg",
        "https://www.google.com/maps?q=Singapore&output=embed"
    ));

    const vacationsDiv = document.querySelector(".vacations");

    vacations.forEach((vacation) => {
    vacationsDiv.append(vacation.card);
    });