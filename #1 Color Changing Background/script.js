changecolor = () =>{
    let number = Math.random();
    let randomnumber = number*100;
    console.log(randomnumber)
    if(randomnumber<10 ){
    document.body.style.backgroundColor = "cyan";
    console.log("Cyan")
    }else if(randomnumber<20){
        document.body.style.backgroundColor = "blue";
        console.log("Blue")
    } else if(randomnumber<30){
        document.body.style.backgroundColor = "violet";
        console.log("violet")
    }else if(randomnumber<40){
        document.body.style.backgroundColor = "green";
        console.log("green")
    }else if(randomnumber<50){
        document.body.style.backgroundColor = "red";
        console.log("red")
    }else if(randomnumber<60){
        document.body.style.backgroundColor = "lightblue";
        console.log("lightblue")
    }else if(randomnumber<70){
        document.body.style.backgroundColor = "purple";
        console.log("purple")
    }else if(randomnumber<80){
        document.body.style.backgroundColor = "magenta";
        console.log("magenta")
    }else if(randomnumber<90){
        document.body.style.backgroundColor = "DodgerBlue";
        console.log("magenta")
    }else{
        document.body.style.backgroundColor = "pink";
        console.log("pink")
    }
}