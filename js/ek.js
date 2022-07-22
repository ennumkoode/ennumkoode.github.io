document.getElementsByClassName("navbar-toggle")[0].addEventListener("click", tooglenav);

function tooglenav() {
    var element = document.getElementsByClassName("navbar-collapse")[0];
    element.classList.toggle("collapse");
}
