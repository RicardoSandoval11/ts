(() => {

    // Interfaz basica

    /* La diferencia es que las interfaces son extendibles y los tipos no */

    interface Hero {
        name: string;
        realName: string;
    }

    // Estructuras complejas

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    interface Client {
        name: string;
        age: number;
        address: Address
    }

    const client : Client = {
        name: 'Ricardo',
        age: 23,
        address: {
            id: 3,
            zip: 'KY2',
            city: 'Guatemala'
        }
    }

    // Metodos en la interfaz

    interface Customer {
        name: string,
        age: number,
        address: Address,
        getFullAddress: (id: string) => string
    }

    const customer : Customer = {
        name: 'Ricardo',
        age: 23,
        address: {
            id: 3,
            zip: 'KY2',
            city: 'Guatemala'
        },
        getFullAddress: (id: string) => {
            return '';
        }
    }

    // Interfaces en las clases

    class VirtualCustomer implements Customer, Client {

        constructor(
            public name: string,
            public age: number,
            public address: Address
        ){}

        public getFullAddress : (id: string) => string = (id: string) : string => {
            return this.address.city;
        }
    }

    abstract class Animal {

        constructor(
            public name: string,
            public age: number
        ){}

        public abstract makeSound() : string;
    }

    class Snake extends Animal {

        constructor(
            name: string,
            age: number
        ){
            super(name, age);
        }

        public makeSound: () => string = () : string => {
            return "zzzzzzzzzzz";
        }
    }

})()