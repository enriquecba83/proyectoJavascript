class Producto {
    //atributos
    id;
    nombre;
    rubro;
    precio;

    //constructor
    constructor(id, nombre, rubro, precio) {
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.precio = precio;
    }

    //metodos
    
    agregarProducto(producto) {
        productos.push(producto);
        console.log(`Se agrega el ID ${id}, nombre del producto ${nombre}, rubro ${rubro} y precio ${precio}`);
        }

    
/*    function agregarProducto() {
        let id = parseInt(prompt('Ingrese ID del Producto:'));
        let nombre = (prompt('Ingrese Nombre del Producto:'));
        let descripcion = (prompt('Ingrese Descripción del Producto:'));
        let rubro = (prompt('Ingrese Rubro del Producto:'));
        let precio = parseFloat(prompt('Ingrese Precio del Producto:'));

        if (id && nombre && descripcion && rubro && precio) {
            let producto = new Producto(id, nombre, descripcion, rubro, precio);
            Productos.push(producto);
            console.log(`Se agrega el ID ${id}, nombre del producto ${nombre}, descripcion ${descripcion}, rubro ${rubro} y precio ${precio}`);
        } else {
            console.log('Error en datos ingresados');
        }
    }






quitar = function () {

}

modificar = function () {
}
}
*/
}
