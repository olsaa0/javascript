function printNames(){
    console.log("Andi");
    //callback//
    setTimeout(function() {console.log("Aniku")}, 3000);
    console.log("Olsa");
}

printNames();

var colors = ["blue", "red", "green", "purple"];

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];

}

var names = ["Dorant", "Olsa", "Daris", "Anik", "Shpat", "Blin"];

function changeName(){
    document.querySelector('p').innerHTML = names[Math.round(Math.random() * (names.length-1))]
    console.log([Math.round(Math.random * (names.length-1))]);
}

changeBgColor();
setInterval(changeBgColor, 1000);
setInterval(changeName, 1000);
changeName(changeName(), 1000);