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

//zad 9 /////////////////////////////////////////////////////////////////

var form = document.createElement("div");
// inputy
var name1 = document.createElement("input");
name1.setAttribute("id","name1");
var surname = document.createElement("input");
surname.setAttribute("id","surname");
var age = document.createElement("input");
age.setAttribute("id","age");
var children = document.createElement("input");
children.setAttribute("id","children");
// przyciski
var more = document.createElement("button");
more.setAttribute("onclick","moreData();");
more.innerText="WIĘCEJ";

var create = document.createElement("button");
create.setAttribute("onclick","createTable();");
create.innerText="UTWÓRZ";
// render
document.body.appendChild(form);
form.appendChild(name1);
form.appendChild(surname);
form.appendChild(age);
form.appendChild(children);
form.appendChild(more);
form.appendChild(create);

var persons = [];
function moreData(){
    var personData = {
        name1 : name1,
        surname : surname,
        age : age,
        children : children
    };
    var name1 = document.querySelector("#name1").value;
    var surname = document.querySelector("#surname").value;
    var age = document.querySelector("#age").value;
    var children = document.querySelector("#children").value;
    personData.name1=name1;
    personData.surname=surname;
    personData.age=age;
    personData.children=children;
    persons.push(personData)
    console.dir(persons)

    
}
function createTable(){
    var tableTable = document.createElement("TABLE");
    tableTable.setAttribute("id", `tableId`);
    for(var i = 0; i < persons.length ; i++){
        
        var tableTr = document.createElement("TR");
        tableTr.setAttribute("id", `tableTrNumber${i}`);
        var tableTd1 = document.createElement("TD");   
        var tableTd2 = document.createElement("TD");   
        var tableTd3 = document.createElement("TD");   
        var tableTd4 = document.createElement("TD");   
        var tableTd5 = document.createElement("TD");   
        tableTd1.setAttribute("id", "tableTd");
        document.body.appendChild(tableTable)
        
        tableTable.appendChild(tableTr);
        tableTr.appendChild(tableTd1);
        tableTr.appendChild(tableTd2);
        tableTr.appendChild(tableTd3);
        tableTr.appendChild(tableTd4);
        tableTr.appendChild(tableTd5);

    
        var nameInTable = document.createTextNode(persons[i].name1);
        var surnameInTable = document.createTextNode(persons[i].surname);
        var ageInTable = document.createTextNode(persons[i].age);
        var childrenInTable = document.createTextNode(persons[i].children);
        tableTd1.appendChild(nameInTable);
        tableTd2.appendChild(surnameInTable);
        tableTd3.appendChild(ageInTable);
        tableTd4.appendChild(childrenInTable);

        var buttonRemove = document.createElement("button"); 
        buttonRemove.innerText = "REMOVE";
        buttonRemove.setAttribute("onclick",`removeLine(tableTrNumber${i},tableId);`)
        tableTd5.appendChild(buttonRemove);
    }


}  

function removeLine(param, param2){
    var deleteLine = document.querySelector(`#${param.id}`);
    var deleteTable = document.querySelector(`#${param2.id}`);
    console.dir(deleteLine.parentElement.children.length)

    if(deleteLine.parentElement.children.length == 1){
        deleteTable.remove(param2.id)
    }
    deleteLine.remove(param.id)

}

//zad 10 ///////////////////////////////////////////////////////

var form = document.createElement("div");
// inputy
var name1 = document.createElement("input");
name1.setAttribute("id","name1");
var surname = document.createElement("input");
surname.setAttribute("id","surname");
var age = document.createElement("input");
age.setAttribute("id","age");
var children = document.createElement("input");
children.setAttribute("id","children");
// przyciski
var more = document.createElement("button");
more.setAttribute("onclick","moreData();");
more.innerText="WIĘCEJ";

