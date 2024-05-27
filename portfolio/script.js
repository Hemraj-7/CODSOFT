
function myFunction() {
    var x = document.querySelector("ul");
    var navbar = document.querySelector(".navbar");
    
    if (x.style.display === "flex") {
        x.style.display = "none";

    } else {
        x.style.display = "flex";
        navbar.style.position = "relative";
        x.style.gap = "50px";
        x.style.flexDirection = "column"
        console.log('noooh');
        x.style.backgroundColor = "#1e90ff";
        x.style.position = "absolute";
        x.style.top = "49.5px";
        x.style.right = 0;
        x.style.padding = "50px 100px";
        x.style.textAlign = "center";
        x.style.fontSize = "20px";
    }
}