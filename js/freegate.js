var menuButton = document.querySelector(".mob_menu");
var menu = document.querySelector(".nav_ready");
var btnIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="512px" height="512px">' +
    '<g>' + '<path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" fill="#525252"/>' + '<path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" fill="#525252"/>' +
    '<path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" fill="#525252"/>' +
    '</g>' + '</svg>';

var btnIconClose = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 21.9 21.9" enable-background="new 0 0 21.9 21.9" width="512px" height="512px">' +
    '<path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill="#525252"/></svg>';


var bodyFilm = document.createElement("div");
document.querySelector("body").appendChild(bodyFilm);

/* EVENTS */
function toggleMenu() {
    menu.classList.toggle("active");
    menuButton.classList.toggle("close");
    if (menuButton.className == "mob_menu close") {
        menuButton.innerHTML = btnIconClose;
    } else {
        menuButton.innerHTML = btnIcon;
    }
    bodyFilm.classList.toggle("bodyfilm");
}


function closeMenu() {
    menu.classList.remove("active");
    menuButton.classList.remove("close");
    if (menuButton.className == "mob_menu close") {
        menuButton.innerHTML = btnIconClose;
    } else {
        menuButton.innerHTML = btnIcon;
    }
    bodyFilm.classList.remove("bodyfilm");
}

function openMenu() {
    menu.classList.add("active");
    menuButton.classList.add("close");
    if (menuButton.className == "mob_menu close") {
        menuButton.innerHTML = btnIconClose;
    } else {
        menuButton.innerHTML = btnIcon;
    }
    bodyFilm.classList.add("bodyfilm");
}




/* EVENTS */
// MOBILE BUTTON
menuButton.addEventListener("click", toggleMenu);

menuButton.innerHTML = btnIcon;


// DROPDOWN MENU
var mobDrop = document.querySelectorAll("li.parent");
var i;
for (i = 0; i < mobDrop.length; i++) {
    if (window.innerWidth < 801) {
        mobDrop[i].classList.add("mob_drop");
    }

    mobDrop[i].addEventListener("click", function () {
        this.classList.toggle("open");
    })
}
