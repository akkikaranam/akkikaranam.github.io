// Changes from Exercise 1 to Exercise 2
document.getElementById("exercise-one-link").onclick = (e) => {
    document.getElementById("exercise-one").style.display = "block";
    document.getElementById("exercise-two").style.display = "none";
};

// Changes from Exercise 2 to Exercise 1
document.getElementById("exercise-two-link").onclick = (e) => {
    document.getElementById("exercise-one").style.display = "none";
    document.getElementById("exercise-two").style.display = "block";
};

// Shows the grade deduction message
document.getElementById("days-missed").onchange = (e) => {
    const days = e.target.value;
    const percentLost = (days / 25) * 7;

    document.getElementById("deduction-message").innerHTML =
        "You will lose " + percentLost.toFixed(1) + "% of your grade by missing " + days + " days.";

    if (days == 0) {
        document.getElementById("attendance-message").innerHTML =
            "Perfect attendance, great job!";
    } else if (days <= 2) {
        document.getElementById("attendance-message").innerHTML =
            "Missing class can add up.";
    } else if (days <= 5) {
        document.getElementById("attendance-message").innerHTML =
            "You are starting to miss important class time.";
    } else {
        document.getElementById("attendance-message").innerHTML =
            "You are missing valuable learning opportunities.";
    }
};

// Shows or hides the menu on small screens
document.getElementById("menu-toggle").onclick = (e) => {
    const nav = document.getElementById("nav-items");

    if (nav.style.display == "block") {
        nav.style.display = "none";
        document.getElementById("menu-toggle").innerHTML = "▼";
    } else {
        nav.style.display = "block";
        document.getElementById("menu-toggle").innerHTML = "▲";
    }
};

// Finds how many days are left until December 4
const today = new Date();
const lastDay = new Date(today.getFullYear(), 11, 4);
const difference = lastDay - today;
const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

document.getElementById("days-left").innerHTML =
    "You have " + daysLeft + " days left in the semester.";

if (daysLeft > 100) {
    document.getElementById("semester-message").innerHTML = "Not time to start counting down yet.";
} else if (daysLeft > 50) {
    document.getElementById("semester-message").innerHTML = "The semester is moving along.";
} else if (daysLeft > 20) {
    document.getElementById("semester-message").innerHTML = "Keep working hard. The end is getting closer.";    
} else {
    document.getElementById("semester-message").innerHTML = "The semester is almost over!";
}