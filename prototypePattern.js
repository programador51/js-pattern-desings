// Object literal with propertys and methods
const dog = {
    type:'Chihuahua',
    bark:function(){
        console.log('Gauuuu!');
    }
}

// Important use the method "create" of the class "Object".
const Frijol = Object.create(dog);

// Frijol it's now a protytpe with those propertys and methods
// They can be changed by reference, but the idea it's keep the same value
// in order to create more instances
Frijol.bark();