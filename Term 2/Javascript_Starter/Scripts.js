var contentP = document.getElementById("contentHere");
var button = document.getElementById("ourButton");
button.onclick = ourButtonMouseEvent;
button.onmouseenter - ourButtonMouseEvent;
button.onmouseleave = ourButtonMouseEvent;


function ourButtonClick() {
    alert("Hello World!");
}

function ourButtonMouseEventLeave() {
    contentP.innerHTML = "Boo!";
}

