var clicked = false;

function f() {
    if (!clicked) {
        document.getElementById("a").style.visibility = "hidden";
        document.getElementById("b").style.visibility = "visible";
        document.getElementById("b").src += "?autoplay=1";
        clicked = true;
    }
}