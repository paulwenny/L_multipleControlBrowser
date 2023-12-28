const circleChannel = new BroadcastChannel("circle_channel")
const circle1 = document.getElementById("circle1")
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");

function circleMovement(event){
    const x = event.clientX, y = event.clientY
    // 01 blue
    circle1.style.left = x + "px";
    circle1.style.right = "";
    circle1.style.top = y + "px";

    // 02 orange
    circle2.style.left = (x + 25 )+ "px";
    circle2.style.right = "";
    circle2.style.top = y + "px";

    // 03 red
    circle3.style.left = (x + 50) + "px";
    circle3.style.right = "";
    circle3.style.top = y + "px";

    circleChannel.postMessage({x , y})
}

circleChannel.onmessage = (event) => {
    const {x , y} = event.data
    circle1.style.right = x + "px";
    circle1.style.left = "";
    circle1.style.top = y + "px";

    circle2.style.right = (x + 25) + "px";
    circle2.style.left = "";
    circle2.style.top = y + "px";

    circle3.style.right = (x + 50) + "px";
    circle3.style.left = "";
    circle3.style.top = y + "px";
}

addEventListener("mousemove" , circleMovement)