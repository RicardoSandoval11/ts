"use strict";
// Funciones basicas
/*

    function myFunction() : string {
        return "Valor string devuelto";
    }

*/
// Parametros obligatorios de las funciones
/*

    const fullName = (firstName: string, lastName: string) : string {

        return `${firstName} ${lastName}`;
    }

    console.log(fullName("Ricardo", "Sandoval"));

*/
// Parametros opcionales de las funciones
/*

    const fullName = (firstName: string, secondName: string, thirdName?: string) : string {

        return `${firstName} ${secondName} ${thirdName ?? ''}`.trim();
    }

    Si el valor no se pasa, la variable toma un valor undefined
*/
// Parametros por defecto
/*
    - Los argumentos opcionales deben ir al final de los
      argumentos permitidos por una funcion.
    - Solo los argumentos que tienen un valor por defecto
      pueden ir despues de los valores opcionales. Ejemplo:

      const myFunction = (firstName: string, lastName?: string, upperCase: boolean = true): string => {
      
        const fullName : string = `${firstName} ${lastName}`.trim();

        return upperCase ? fullName.toUpperCase() : fullName;
      }
*/
// Parametros REST
/*
    REST arguments hace referencia al resto de argumentos
    (posiblemente opcionales) de una funcion. Por ejemplo:

    const fullName = (firstName: string, ...restArgs: string[]) : string => {

    let concatenatedNames : string = firstName;

    if (restArgs !== undefined && restArgs.length > 0){
        for(let i: number = 0; i < restArgs.length; i++){
            concatenatedNames += ` ${restArgs[i]}`;
        }

        //El loop for anterior es proporcional a lo siguiente:
        //return `${firstName} ${restArgs.join(' ')}`;
        
        }

        return concatenatedNames;
    }
    
    const result = fullName("Ricardo", "Xavier", "Sandoval", "Balcarcel");
    
    console.log(result);
*/
// Tipo Funcion
/*
    let myFunction : (firstName: string, lastName: string) => string;

    const myFunction2 = (number1: string, number2: string) : string => {
        return number1 + number2;
    }

    let myFunction3 : (firstName: string, lastName: string) => string = (firstName: string, lastName: string) : string => {
        return `${firstName} ${lastName}`;
    }

    myFunction = myFunction2;
*/
