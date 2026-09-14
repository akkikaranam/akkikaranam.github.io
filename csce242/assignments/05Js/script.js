// Shows a speech bubble when the Speech box is clicked
document.getElementById("speech-box").onclick = (e) => {
    document.getElementById("speech").innerHTML = '<p class="bubble">Hi!</p>';
};

// Shows a message when a beverage is selected
document.getElementById("beverage").onchange = (e) => {
    const choice = e.target.value;
    document.getElementById("beverage-message").innerHTML =  choice + ": Nice Choice!";
};

// Adds a sticker when the sun image is clicked
document.getElementById("sun").onclick = (e) => {
    document.getElementById("sticker").style.display = "block";
};