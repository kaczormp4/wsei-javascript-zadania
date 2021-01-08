//zad 1

function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}

const person = new Person('Jan', 'Dzban', 25, 'Poland', 'Warsaw');
const person2 = new Person('Grzegorz', 'Orzech', 16, 'Poland', 'Warsaw');

person.showDetails();
person.addOneYear();
person.showDetails();

person.addOneYear();
person.addOneYear();
person.addOneYear();

person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.showDetails();

person2.addOneYear();
person2.addOneYear();
person2.addOneYear();

person2.showDetails();



// Zad 2
function PersonAdvanced(name, last, age, country, city, language, dishes){
    this.name = name;
    this.last = last;
    this.age = age;
    this.country = country;
    this.language = language;
    this.city = city;
    this.dishes = dishes;
    
    this.logInfo = () => {
        for(let key in this){
            console.log(key + " : " + this[key]);
        }
    }
    
    this.addDish = (dish) => {
        this.dishes.push(dish);
    }
    
    this.increaseAge = () => {
        this.age++;
    }
}

 

let personAdvanced = new PersonAdvanced("Andrzej", "Kowalczyk", 18, "Polska", "Gdynia", "Polski", ["Gołąbki", "Kluski", "Pomidorowa"]);

personAdvanced.logInfo();

personAdvanced.addDish("Jogurt");
personAdvanced.addDish("Masło");
 

personAdvanced.logInfo();


//zad3.


function Calculator(a,b){
    this.a=a;
    this.b=b;
    
    this.sum=function(){
        return (this.a+this.b);
    }
    this.odj=function(){
        return (this.a-this.b);
    }
    this.mnozenie=function(){
        return (this.a*this.b);
    }
    this.dzielenie=function(){
        if(b==0){
            console.log("Nie mozna przez 0");
        } 
        else {
            return (this.a/this.b);
        }
        
    }
    
}


const calc1=new Calculator(4,5);
const calc2=new Calculator(4,0);
console.log(calc1.sum());
console.log(calc2.dzielenie());



//zad 4.

function Constructor(){
    this.number = 0;
    
    this.up = function() {
        this.number++;
    }
    
    this.down = function() {
        if(this.number > 0){
            this.number--;
        }
        else{
            console.log("Jesteś na ziemi.");
        }        
    }
    
    this.showLevel = function() {
        console.log(this.number);
    }
}

var constructor = new Constructor();

constructor.showLevel();
constructor.up();
constructor.up();
constructor.showLevel();
constructor.down();
constructor.showLevel();






