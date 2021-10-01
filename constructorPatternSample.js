/**
 * Object it's a class. All objects in js heredate from this class
 * 
 * 1. Extends the class "Object" to add a new method call "log", that will
 * print the instance of "Object"
 */
Object.prototype.log = function(){
    console.log(this);
}

const x = { a:1 };

/**
 * 2. The object heredates from the class "Object" by default, so
 * you should see the methods WITH prototypes of the instanced variable
 */
x.log(); // Result: x = { a:1 }

///////////////////////////////////////////////////////////////////

/**Some browsers like IE doesn't support the trim method from String class...
 * Let's extend it :)
 */
if(!String.prototype.trim){
    String.prototype.trim = function(){
        try{
            return this.replace(/^\s+|\s+$/g,"");
        }catch(error){
            return this;
        }
    }
}

const y = "      lalalalalala     ".trim();
y.log(); // Result: [String: 'lalalalalala']



///////////////////////////////////////////////////////////////////////////
/**
 * In order to set or add new methods on a class, it's preferable
 * to use this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * Because with it's ensured we're modifing the corresponding object to avoid copys
 * on different classes
 */