//zad1
function moreDivsElem(param){
    var tab = [];
    for(var i = 0 ; i < param.length; i ++){
        tab.push(param[i].localName)
    }
    console.log(tab)
    return tab;
}

moreDivsElem(document.querySelectorAll(".more-divs"));

//zad2

function task2(param){
    //1
    console.log(param.innerHTML);
    //2
    console.log(param.outerHTML);
    //3
    console.log(param.className);
    //4
    console.log([...param.classList]);
    //5
    console.log(param.dataset);

}

task2(document.querySelector(".short-list"))

//zad3

function task3(param){
    var one = parseInt(param.dataset.numberone);
    var two = parseInt(param.dataset.numbertwo);
    var tree = parseInt(param.dataset.numberThree);
    var result1 = one + two + tree;
    var result2 = one - two - tree;
    return [result1, result2];
}

task3(document.querySelector("#datasetCheck"))

//zad4

document.getElementById("spanText").innerText =  "dowolny";

//zad5

document.getElementById("spanText").className =  "newClassName";

//zad6
function task6(param){
    var tab = param.split(" ");
    var stringName = "";
    tab.forEach(element => {
        console.log(element)
        stringName +=element+"+";
        
    });
    console.log(stringName)
    //step 2
    param = " ";
    console.log("Usunięto wszystkie klasy")
    
}

task6(document.querySelector("#classes").className)

//zad7

var task7 = document.querySelector("#longList");
function task7add(param){
    [...param].forEach(element => {
		if (!element.dataset.dataText) {
			element.setAttribute('data-text', 'text');
		}
    });
}

task7add(task7.children)

//zad8

function writesString(param){
    return{
        newClass: param
    };
};
const myDiv = document.querySelector('#myDiv');

function readString({newClass}){
    return newClass
}

const newClassName = readString(writesString('newClasssss'));
myDiv.className = newClassName;

//zad9

function addClass(param){
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}
var randomNum = Math.floor(Math.random() * 11);
addClass(randomNum)

//zad10

function tabElementList(param){
    var tab = [];
    for(var i = 0 ; i < param.children.length; i++){
        tab.push(param.children[i].innerText)
    }
    console.log(tab)
    return tab;
}

tabElementList(document.querySelector("#longList"))

//zad 11

function childList(param){
    for(var i = 0 ; i < param.length ; i++){
        var randomNumber = Math.floor(Math.random()* 11);
        param[i].setAttribute("oldValue",param[i].innerText);
        param[i].innerText = randomNumber;
    }
}

childList(document.querySelector("#longList").children)