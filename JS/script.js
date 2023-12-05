function myFunction() {
    var tableReduit = document.getElementById("tableReduit");
    var fleche = document.getElementById("fleche");
    if (tableReduit.style.display === "none") {
        tableReduit.style.display = "";
        fleche.innerHTML = "▼";
    } else {
        tableReduit.style.display = "none";
        fleche.innerHTML = "▲";
    }
}