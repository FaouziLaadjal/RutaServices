var btn = document.getElementById("navbtn");
var navbar = document.getElementById("navbarlinks");
function random() {
  navbar.classList.toggle("random");
}
function outside() {
  navbar.classList.remove("random");
}
btn.onclick = random;
for (var i = 0; i < 4; i++) {
  var fouzi = document.querySelectorAll(".a")[i];
  fouzi.addEventListener("click", random);
}
document.onclick = function (e) {
  if (e.target.id !== "navbtn" && e.target.id !== "navbarlinks") {
    outside();
  }
};
