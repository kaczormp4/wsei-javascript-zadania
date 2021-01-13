//zad1 --------------------

///////1
var butEvent = document.getElementById("test-event");

butEvent.addEventListener("click", e => {
    console.log(butEvent.type)
    console.log(butEvent)
    console.log(e.type)
    console.log(e)
})
///////2
window.addEventListener("mousemove", e => {
    console.log(e.type)
    console.log(e)
})
///////3
var butEvent = document.getElementById("test-event");

butEvent.addEventListener("mouseover", e => {
    console.log(e.type)
    console.log(e)
})
///////4
window.addEventListener("keypress", e => {
    console.log(e.type)
    console.log(e)
})
///////5
window.addEventListener("scroll", e => {
    console.log(e.type)
    console.log(e)
})
///////6
var changeTxt = document.getElementById("input-test");

changeTxt.addEventListener("change", e => {
    console.log(e.type)
    console.log(e)
})

//zad2 --------------------
function click(){
    var butt = document.getElementById("ex2");
    var span = document.getElementById("span-ex2");

    butt.addEventListener("click", e => {
        span.innerText = butt.dataset.text
    })
   
}

click();

//zad3 --------------------
function changeColor(){
    var square = document.getElementById("ex3");

    square.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "blue";
    })
    square.addEventListener("mouseout", e => {
        e.target.style.backgroundColor = "red";
    })
   
}

changeColor();

//zad4 --------------------
const inputError = document.querySelector('#ex3-err');
const input = document.querySelector('#input-test');
input.addEventListener('keyup', (e) => {
	const reg = /[0-9]/gm;
	const checkIfNumber = e.target.value.match(reg);
	if (checkIfNumber !== null) {
		inputError.innerText = 'You cannot enter numbers here';
	} else {
		inputError.innerText = '';
	}
});

//zad5 --------------------
function counter(){
    var divEx5 = document.getElementById("ex5");
    var buttonEx5 = document.getElementById("ex5-button");
    var number = 0;
    buttonEx5.addEventListener("click", e => {
        number++;
        if(number > 10 ) number = 0;
        divEx5.innerText = number;
    })
}

counter();

//zad6 --------------------
function scrollCheck(){
    window.addEventListener("scroll",e => {
        if(scrollY < 200) document.body.style.backgroundColor = "red";
        else document.body.style.backgroundColor = "white";
    })
}
//zad7 --------------------
scrollCheck();

var input = document.querySelector("div#calculator > input");
var buttons = document.querySelectorAll("div#calculator button");
var number = 0;
var number2 = 0;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(this.innerText === '+'){
            input.value = number + number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '-'){
            input.value = number - number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '*'){
            input.value = number * number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '/'){
            input.value = number /number2;
            number = 0;
            number2 = 0;
        } else {
            if(number === 0){
                input.value = '';
                number = Number(this.innerText);
            } else {
                number2 = Number(this.innerText);
            }
            
        }
        
        
    })
}