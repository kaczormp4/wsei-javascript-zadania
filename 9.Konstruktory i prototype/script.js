konstruktory 
//zad.1

function Person(firstname, lastname, age, country, city, language) {
    this.firstname = firstname, 
    this.lastname = lastname, 
    this.age = age,
    this.country = country,
    this.city = city,
    this.language = language
    this.changeAge = (newAge) => this.age = newAge;
    this.changeCity = (newCity) => this.city = newCity;
}

const user1 = new Person('Imie', 'Nazwisko', 20, 'Polska', 'Krakow', 'polski');
const user2 = new Person('Imie', 'Nazwisko', 22, 'Polska', 'Krakow', 'polski');
console.log(user1)
console.log(user2)
user1.changeAge(77);
user1.changeCity('MAJAMI');
user2.changeAge(12);
user2.changeCity('Berlin');
console.log(user1)
console.log(user2)



//zad2

function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
    this.sub = function(c,d) {
        this.memory.push('Odejmowanie');
        console.log(c -d);
    };
    this.mul = function(e,f) {
        this.memory.push('Mnożenie');
        console.log(e *f);
    };
        this.div = function(g,h) {
        this.memory.push('Dzielenie');
        console.log(g/h);
    };
    
}

const calc1 = new Calculator();
calc1.sum(2,2)
calc1.sub(2,3)
calc1.mul(3,3)
calc1.div(12,3)
calc1.showMemory()


//zad3

function Game(){
    
   this.lastNumber = 0;
   this.number = 0;
   this.generator = null;
    
    this.startGenerator = () => {
        this.generator = setInterval(() => {
            this.lastNumber = this.number;
            this.number = Math.floor((Math.random() * 10) + 1);
            
            console.log(this.number);
            this.checkWin();
        }, 1000)
    }
    
    this.checkWin = () => {
        if(this.lastNumber + 5 === this.number){
            console.log("Wygrałeś");
            clearInterval(this.generator);
        }
    }
}

let game1 = new Game();
game1.startGenerator();















