// Constructor pattern in front and backend

class MyClass{

    // A constructor method
    constructor(myValue){
        // Propertys for THIS class on particular
        this.property = myValue;
    }

    method(){
        console.log('Hello world, my value is:',this.property);
    }
}

// Instance of the class
const myInstance = new MyClass(1);
const myInstance2 = new MyClass(2);

/**
 * As you can see, instances have their own propertys, but their share the
 * same method OF THE CLASS, if one object updated the method, will be
 * applied for all objects too. (Reference value)
 */
console.log(myInstance);
console.log(myInstance2);