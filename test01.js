//Sumar en dos

for (let i = 1; i <= 20; i+=2) {
    console.log(i)
}

//Looper array

const numeros = [ 1, 2, 3, 4, 5 ];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// Sumar todo lo que esta en la Array numeros

let resultado = numeros.reduce(( a, b ) => a + b );

console.log(resultado)

for (let i = 10; i > 0; i-=2) {
   console.log(i)
 }


//Imprimir 'hola como estas' 10 veces.

 for (let i = 0; i < 10; i++ ) {
    console.log('hola como estas')
 }

//Imprimir los numeros del 1 al 30 omitiendo el numero 14 

 for (let i = 0; i < 30; i++) {
    if(i != 14) {
        console.log(i)
    }
 }

//Imprimir todas las letras que estan en la Array letters omitiendo la letra 'C'

const letters = [ 'a', 'b', 'c', 'd' ]

for (let i = 0; i < letters.length; i++) {
    if(letters[i] != 'c') {
        console.log(letters[i]);
    }
}

//Imiprimir Los objetos dentro de la Array enviando un mensaje al usuario mas su edad

const properties = [
    {
        name: 'Ruben',
        age: 23
    },
    {
        name: 'Miguel',
        age: 20
    }
];

function names(n) {
    console.log(`El nombre es ${n.name} y la edad es ${n.age}`);
}

 for (let i = 0; i < properties.length; i++) {
    let n = properties[i]
    names(n)
 }


// const array = [
//     {
//         name: 'John',
//         email: 'john@gmail.com'
//     },
//     {
//         name: 'Jane',
//         email: 'Jane@gmail.com'
//     },
//     {
//         name: 'Bob',
//         email: 'bob@gmail.com'
//     }
// ];

// function sendEmail(person) {
//     console.log(Sending email to ${person.name} at ${person.email})
// }

// array.forEach(person => {
//     sendEmail(person)
// })

//Modificando el codigo de la clase anterior. Cambiar el forEach por un for.

const array = [
    {
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        name: 'Jane',
        email: 'Jane@gmail.com'
    },
    {
        name: 'Bob',
        email: 'bob@gmail.com'
    }
];

function sendEmail(person) {
    console.log(`Sending email to ${person.name} at ${person.email}`)
}

for (let i = 0; i < array.length; i++) {
    person = array[i];

    sendEmail(person)
}

//Imprimir el objeto dentro de la Array omitiendo el nombre 'Rut'

const values = [
    {
        name: 'Belkis'
    },
    {
        name: 'Paul',
    },
    {
        name: 'Rut',
    },
];

function greetings(person) {
    console.log(`Hola ${person.name}`);
}

for (let i = 0; i < values.length; i++ ) {
    if(values[i].name != 'Rut'){
        person = values[i];
        greetings(person);
    }
};

