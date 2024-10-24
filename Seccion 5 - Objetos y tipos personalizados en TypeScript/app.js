"use strict";
// Objetos basicos
/*
    Cuando nosotros creamos un objeto de la siguiente manera:

    let myObject = {
        name: "Ricardo",
        age: 23,
        nationality: "guatemalteca"
    }
    
    Esto crea un tipo con al siguiente estructura:

    type MyType = {
        name: string,
        age?: number,
        nationality: string,
        getName: () => string
    }
*/
// ¿Como crear objetos con tipos especificos?
/*
    let myObject : { name: string, age: number, nationality: string } = {
        name: "Ricardo",
        age: 23,
        nationality: "guatemalteca"
    };
*/
// Metodos dentro de los objetos
/*
    let myObject : { name: string, age: number, nationality: string, getName: () => string } = {
        name: "Ricardo",
        age: 23,
        nationality: "guatemalteca",
        getName() {
            return this.name;
        }
    };
*/
// Tipos personalizados
/*
    type MyType = {
        name: string,
        age?: number,
        nationality: string,
        getName: () => string
    }

    let myObject1 : myType = {
        name: "Ricardo",
        age: 23,
        nationality: "guatemalteca",
        getName() {
            return this.name;
        }
    }
*/
// Multiples tipos permitidos (union types)
/*
  type MyType = {
        name: string | undefined,
        age?: number,
        nationality: string,
        getName: () => string
    }
*/
