/////  CREATING A CYBER/VIRTUAL PET \\\\\

// TASK:
// User selects the kind of animal they’d like (dog, cat, 
// rabbit) and you have to play with it, feed it, give it 
// drinks etc.
// There should be consequences across the board 
// – if you don’t play, it gets bored, if you do, it’s happy, 
// but gets thirsty, that kind of thing.

// CREATING AN OBJECT CALLED ANIMAL \\

class Animal {
    constructor (name, animalType, hunger, thirst, energy) {
        this._name = name;
        this._animalType = animalType;
        this._hunger = hunger;
        this._thirst = thirst;
        this._mood = ["Sad","Sleepy","Excited"];
        this._energy = energy;
    }

    // Using "GET" - The get syntax binds an object property to a function that will be called when that property is looked up \\

    get name() {
        return this._name;
    }
    get animaltype () {
        return this.animalType;
    }
    get hunger () {
        return this._hunger
    }
    get thirst () {
        return this.thirst;
    }
    get _mood () {
        return this.energyMood()
    }
    get energy () {
        return this._energy;
    }

    // Reducing hunger and energy with an "if, else and else if" statement \\

    // Needs Fixing!!!!!! 

    ///////////////\\\\\\\\\\\\\\\\\\\\

    reduceHunger(amount) {
        return this._hunger -= amount;
    }

    energyMood () {
            if this._energy >= 60
                    return this._mood[2]
          } else if {
                this._energy < 60
                    return this._mood[1]
        } else if { 
                this._energy <= 30
                    return this._mood[0]
    }
        
 }
 ///////////////////\\\\\\\\\\\\\\\\\\\\\\

 // Using a class and constructor with "SUPER" Function for multiple animals in order to give them a certain treat \\

 // Use the super () function to call the constructor of the parent class and access functions on an object's parent class. \\

 // DOG - Sonny 

 class Dog extends Animal {
    constructor( name, animalType, hunger, thirst, mood, energy ) {
        super( name,animalType, hunger, thirst, mood, energy );
        this._treat = [" Tinned Meat","Chew","bone", "Human Scraps if he is a good boy"];
    }
    get treat(){
       return this._treat;
     }

} 

// CAT - Simba

class Cat extends Animal {
    constructor( name, animalType, hunger, thirst, mood, energy ) {
        super( name, animalType, hunger, thirst, mood, energy );
        this._treat = ["Cat Food","Dreamies","Tuna Loin"];
    }
    get treat(){
       return this._treat;
    }

}

class Tiger extends Animal {
    constructor( name, animalType, hunger, thirst, mood, energy ) {
        super(name,animalType, hunger, thirst, mood, energy);
        this._treat = ["Cattle","Birds","Fish"];
    }
    get treat(){
       return this._treat;
     }

} 

// Logging the required information to the console - Giving an Output - adding a new animal \\

const Monkey = new Animal("Kong", "Gorilla", 100, )
console.log(Gorilla.reduceHunger(10));
console.log(Animal);




 
 
 
