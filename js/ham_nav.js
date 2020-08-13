// Hamburg style nav bar
// Adopted from 'noodle_nav'
// JS code for hamburger icon

let ham_nav;
let hamburg;


function set_NAV() {
    ham_nav = document.getElementById("nav_link_menu")
    hamburg = document.getElementById("hamburger")
}

function show(element) {
    element.style.display = 'flex';
}

function hide(element) {
    element.style.display = 'none';
}

function toggle_burger() {
    current = hamburg.getAttribute("value")
    if (current == "ON") {
        hamburg.setAttribute("value", "OFF")

        hide(ham_nav)
    }
    else {
        hamburg.setAttribute("value", "ON")

        show(ham_nav)
    }

}


function set_listener() {
    hamburg.addEventListener('click', toggle_burger)
}

window.addEventListener('load', (event) => {
    set_NAV();
    set_listener();
});

