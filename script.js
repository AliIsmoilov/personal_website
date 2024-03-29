function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function showComingSoon() {
    document.getElementById("comingSoonMessage").style.display = "block";
}

function hideComingSoon() {
    document.getElementById("comingSoonMessage").style.display = "none";
}