"use strict";
(() => {
    // Interfaz basica
    const client = {
        name: 'Ricardo',
        age: 23,
        address: {
            id: 3,
            zip: 'KY2',
            city: 'Guatemala'
        }
    };
    const customer = {
        name: 'Ricardo',
        age: 23,
        address: {
            id: 3,
            zip: 'KY2',
            city: 'Guatemala'
        },
        getFullAddress: (id) => {
            return '';
        }
    };
    // Interfaces en las clases
    class VirtualCustomer {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.getFullAddress = (id) => {
                return this.address.city;
            };
        }
    }
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Snake extends Animal {
        constructor(name, age) {
            super(name, age);
            this.makeSound = () => {
                return "zzzzzzzzzzz";
            };
        }
    }
})();
