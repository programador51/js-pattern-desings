# Patrones de diseño

## Tipos
* [Creacionales](#creational)
Tratan con las instancias de nuevos objetos
    * [Singleton](#singleton)
    * [Constructor](#constructor)
    * [Modulos](#modules)
    * [Modulos revelador](#reveal_modules)
* [Funcionales](#functional)
* Estructurales
* Comportamiento

---

<span id="creational"></span>

## Patron de diseño creacional ([Referencia](https://ed.team/blog/patrones-de-diseno-creacionales))
Estos nos proveen soluciones para la creación de objetos, permitiéndonos hacer un sistema independiente de cómo sus objetos son creados. 

<span id="singleton"></span>

### Singleton
Nos permite garantizar que una clase solo tenga una única instancia y proporciona un punto de acceso global a ella.

Resuelve problemas como:

* ¿Cómo podemos garantizar que una clase tenga una sola instancia?
* ¿Cómo podemos acceder globalmente a una única instancia de una clase?

**Ejemplos de uso:**

Podemos usarlo para leer configuraciones, cargar pool de conexiones a la base de datos, registro de logs, colas de impresión etc.

**Solucion**

1. Define una constante INSTANCE de tipo Singleton que tendrá la instancia única de la clase, al ser una constante será inicializada una vez y nunca cambiará.
2. Oculta el constructor de la clase estableciendo su visibilidad como privada, esto nos asegura que la clase no pueda ser instanciada fuera de ella. private Singleton.
4. Define un método estático para retornar la instancia única de la clase, al ser estático podemos acceder fácilmente a través del nombre de la clase y el nombre del método Singleton.getInstance().

<span id="constructor"></span>

### Constructor
* **Sin prototipos**: Cuando se hace la instancia , cada objeto tiene sus propiedades, pero también se hace una copia de los métodos.

* **Con prototipos**: Cuando se hace la instancia, cada objeto tiene sus propiedades, PERO comparten el método de la clase.

<span id="modules"></span>

### Modulos ([Referencia](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript))
Los módulos son una pieza integral de la arquitectura de cualquier aplicación robusta y, por lo general, ayudan a mantener las unidades de código de un proyecto tanto separadas como organizadas.

* The Module pattern
* Object literal notation
* AMD modules
* CommonJS modules
* ECMAScript Harmony modules

<span id="reveal_modules"></span>

### Modulo revelador ([Referencia](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript))

El patrón de módulo se definió originalmente como una forma de proporcionar encapsulación pública y privada para clases de ingeniería de software convencional.

---

<span id="functional"></span>

## [Patron de diseño funcional](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming)
Se caracteriza por una cosa: la ausencia de efectos secundarios. No depende de datos fuera de la función actual y no cambia los datos que existen fuera de la función actual. Cualquier otra cosa "funcional" puede derivarse de esta propiedad.
Se basa en brindar un ***Input*** (datos) que seran operados por la funcion de tal forma que regresa un ***Output*** (resultado) con la informacion operada

### [Clousures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior.