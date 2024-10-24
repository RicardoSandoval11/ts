"use strict";
// Introduccion a los genericos
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = exports.getPokemon = void 0;
class Display {
    constructor() {
        this.printObject = (data) => {
            console.log(data);
        };
    }
}
class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const displayObject = new Display();
const customer = new Customer("Ricardo", 23);
displayObject.printObject(customer);
// Funciones genericas
function genericFunction(data) {
    return data;
}
const genericArrowFunction = (data) => {
    return data;
};
class CustomerFilter {
    constructor(uuid) { }
}
class CustomerEntity {
    constructor(uuid, firstName, lastName) { }
}
class UserRepository {
    constructor() {
        this.findOrDefaultAsync = (filter) => {
            return new CustomerEntity("9812739-123234-12312-12312-123123", "Ricardo", "Sandoval");
        };
    }
}
// Ejemplo aplicado de genericos
const getPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Hola";
});
exports.getPokemon = getPokemon;
const getResult = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, exports.getPokemon)();
    (0, exports.getPokemon)()
        .then(response => console.log(response))
        .catch(error => console.error(error));
});
exports.getResult = getResult;
/*
    Podemos especificar el tipo de datos retornado en una
    peticion HTTP con axios de la siguiente manera:

    const response : string = await axios.get<string>('url');
*/
// Mapear respuestas HTTP
/*
    Con la pagina Quicktype.io podemos tipar respuestas
    pasando el contenido html y nos retorna el codigo en
    typescript
*/
// Quicktype.io extension
/*
    La extension para visual studio code se llama "Paste JSON as Code"
*/
