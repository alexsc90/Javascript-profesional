// console.log('Helllo, TypeScript!');
 
//Boolean

let muted: boolean = true;
muted = false;

//Numbers
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String
let nombre: string = 'Alejandro';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
//people.push('900');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Alejandro');
peopleAndNumbers.push(9001);

//Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}.`);

// Any
let comodin: any = 'Joker'
comodin = { type: 'Wildcard' };

let someObject: object = { type: 'Wildcard' };

// Funciones

function add(a: number, b: number): number {
    return a + b
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName: string = 'Silva'): string {
    return `${firstName} ${lastName}`; 
}

const alejandro = fullName('Alejandro')
console.log(alejandro);

// Interfaces

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    //color: Color.Rojo,
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

//console.log(rect.toString());

rect.toString = function () {
    return this.color ? `Un recctángulo ${this.color}` : `Un rectángulo`;
}

console.log(rect.toString());