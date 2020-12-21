document.getElementById("timeout").addEventListener("click", function () {
    setTimeout(function (){
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.innerHTML ="Mon timeout vient de créer ce div 2 secondes après le click sur le bouton!";
        document.getElementById("timeout-div").append(div);
    }, 2000);
});
let x = 0;

document.getElementById("interval-start").addEventListener("click", time);

function time() {
    let interval = setInterval(function () {
        document.getElementById("interval-div").innerHTML = x;
        x+=60;
    }, 2000);
    document.getElementById("interval-stop").addEventListener("click", () => clearInterval(interval));
}
