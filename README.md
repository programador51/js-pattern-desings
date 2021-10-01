# Patrones de diseño

## Tipos
* Creacionales
Tratan con las instancias de nuevos objetos
    * Singleton
    * Constructor
* Estructurales
* Comportamiento

---

## Patron de diseño creacional ([Referencia](https://ed.team/blog/patrones-de-diseno-creacionales))
Estos nos proveen soluciones para la creación de objetos, permitiéndonos hacer un sistema independiente de cómo sus objetos son creados. 

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

### Constructor