var seconds = 0;
init = setInterval(function() {
    document.getElementsByClassName("timer")[0].innerHTML = seconds++;
}, 1000);
window.onload = init;
document.getElementsByTagName("button")[0].addEventListener("click", function() {
    seconds = 0;
});