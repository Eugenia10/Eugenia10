function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += "mobile" ;
    } else {
        x.className = "nav";
    }
}

function data() {
    var span;
    var date = new Date();
    var an;

    an = date.getFullYear();

    span = document.getElementById("date");
}
data();