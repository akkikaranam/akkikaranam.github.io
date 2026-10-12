const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
    navToggle.onclick = () => {
        navLinks.classList.toggle("show");
    };
}

const cursorGlow = document.createElement("div");
cursorGlow.id = "cursor-glow";
document.body.appendChild(cursorGlow);

document.onmousemove = (event) => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
};

const baseUrl =
    "https://akkikaranam.github.io/csce242/projects/part7/";

const getInsights = async () => {
    const url = `${baseUrl}insights.json`;
    const response = await fetch(url);
    return response.json();
};

const showInsights = async () => {
    const insights = await getInsights();

    const articleList = document.querySelector(".article-list");

    insights.forEach((insight, index) => {
        if (index !== 0) {
            articleList.append(displayInsight(insight));
        }
    });
};

const displayInsight = (insight) => {
    const article = document.createElement("article");
    article.classList.add("article-cards");

    const img = document.createElement("img");
    img.src = baseUrl + insight.img_name;
    img.alt = insight.title;
    article.append(img);

    const text = document.createElement("div");
    text.classList.add("article-text");

    const category = document.createElement("p");
    category.classList.add("cards-title");
    category.innerHTML = insight.category;
    text.append(category);

    const title = document.createElement("h3");
    title.innerHTML = insight.title;
    text.append(title);

    const date = document.createElement("p");
    date.innerHTML = `${insight.date} • ${insight.read_time}`;
    text.append(date);

    const description = document.createElement("p");
    description.innerHTML = insight.description;
    text.append(description);

    const author = document.createElement("p");
    author.innerHTML = `By ${insight.author}`;
    text.append(author);

    const link = document.createElement("a");
    link.classList.add("link");
    link.href = insight.article_url;
    link.innerHTML = "Read →";
    text.append(link);

    article.append(text);

    return article;
};

if (document.querySelector(".article-list")) {
    showInsights();
}

document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const result = document.getElementById("result");

    if (!form.checkValidity()) {
        form.reportValidity();
        result.innerHTML = "Please complete every required field.";

        setTimeout(() => {
            result.innerHTML = ""; }, 2000);
        return;
    }

    const formData = new FormData(form);

    formData.append( "access_key", "09182e51-8c17-46d3-aad0-9f62a6e73590");
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message sent!";
            form.reset();
        } 
        else {
            result.innerHTML = "Error: " + data.message;
        }
    } 
    catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message.";
    } 
    finally {
        setTimeout(() => {
            result.innerHTML = "";
        }, 5000);
    }
};