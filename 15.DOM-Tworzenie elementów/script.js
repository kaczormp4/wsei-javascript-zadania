//zad1

newDiv = document.createElement("div");
newDiv.innerHTML = "To jest nowy element";
document.body.appendChild(newDiv);

//zad2

var newListUl = document.createElement("ul");
var myFavouriteFruits = ["Jabłko","Kiwi","Ananas","Truskawka","Brzoskwinia","Gruszka"]

for(var i = 0; i < myFavouriteFruits.length ; i++){
    var newListLi = document.createElement("li");
    newListUl.appendChild(newListLi);
    newListLi.innerText = myFavouriteFruits[i];

}
document.body.appendChild(newListUl)

//zad3
var newListUl = document.createElement("ul");
var myFavouriteFruits = ["Jabłko","Kiwi","Ananas","Truskawka","Brzoskwinia","Gruszka"]

for(var i = 0; i < myFavouriteFruits.length ; i++){
    var newListLi = document.createElement("li");
    newListUl.appendChild(newListLi);
    if(i%2==0 ){
        newListLi.innerText = myFavouriteFruits[i];
    }
    else{
        newListLi.remove();
    }
    

}
document.body.appendChild(newListUl)

//zad4
var newLinewButton = document.createElement("button");
newLinewButton.innerHTML = "NIE KLIKAJ WE MNIE"
document.body.appendChild(newLinewButton)
newLinewButton.addEventListener('click',e =>{
    newLinewButton.remove();
})

//zad5
var randomDivs = Math.floor(Math.random()*100)//max 99

for(var i = 0; i < randomDivs; i++){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `to jest div numer ${i}`
    document.body.appendChild(newDiv)
}
//zad6
var newObject = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}


var newDiv1 = document.createElement("div");
var newDiv2 = document.createElement("div");
var newDiv3 = document.createElement("div");
var newSpan1 = document.createElement("span");
var newSpan2 = document.createElement("span");

document.body.appendChild(newDiv1)
newDiv1.innerHTML = newObject.div1
document.body.appendChild(newSpan1)
newSpan1.innerHTML = newObject.span1
document.body.appendChild(newDiv2)
newDiv2.appendChild(newDiv3)
newDiv3.innerHTML = newObject.div2.div3
document.body.appendChild(newSpan2)
newSpan2.innerHTML = newObject.span2
newDiv.appendChild(newDiv)

//zad 7
//program działa tylko jezeli zrobimy po kolei 
//tzn wszytkie pozycje przeniesiemy na dół, i potem wszystkie do góry
var list1Ul = document.createElement("ul");
list1Ul.setAttribute('class', "firstlist")


var list1Elements = ["Samochod","Dom","Drzewo","Trawa","Szkoła","PLNY"]
document.body.appendChild(list1Ul)
for(var i = 0 ; i < 6; i++){
    var list1Li = document.createElement("li");
    list1Ul.appendChild(list1Li)
    list1Li.innerText = list1Elements[i]
}

var button1 = document.createElement("button");
document.body.appendChild(button1)
button1.innerHTML = "MOVE DOWN";

var list2Ul = document.createElement("ul");
list2Ul.setAttribute('class', "secondlist")
var list2Elements = ["","","","","",""]

document.body.appendChild(list2Ul);

var button2 = document.createElement("button");
document.body.appendChild(button2)
button2.innerHTML = "MOVE UP";




var items = document.querySelector(".firstlist").children;
var reset = 6;
button1.addEventListener("click", e =>{
    reset--;
    list2Elements[reset] = list1Elements[reset];
    for(var i = 0; i < 6; i++){
        if(items[i].innerText==list1Elements[reset]){
            items[i].innerText = ''
        }
        
    }
    list1Elements[reset] = " ";  

    var list2Li = document.createElement("li");
    list2Ul.appendChild(list2Li)
    list2Li.innerText = list2Elements[reset]
    if(reset == 0){
        button1.setAttribute('disabled', true);
    }
})

var reset2 = 6;
button2.addEventListener("click", e => {
    var items2 = document.querySelector(".secondlist").children;
    reset2--;
    list1Elements[reset2] = list2Elements[reset2];
    for(var i = 0; i < 6; i++){
        if(items2[i].innerText==list2Elements[reset2]){
            items2[i].innerText = ''
        }     
    } 
    items[reset2].innerHTML = list1Elements[reset2]
    if(reset2 == 0){
        button2.setAttribute('disabled', true);
        button1.setAttribute('disabled', false);
    }
})
///////////////////////////////////////////////////////

//zad8
var form = document.createElement("div");
//zamiast div było form, lecz przycisk wyswietlal 
// się przez 1 s i znikał dlatego jest DIV

var input1 = document.createElement("input");
input1.setAttribute("id","elem")
var input2 = document.createElement("input");
input2.setAttribute("id","text")
var input3 = document.createElement("input");
input3.setAttribute("id","color")
var input4 = document.createElement("input");
input4.setAttribute("id","repeat")
var submit = document.createElement("button");
submit.setAttribute("onclick","create();")
submit.innerText="SUBMIT";
document.body.appendChild(form);

form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
form.appendChild(input4)
form.appendChild(submit)

var zero = 0
function create(){
    zero++;
    if(zero > 1 ){
        var divDownForm = document.querySelector("#divDownForm");
        divDownForm.remove(divDownForm);
        zero = 0
        render();
        
    } 
    else{
        var divDownForm = document.querySelector("#divDownForm");
        if(divDownForm == null){
            render();
        }else{
            divDownForm.remove(divDownForm);
            render();
        }
        
    }    
    

}
function render(){
    var divDownForm = document.createElement("div");
    divDownForm.setAttribute("id","divDownForm")
    document.body.appendChild(divDownForm);
    
    var input1Value = document.querySelector("#elem").value;
    var input2Value = document.querySelector("#text").value;
    var input3Value = document.querySelector("#color").value;
    var input4Value = document.querySelector("#repeat").value;

    if(input1Value && input2Value && input3Value && input4Value !== ""){      
        for(var i = 0 ; i < parseInt(input4Value); i++){
            var newElement = document.createElement(`${input1Value}`);
            newElement.innerText=`${input2Value}`;
            newElement.style.color = `${input3Value}`;
            divDownForm.appendChild(newElement)
        }
    }else{
        alert("fill form");
    }
}

//zad 9