function myFunction() {
    var tabSandwich = document.getElementById("sandwich");
    var fleche = document.getElementById("fleche");
    if (tabSandwich.style.display === "none") {
        tabSandwich.style.display = "";
        fleche.innerHTML = "▼";
    } else {
        tabSandwich.style.display = "none";
        fleche.innerHTML = "▲";
    }
}