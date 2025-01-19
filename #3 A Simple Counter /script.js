
let currcounter = parseInt(document.getElementById("counter").innerHTML);

const increase = () => {
    currcounter++;
    document.getElementById("counter").innerHTML = currcounter;
}
const decrease = () => {
    currcounter--;
    document.getElementById("counter").innerHTML = currcounter;
}