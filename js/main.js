//alert('Bienvenido al Simulador!');
let operador;
let primerValor;
let segundoValor;
let resultado;
let salir;


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
                console.log('El resultado de la Operacion ' + primerValor + ' ' + operador + ' ' + segundoValor + ' es: ' +resultado);
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

