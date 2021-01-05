//zad1 

var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
} 


//zad2.

let num1 = 112;
let num2 = 115;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 jest największe');
} else if(num2 > num3) {
    console.log('num2 jest największe');
} else {
    console.log('num3 jest największe');
}


//zad3.

for (let i=0; i<11; i++) {
    console.log("Lubię JavaScript");
}


//zad4.

var result = 0;

for(var i = 0; i <11; i++) {
    result += i;
    console.log(result);
}

//zad5.

var n = 5;
for(let i = 0; i <= n; i++){
    console.log(`${i} - ${i%2 === 0 ? 'parzysta' : 'nieparzysta'}`);
    
}

//zad 6.

for (var i = 0; i < 3; i++) {
    for (var j= 0; j < 4; j++) {
        console.log("i=" + i +", j=" +j);
    }
}

//zad7.

for(let i = 0; i < 100; i++){
    if(i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//zad 8

//a)
let stars = '*';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        
        result += stars;
        
    }
    console.log(result)
}

//b).
let stars = '*';
let space = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += space;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + space;
    }
    console.log(result);
}

//c).
let stars = '*';
let space = ' ';
let height = 5;
for (var i=0; i<height; i++) {
    var result = '';
    for (var j = height - 1 ; j > i; j--) {
        result += space;
    }
    for (var k = 0; k <= i; k++) {
        if(k%height==0) result += stars  ;
        else result += stars + stars ;
        
    }
    console.log(result);
}

//d).
for (let i = 1; i <= 11; i++)
{
    let space = '';
    let turn = i > 6 ? 6 - i % 6 : i % 6;
    for (let j = 0; j < 5; j++)
    {
        if (turn === 0)
        {
            space += '-';
        }
        else if (j >= turn)
        {
            space += j;
        }
        else
        {
            space += "*";
        }
    }

    console.log(space);
}

//e).
let stars = '*';
let space = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += space;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + space;
    }
    console.log(result);
}
for(var ij=0; ij<3; ij++) {
    var res = '';
    for (var k = 0; k <= 5/2+1; k++) {
        res += space;
    }
    console.log(res+stars);
}


















//Bartłomiej Kaczmarczyk 12280