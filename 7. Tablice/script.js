//zad1.

let myTable = [1, 2, 3, 4];

console.log(myTable)


//zad2.

let myTable = [1, 2, 3, 4, 'aaa', 'bbbb'];

console.log(myTable[0]);
console.log(myTable[myTable.length-1]);
console.log(myTable);

for(let i=0; i<myTable.length; i++){
    if(i%2 == 0){
        console.log(myTable[i])
    }
    if(typeof(myTable[i]) == 'string') {
        console.log(myTable[i])
    }
    if(typeof(myTable[i]) == 'number') {
        console.log(myTable[i])
    }
}


//zad3.

const arr = [13, 51, 3, -2, 5, 6, 8];
// 1
console.log(arr.reduce((a, b) => a + b));
// 2
console.log(arr.reduce((a, b) => a - b));
// 3
console.log(arr.reduce((a, b) => a + b / arr.length));
// 4
arr.filter((v, i) => v % 2 === 0).forEach(v => {
    console.log(v);
});
// 5
arr.filter((v, i) => v % 2 !== 0).forEach(v => {
    console.log(v);
});
// 6 
let biggest = 0;
arr.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
// 7
let smallest = 0;
arr.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
// 8
const arrLength = arr.length - 1;
arr.forEach((v, i) => {
    console.log(arr[arrLength - i]);
});


//zad4.

function myTable(paramTable){
    let result = 0;
    for(i=0; i<paramTable.length; i++){
        
        
        result = result + paramTable[i];
    }
    console.log(result)
};

myTable([1,2,3,4]);


//zad5

function myTable(paramTable){
    var sum =0;
    for (i=0; i<paramTable.length; i++){
        sum = sum + paramTable[i];
    };
    
    var average = sum /paramTable.length;
    
    for(i=0; i<paramTable.length; i++){
        console.log(paramTable[i]*average)
    }
};
myTable([1,2,3,4]);


//zad6.

myTable([1,2,3,4]);

function myTable(paramTable){
    var sum =0;
    var length = 0;
    for (i=0; i<paramTable.length; i++){
        if(paramTable[i] % 2 == 0){
            
            sum = sum + paramTable[i];
            length++;
        }
            
    }
    let avg = sum / length;
    console.log(avg)
};
//zad7.
myTable([6,2,3,1]);

function myTable(paramTable){
    
    console.log(paramTable.sort())
};

//zad8.

function indexSum(paramTable1,paramTable2){
    var wynik = 0;
    var sumTabIndex1 = 0;
    var sumTabIndex2 = 0;
    for(var i =0; i < paramTable1.length; i++){
        sumTabIndex1 += i;
    }
    for(var i =0; i < paramTable2.length; i++){
        sumTabIndex2 += i;
    }
    wynik = sumTabIndex1 + sumTabIndex2;
    return [wynik];
};
indexSum([2,2,32,32,3,2,2],[2,22,2,5,44,4,42,1]);


//zad9.

function myTab(paramTable,paramTableElement){
    var index = paramTable.indexOf(paramTableElement);
    paramTable.splice(index, 1);
    console.log(paramTable)
    return paramTable;
};
myTab([1,2,3,4],3);

//zad10.

function reserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reserveSing([1,2,3,4,6,-6]));


