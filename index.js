window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");}
