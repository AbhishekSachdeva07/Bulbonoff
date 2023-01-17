let on = document.getElementById("off");

on.addEventListener("click",onoff);

function onoff(){
    if (on.textContent.includes("ON")){
        bulb.src="on.png";
        on.textContent="Turn OFF";
    }
    else if (on.textContent.includes("OFF")){
        bulb.src="off.png";
        on.textContent="Turn ON";
    }
}