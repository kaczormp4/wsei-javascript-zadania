//zad1

let sayHi = () => {
    console.log("Udało się!");
};

sayHi();


//zad2.

function nazwaFunkcji(nr) {
    console.log(nr)
}
nazwaFunkcji(2console);


//zad3.

let txt = 'omg';
returnString  = (txt) => {
    return txt;
}
console.log(returnString(txt));

//zad4.

function myString(paramStr) {
    
    let counter = 0;
 let myInterval =  setInterval(() => {
           counter++;
           if(counter == 5) {
                console.log("Koniec");
               clearInterval(myInterval);
           } else {
                console.log(paramStr);
           }
           
    }, 3000);
}

myString('Jakiś string');




//Bartłomiej Kaczmarczyk 12280