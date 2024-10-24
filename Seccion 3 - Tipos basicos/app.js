"use strict";
var _a;
let batman = [];
console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "Valor que se imprime si el primer valor es undefined");
// Tipo Any
// Podemos redondear decimales con el metodo toFixed(decimalsNumber: number)
// Tipo de casteo 1 con typescript
// varName as string
// Arrays - Arreglos => const myArray : number[] = [1,2,3,4,5];
// Tuples - Tuplas
/*

Una tupla basicamente es un par de valores usualmente string, any. Por ejemplo:

let myTuple : [string, number] = ['Valor de la llave', 500];

*/
// Enums - Enumeraciones
/*
    Las enumeraciones se declaran en typescript de la siguiente manera:

    enum AudioLevel {
        min, // Tendrá el valor 0 si no asignamos un valor
        medium, // Tendra el valor 1 si no asignamos un valor
        max // Tendra el valor 2 si no asignamos un valor
    }

*/
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 23] = "min";
    AudioLevel[AudioLevel["medium"] = 45] = "medium";
    AudioLevel[AudioLevel["max"] = 63] = "max";
})(AudioLevel || (AudioLevel = {}));
;
console.log(AudioLevel.max);
// Void - Vacio
/*
    Significa que va a retornar nada. Para una funcion se especifica lo que retorna de la siguiente manera:

    function myFunction() : void {

    }

    const myArrowFunction = () : void => {

    }
*/
// Never - Nunca
/*
    Este tipo de dato se utiliza cuando una funcion nunca
    debe retornar un valor. Por ejemplo, la funcion se puede
    ejecutar pero debe haber una interrupcion antes de que
    esta llegue a su fin.
*/
// Null y Undefined
/*
    la propiedad strictNullChecks es utilizada para evitar
    que las variables acepten valores nulos o indefinidos.

*/