var create = document.createElement("button");
create.setAttribute("onclick","createTable();");
create.innerText="UTWÓRZ";
// render
document.body.appendChild(form);
form.appendChild(name1);
form.appendChild(surname);
form.appendChild(age);
form.appendChild(children);
form.appendChild(more);
form.appendChild(create);

var persons = [];
function moreData(){
    var personData = {
        name1 : name1,
        surname : surname,
        age : age,
        children : children
    };
    var name1 = document.querySelector("#name1").value;
    var surname = document.querySelector("#surname").value;
    var age = document.querySelector("#age").value;
    var children = document.querySelector("#children").value;

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    //UZYTA FUNKCJA BIG LETTER Z ZAD 10  //
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    personData.name1=bigLetter(name1);
    personData.surname=bigLetter(surname);
    personData.age=bigLetter(age);
    personData.children=bigLetter(children);
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    //UZYTA FUNKCJA BIG LETTER Z ZAD 10  //
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    persons.push(personData)
    console.dir(persons)

    
}
function createTable(){
    var tableTable = document.createElement("TABLE");
    tableTable.setAttribute("id", `tableId`);
    for(var i = 0; i < persons.length ; i++){
        
        var tableTr = document.createElement("TR");
        tableTr.setAttribute("id", `tableTrNumber${i}`);
        var tableTd1 = document.createElement("TD");   
        var tableTd2 = document.createElement("TD");   
        var tableTd3 = document.createElement("TD");   
        var tableTd4 = document.createElement("TD");   
        var tableTd5 = document.createElement("TD");   
        tableTd1.setAttribute("id", "tableTd");
        document.body.appendChild(tableTable)
        
        tableTable.appendChild(tableTr);
        tableTr.appendChild(tableTd1);
        tableTr.appendChild(tableTd2);
        tableTr.appendChild(tableTd3);
        tableTr.appendChild(tableTd4);
        tableTr.appendChild(tableTd5);

    
        var nameInTable = document.createTextNode(persons[i].name1);
        var surnameInTable = document.createTextNode(persons[i].surname);
        var ageInTable = document.createTextNode(persons[i].age);
        var childrenInTable = document.createTextNode(persons[i].children);
        tableTd1.appendChild(nameInTable);
        tableTd2.appendChild(surnameInTable);
        tableTd3.appendChild(ageInTable);
        tableTd4.appendChild(childrenInTable);

        var buttonRemove = document.createElement("button"); 
        buttonRemove.innerText = "REMOVE";
        buttonRemove.setAttribute("onclick",`removeLine(tableTrNumber${i},tableId);`)
        tableTd5.appendChild(buttonRemove);
    }


}  

function removeLine(param, param2){
    var deleteLine = document.querySelector(`#${param.id}`);
    var deleteTable = document.querySelector(`#${param2.id}`);
    console.dir(deleteLine.parentElement.children.length)

    if(deleteLine.parentElement.children.length == 1){
        deleteTable.remove(param2.id)
    }
    deleteLine.remove(param.id)

}
//funkcja uzyta u gory
function bigLetter(param){
    if (typeof param == "string") 
    return param[0].toUpperCase() + param.slice(1);
}

//zad 11 //////////////////////////////////////////////////////////////////////////////////
function checkString(string){
    var tab  = [];
    var numbers  = [];
    var numbers2  = [];
    var sum = 0;
    var iloczyn = 1;
    tab.push(string);
    for(var i = 0 ; i < tab[0].length ; i++){       
        numbers.push(parseInt(tab[0][i]));
        if(numbers[i]*1 == numbers[i]){
            numbers2.push(numbers[i])
            sum += numbers[i];
            iloczyn *= numbers[i];
        }
        
    }
    for(var j = 0; j < iloczyn ; j++){
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerText = tab[0]
    }
    console.log(`Liczby : ${numbers2}`)
    console.log(`Suma liczb : ${sum}`)
}

checkString("liczby1234");

//zad 12 //////////////////////////////////////////////////////////////////////////////////
