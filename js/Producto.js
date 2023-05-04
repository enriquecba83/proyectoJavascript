class Producto{
    //atributos
    id;
    nombreProducto;
    descripcion;
    rubro;
    cantProducto;
    imagenProducto;
    precio;

    //constructor
    constructor(id,nombreProducto,descripcion,rubro,precio)
    {
        this.id             = id;
        this.nombreProducto = nombreProducto;
        this.descripcion    = descripcion;
        this.rubro          = rubro;
        this.precio         = precio;
    }

    //metodos
        let productos = [];
        class ListaProductos{
        static agregarProducto () {
        let id = parseInt(prompt('Ingrese ID del Producto:'));
        let nombre = (prompt('Ingrese Nombre del Producto:'));
        let descripcion = (prompt('Ingrese Descripción del Producto:'));
        let rubro = (prompt('Ingrese Rubro del Producto:'));
        let precio = parseFloat(prompt('Ingrese Precio del Producto:'));

        let producto = new Producto(id, nombre, descripcion, rubro, precio);
        Productos.push(producto);
    }
    }

    quitar = function()
    {

    }

    modificar = function()
    {
        
    }
}