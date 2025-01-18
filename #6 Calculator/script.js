let currdisplay = document.querySelector("#display-calculator");

//edit display, add values
const display = (add_to_display) =>{
currdisplay.value += add_to_display;
}
//clear current display 
let button_clickedc = document.getElementById("c");
    button_clickedc.onclick = () => {
    currdisplay.value = '';
}
//return value of currdisplay
let button_clickedequal = document.getElementById("=");
    button_clickedequal.onclick = () => {
    currdisplay.value = eval(currdisplay.value);
}

//add numbers logic
for(let i = 0; i <= 9 ;i++){
    document.getElementById(i.toString()).onclick = () =>{
        display(i);
    }
};

let button_clickedadd = document.getElementById("+");
button_clickedadd.onclick = () => {
    display('+');
}

let button_clickedsub = document.getElementById("-");
button_clickedsub.onclick = () => {
    display('-');
}

let button_clickedmul = document.getElementById("*");
button_clickedmul.onclick = () => {
    display('*');
}

let button_clickeddiv = document.getElementById("/");
button_clickeddiv.onclick = () => {
    display('/');
}


