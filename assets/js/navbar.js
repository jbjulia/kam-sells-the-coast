if (document.body.className === "index") {
    document.getElementById("home").style.color = "rgb(230,167,86)";
    document.getElementById("home").style.borderBottom = "solid";
    document.getElementById("about").style.color = "rgba(255,255,255,0.7)";
    document.getElementById("about").style.borderBottom = "none";
    document.getElementById("faq").style.color = "rgba(255,255,255,0.7)";
    document.getElementById("faq").style.borderBottom = "none";
} else if (document.body.className === "about") {
    document.getElementById("home").style.color = "rgba(255,255,255,0.7)";
    document.getElementById("home").style.borderBottom = "none";
    document.getElementById("about").style.color = "rgb(230,167,86)";
    document.getElementById("about").style.borderBottom = "solid";
    document.getElementById("faq").style.color = "rgba(255,255,255,0.7)";
    document.getElementById("faq").style.borderBottom = "none";
} else if (document.body.className === "faq") {
    document.getElementById("home").style.color = "rgba(255,255,255,0.7)";
    document.getElementById("home").style.borderBottom = "none";
    document.getElementById("about").style.color = "rgba(255,255,255,0.7)";
    document.getElementById("about").style.borderBottom = "none";
    document.getElementById("faq").style.color = "rgb(230,167,86)";
    document.getElementById("faq").style.borderBottom = "solid";
}
