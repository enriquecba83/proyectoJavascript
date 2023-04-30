//alert('Bienvenido al Simulador!');
let operador;
let primerValor;
let segundoValor;
let resultado;
let salir = false;
let calc = false;
let abmProductos = false;

alert('Bienvenido al Menú de Seleccion de Pre entregas!');

do {
    opcion = parseInt(prompt('Ingrese a la Pre entrega que desea \n 1.- Primera pre entrega - Calculadora \n 2.- Segunda pre entrega - Manejo de Productos \n 0.- Salir'))
    if (opcion !== 1 && opcion !== 2 && opcion !== 0) {
        console.log('Entra por el if con opcion: ' + opcion);
        alert('No ha ingresado una opcion válida');
        console.log('Me fui!');
    } else {
        console.log('Entra por el else con opcion: ' + opcion);
        console.log('1valor de salir es: ' + salir);
        switch (opcion) {
            case 1:
                calc = true;
                break;
            case 2:
                abmProductos = true;
                console.log('ingresó por case 2...')
                break;
            default:
                salir = true;
                break;
        }    
        console.log('2valor de salir es: ' + salir);
        console.log('valor de calc es: ' + calc + ' y valor de abmProductos es: ' + abmProductos);
    }
    
} while (salir) {
    console.log('Si desea volver a ingresar presione tecla F5');
    salir ='';
}



if (calc) {
    alert('Bienvenido al Simulador de calculadora!');
    do {
        operador = prompt('Ingrese el Operador que desea utilizar "+", "-", "*", "/"');
        if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
            alert('No ha ingresado un operador valido, me voy!');
            console.log('Me fui!')
            salir = 'esc';
        } else {
            primerValor = parseFloat(prompt('Ingrese el Primer Valor: '));
            if (!isNaN(primerValor)) {
                segundoValor = parseFloat(prompt('Ingrese el Segundo Valor: '));
                if (!isNaN(segundoValor)) {
                    switch (operador) {
                        case '+':
                            resultado = primerValor + segundoValor;
                            break;
                        case '-':
                            resultado = primerValor - segundoValor;
                            break;
                        case '*':
                            resultado = primerValor * segundoValor;
                            break;
                        default:
                            resultado = primerValor / segundoValor;
                            break;
                    }
                    console.log('El Operador ingresado es: ' + operador);
                    console.log('El primer Valor ingresado es: ' + primerValor);
                    console.log('El segundo Valor ingresado es: ' + segundoValor);
                    console.log('El resultado de la Operacion ' + primerValor + ' ' + operador + ' ' + segundoValor + ' es: ' + resultado);
                    console.log('Ingresando nuevamente a la Calculadora, si desea salir no ingrese valor...')
                } else {
                    alert('No Ingreso el segundo valor');
                    console.log('Al no ingresar el segundo Valor, se cancela ejecución...')
                    salir = 'esc';
                }
            } else {
                alert('No Ingreso el primer valor')
                console.log('Al no ingresar el primer Valor, se cancela ejecución...')
                salir = 'esc';
            }
        }
    } while (salir != 'esc') {
        console.log('Si desea volver a ingresar presione tecla F5')
    }
}

if (abmProductos) {
    alert('Ha ingresado al abmProductos!');
}
//declarando un objeto
/// forma literal de objetos

const persona = { nombre: 'Enrique', apellido: 'Cativa', edad: 39, dni: 30656185 }
const persona1 = { nombre: 'Alexis', apellido: 'Cativa', edad: 35, dni: 33976162 }

/// accedemos a los atributos del objeto

console.log('El dni de ' + persona.nombre + ' es ' + persona.dni + ' y su edad es ' + persona.edad);

console.log('El dni de ' + persona1.nombre + ' es ' + persona1.dni);

persona.edad = 40;

console.log('La edad modificada de ' + persona.nombre + ' es ' + persona.edad);


let atributo = 'nombre';
console.log(persona[atributo]);

//// para recorrer toda la lista de atributos

for (atributo in persona) {
    console.log(persona[atributo]);
}

///// CONSTRUCTORES DE OBJETOS

function Productos(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}

const producto1 = new Productos('aceite', 23.5, 'cocinero');
console.log(producto1);
const producto2 = new Productos('arroz', 13.5, 'dos hermanos');
console.log(producto2);


const pokemon1 = new Pokemon('Picachu', 'electrico', 1, 'ash', 'impactrueno', 500, 200);
const pokemon2 = new Pokemon('Charmander', 'fuego', 1, 'Brock', 'llamarada', 300, 150);

pokemon1.atacar('Charmander');
pokemon1.volverPokebola();

pokemon2.evolucionar('charizard', 100);