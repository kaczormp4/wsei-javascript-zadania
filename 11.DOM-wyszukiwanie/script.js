//zad 1

let links = document.getElementsByClassName('list');

console.log(links);

//zad 2

function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i<elements.length; i++) {
        console.log(elements[i]);
    }
}

tagElements('ul');


//zad 3

const listElement = document.getElementById('list');

console.log(listElement);



//zad 4


function elements(element) {
    console.log(element);
}

elements(document.querySelectorAll("li"));
elements(document.querySelectorAll("ul"));
elements(document.querySelectorAll("span"));
elements(document.querySelectorAll("div.list span"));
elements(document.querySelectorAll("div#spans span"));









