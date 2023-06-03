

let carrito = [] ///aqui iran los items del carrito
let stock = [] ///aqui iran los productos

////traerme los elementos del dom
const tabla = document.getElementById('items');
const selectProductos = document.getElementById('productos');
const btnAgregar = document.getElementById('agregar');
const btnOrdenar = document.getElementById('ordenar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');
const tdSubTotal = document.getElementById('subTotal');

///ejecutar una vez para cargar el localStorage con stock

stock.push(new Producto('Notebook Acer I3', 365100));
stock.push(new Producto('Monitor Hp 19"', 41000));
stock.push(new Producto('Teclado Logitech', 7620));
stock.push(new Producto('Mouse Redragon',11400));
stock.push(new Producto('Placa de Video Nvidia 3070', 268850));
stock.push(new Producto('Pc de Escritorio', 105900));
stock.push(new Producto('Impresora Laser Hp', 37650));
stock.push(new Producto('WebCam FHD', 4800));
stock.push(new Producto('Memoria Ram DDR4 8Gb', 12500));
stock.push(new Producto('Disco SSD Kingstone 120Gb',10500));

localStorage.setItem('stock',JSON.stringify(stock));




allEventListeners();


function allEventListeners()
{
  ////agregamos un escuchador del evento cuando el DOM se carga
  window.addEventListener('DOMContentLoaded', traerItems);
  btnVaciar.addEventListener('click', vaciarCarrito);
  btnOrdenar.addEventListener('click', ordenarCarrito);
  ///event listener de agregar un producto al carrito
  btnAgregar.addEventListener('submit', (e) =>
  {
    e.preventDefault(); ///evito el refresque
    const productoSeleccionado = stock[+selectProductos.value]; ///obtengo el producto elegido
    console.log(productoSeleccionado);
    const indiceCarrito = carrito.findIndex((item) => { return item.producto.nombre == productoSeleccionado.nombre});
    console.log(indiceCarrito);
    if (indiceCarrito != -1)
    {
      carrito[indiceCarrito].cantidad++;
    } else {
      const item = new Item(productoSeleccionado,1);
      carrito.push(item);
    }

    actualizarTablaCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito)); //actualizo el carrito en el localStorage
  });
  
}



function traerItems()
{
  ///traer los productos del localStorage
  ///si no hay nada inicializara stock en vacio []
  stock = JSON.parse(localStorage.getItem('stock')) || [];
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  popularDropDown();
  actualizarTablaCarrito();  
}


///rellenamos el dropDown de productos
function popularDropDown() {
  stock.forEach((producto,index) => {
    const option = document.createElement('option');
    option.textContent = `${producto.nombre}: ${producto.precio}`;
    option.value = index; ///el indice donde se encuentra este producto
    selectProductos.appendChild(option);
  });
}

function actualizarTablaCarrito()
{
  tabla.innerHTML = '';
  total.innerText = 0;
  carrito.length || btnVaciar.setAttribute('disabled', true);
  carrito.forEach((item) => {
    newRow(item);
  });
}



function newRow(item)
{
  const row = document.createElement('tr'); ///creo la fila
  let td = document.createElement('td');
  const posCarrito = carrito.indexOf(item); ///posicion del item en el carrito

  td.classList.add('font-white');
  td.textContent = item.producto.nombre;
  row.appendChild(td);
  
  td.classList.add('font-white');
  td = document.createElement('td');
  td.textContent = item.cantidad;
  row.appendChild(td);

  td.classList.add('font-white');
  td = document.createElement('td');
  td.textContent = item.producto.precio.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
  row.appendChild(td);

  const subtotal = item.producto.precio * item.cantidad;
  const tdSubtotal = document.createElement('td');
  tdSubtotal.textContent = subtotal.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
  row.appendChild(tdSubtotal);

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn btn-danger';
  btnEliminar.textContent = 'Eliminar';

  btnEliminar.onclick = () =>  ///resta 1 a la cantidad del producto y en caso de que tenga cantidad = 1 elimina la fila
  {
    if (item.cantidad > 1) {       
      item.cantidad--;
    } else {
      const index = carrito.indexOf(item);
      if (index !== -1) {
        carrito.splice(posCarrito,1);
      }
    }
    actualizarTablaCarrito();
    localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  td = document.createElement('td')
  td.appendChild(btnEliminar);
  row.appendChild(td);


  const btnAñadir = document.createElement('button');
  btnAñadir.className = 'btn btn-success';
  btnAñadir.textContent = 'Añadir';

  btnAñadir.onclick = () => 
  {
      console.log(posCarrito);
      carrito.includes(posCarrito,item.cantidad++);
      actualizarTablaCarrito();
      localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  td = document.createElement('td')
  td.appendChild(btnAñadir);
  row.appendChild(td);


  tabla.appendChild(row); ///le agrego al tbody una nueva fila
  btnVaciar.removeAttribute('disabled');


  
  ///calculo el total que tengo ahora
  
  const totalCarrito = carrito.reduce((acumulador, item) => acumulador + item.producto.precio * item.cantidad, 0);

  total.innerText = totalCarrito.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
}


function vaciarCarrito()
{
        Swal.fire({
          title: 'Desea eliminar los items del carrito?',
          confirmButtonText: 'Si',
          showCancelButton: true,
          cancelButtonText: 'Nop'
        }).then((resultado)=> {
            if (resultado.isConfirmed) {
              carrito = [];
              localStorage.setItem('carrito',JSON.stringify(carrito));
              actualizarTablaCarrito();
              Swal.fire({
                title: 'Carrito vaciado!',
                icon: 'success'
              });
            }
         });
          
}

function ordenarCarrito() {
  // Ordena el carrito en función del nombre del producto
  carrito.sort((a, b) => a.producto.nombre.localeCompare(b.producto.nombre));

  // Actualiza la tabla del carrito con el nuevo orden
  actualizarTablaCarrito();

  // Muestra un mensaje de éxito al usuario
  Swal.fire({
    title: 'Carrito ordenado',
    text: 'El carrito se ha ordenado alfabéticamente por el nombre del producto',
    icon: 'success'
  });
}
