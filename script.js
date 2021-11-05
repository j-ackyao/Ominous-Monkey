var clicked = false;

function f() {
    if (!clicked) {
        document.getElementById("a").style.visibility = "visible";
        document.getElementById("a").src += "?autoplay=1";
        clicked = true;
    }
}