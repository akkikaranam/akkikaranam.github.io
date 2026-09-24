
const road = document.getElementById("road");
//Creates car colors
const colors = [
    "#f15a5a",
    "#f7d847",
    "#6bf22dff",
    "#416afdff",
    "#4bf4d8ff",
    "#a738d0ff"
];

// Creates one car 
const createCar = (color, leftPosition, topPosition) => {
    const car = document.createElement("div");
    const carWindow = document.createElement("div");
    const leftWheel = document.createElement("div");
    const rightWheel = document.createElement("div");

    car.classList.add("car");
    carWindow.classList.add("car-window");
    leftWheel.classList.add("wheel", "left-wheel");
    rightWheel.classList.add("wheel", "right-wheel");

    car.style.backgroundColor = color;
    car.style.left = leftPosition + "px";
    car.style.top = topPosition + "px";

    car.append(carWindow);
    car.append(leftWheel);
    car.append(rightWheel);

    road.append(car);
};

// Creates 9 cars in random positions
for (let i = 0; i < 9; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomLeft = Math.floor(Math.random() * (road.clientWidth - 85));
    const lanePositions = [80, 170];
    const randomLane = lanePositions[Math.floor(Math.random() * lanePositions.length)];
    createCar(randomColor, randomLeft, randomLane);
}