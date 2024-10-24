

// Introduccion a los genericos

class Display<T> {

    public printObject: (data: T) => void = (data : T) : void => {
        console.log(data);
    } 
}

class Customer {

    constructor(
        public name: string,
        public age: number
    ){}
}


const displayObject : Display<Customer> = new Display();

const customer : Customer = new Customer("Ricardo", 23);

displayObject.printObject(customer);

// Funciones genericas

function genericFunction<T>(data : T) : T{
    return data;
}

const genericArrowFunction: <T>(data: T) => T = <T>(data: T) : T => {
    return data;   
}

// Ejemplo de funcion generica en accion

interface FindOrDefault<TFilter, TEntity> {
    findOrDefaultAsync:(filter: TFilter) => TEntity
}

class CustomerFilter {
    constructor(
        uuid: string
    ){}
}

class CustomerEntity {
    constructor(
        uuid: string,
        firstName: string,
        lastName: string
    ){}
}

class UserRepository implements FindOrDefault<CustomerFilter, CustomerEntity>{
    
    public findOrDefaultAsync: (filter: CustomerFilter) => CustomerEntity = (filter: CustomerFilter) : CustomerEntity => {
        return new CustomerEntity("9812739-123234-12312-12312-123123", "Ricardo", "Sandoval");
    }
}

// Ejemplo aplicado de genericos

export const getPokemon: () => Promise<string> = async() : Promise<string> => {
    return "Hola"; 
}

export const getResult: () => Promise<void> = async() : Promise<void> => {
    const result : string = await getPokemon();

    getPokemon()
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

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

