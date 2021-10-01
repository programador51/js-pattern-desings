// Constructor pattern in front and backend

class MyClass{

    // A constructor method
    constructor(myValue){
        // Propertys and methods for THIS class on particular
        this.property = myValue;
        this.method = () => {
            console.log('Hello world, my value is:',this.property);
        }
    }
}

// Instance of the class
const myInstance = new MyClass(1);

// Acces to the propertys and methods :)
console.log(myInstance);

myInstance.method();