"use strict";
// Desestructuracion de objetos
/*
    const myObject : { firstName: string, lastName: string } = {
        firstName: "Ricardo",
        lastName: "Sandoval"
    };

    const { firstName, lastName } = myObject; // Aqui es importante que se nombren las variables como las propiedades que estamos extrayendo

    console.log(firstName, lastName);
*/
// Desestructuracion de arreglos
/*
    Aqui debemos usar corchetes y no llaves, y aqui si
    debemos de tener en cuenta las posiciones. Si no
    queremos un valor, debemos dejar un espacion y colocar
    una coma:

    const myArray = ['Valor1', 'Valor2', 'Valor3'];

    const [,valor2,] = myArray;
    console.log(valor2);
*/
// Ciclo - For of
/*
    El ciclo for of por cada iteracion, nos da un valor del
    arreglo. Por ejemplo:

    const avengers = ['ironman', 'thor', 'capitan'];

    for (const avenger for avengers){
        console.log(avenger); // Accede a cada objeto del arreglo
    }
*/
// Clases en ES6
/*
    Las clases en JavaScript se definen con la siguiente
    sintaxis:

    class Avenger {
        name;
        power;

        constructor(name, power){
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger('Hulk', 'Poder');

    Herencia en JavaScript:

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power){
            super(name, power);
            this.flying = true;
        }
    
    }
*/
