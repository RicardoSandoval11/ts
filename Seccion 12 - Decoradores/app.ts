

// Introduccion a los decoradores

/*
    Un decorador es un tipo especial de docoracion que puede 
    ser adjuntada a una declaracion de una clase, metodo, 
    accesor, propiedad o parametro. Los decoradores utilizan 
    la forma @expression, donde expression debe evaluar una 
    funcion que será llamada en tiempo de ejecucion con la 
    informacion sobre la declaracion decorada.
*/

// Decoradores de clases

/*
    Para poder utilizar decoradores en typescript debemos de 
    descomentar la bandera llamada "experimentalDecorators" 
    del tsconfig. Un ejemplo de un decorador:

    function printToConsole(constructor: Function) {
        console.log(constructor);
    }

    @printToConsole
    export class Pokemon {

        public publicApi: string = "https://pokeapi.com";

        constructor(
            public name: string
        ){}
    }

    El resultado del decorador anterior, será imprimir en 
    consola la instancia de la clase a la cual esta decorando.
*/

// Decoradores de fabrica - Factory decorators

/*
    Un factory decorator es utilizado cuando queremos pasar 
    parametros a un decorador y este decorador retorna una 
    funcion que se ejecuta en tiempo de ejecucion. Ejemplo:

    const printToConsoleConditional = (print: boolean) : Function => {
        if(print){
            return printToConsole;
        }
        else{
            return () => {};
        }
    }
*/

// Ejemplos de un decorador - Bloquear prototipo

/*
    const blockInheritance(constructor: Function){
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
*/

// Decoradores de metodos

/*
    Podemos modificar la logica interna del metodo con 
    decoradores de fabrica cuando asignamos el decorador 
    a un metodo.
*/

// Decoradores de propiedades

/*
    Un decorador de una propiedad recibe como parametros el 
    target y el propertyKey. Por otro lado, el decorador de 
    un metodo recibe el target, propertyKey y un objeto de 
    tipo PropertyDescriptor.

    Podemos retornar un property descriptor personalizado 
    para las propiedades e incluso podemos hacer una propiedad 
    de solo lectura.
*/