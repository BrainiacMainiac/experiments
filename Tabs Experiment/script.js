function change1 () {
    document.getElementById("pictures").src = "img1.jpg";
}
function change2 () {
    document.getElementById("pictures").src = "img2.jpg";
}
function change3 () {
    document.getElementById("pictures").src = "img3.jpg";
}
function change4 () {
    document.getElementById("pictures").src = "img4.jpg";
}
function change5 () {
    document.getElementById("pictures").src = "img5.jpg";
}
function Setup() {
    document.getElementById("1").addEventListener("click", change1);
    document.getElementById("2").addEventListener("click", change2);
    document.getElementById("3").addEventListener("click", change3);
    document.getElementById("4").addEventListener("click", change4);
    document.getElementById("5").addEventListener("click", change5);
}
addEventListener('load', Setup);