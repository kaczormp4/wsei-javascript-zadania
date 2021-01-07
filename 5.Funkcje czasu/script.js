//zad1.

let time = 0;
const interval = setInterval(() => {
    time += 1;
    console.log(`Cześć po raz ${time}`);
    if(time >= 15) {
        clearInterval(interval);
    }
}, 1000);

//zad2.

let myArray = [1, 2, 3, 4];
let myTimer = setTimeout(() => {
    for (let i=0; i < myArray.length; i++) {
        console.log (myArray[i]);
    }
    let j = 0
    let myInterval = setInterval(() => {
        console.log (myArray[j]);
        j++
        if (j >= myArray.length) {
            clearInterval(myInterval);
        }
    }, 3000)
    
}, 2000 )
    













//Bartłomiej Kaczmarczyk 12280