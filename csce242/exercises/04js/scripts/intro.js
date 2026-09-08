document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerText = "Hello, World!";
    e.target.innerHTML = "Clicked!";
}

