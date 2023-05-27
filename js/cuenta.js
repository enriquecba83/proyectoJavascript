/**
 * Clase que genera objetos de "Cuenta de banco"
 */
class Cuenta {
    /**
     * Constructor que genera una cuenta de banco con los datos iniciales del asociado
     * @param {String} titular Nombre del titular de la cuenta
     * @param {String} contacto Contacto, ya sea numero de telefono o email
     * @param {Number} saldo Saldo inicial de la cuenta
     * @param {Number} limite Limite de extraccion de la cuenta
     */
    constructor(titular, contacto, saldo, limite) {
        this.titular = titular;
        this.contacto = contacto;
        this.saldo = saldo;
        this.limite = limite;
    }

    /**
     * Funcion que extrae dinero de la cuenta
     * @param {Number} cantidad Cantidad de dinero a ser retirada
     * @returns Valor booleano que indica si la operacion se pudo o no llevar a cabo
     */
    extraerDinero(cantidad) {
        let res;
        if (this.saldo >= cantidad && cantidad <= this.limite && cantidad > 0) {
            this.saldo -= cantidad; // equivale a this.saldo = this.saldo - cantidad
            res = true;
        } else res = false;
        return res;
    }
    /**
     * Funcion que deposita dinero en la cuenta
     * @param {Number} cantidad Cantidad de dinero a ser depositada
     * @returns Valor booleano que indica si la operacion se pudo o no llevar a cabo
     */
    depositarDinero(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad; // equivale a this.saldo = this.saldo + cantidad
            return true;
        } else return false;
    }

    /**
     * Funcion que permite obtener el saldo de la cuenta
     */
    consultar() {
        return this.saldo;
    }
}