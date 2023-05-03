import {productos} from '../helpers/baseDatos.js'
import {pintarProductos} from '../helpers/pintarProductos.js'


//llamando a la fila
let fila=document.getElementById("fila")
//Pintar los productos de la tienda
pintarProductos(productos)

//escuchando Clic En la fila contenedora de productos
fila.addEventListener("click",function(evento){
    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement

    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent
    datosProductoSeleccionado.precioCOP=tarjeta.querySelector("h5",).textContent
    datosProductoSeleccionado.descripcion=tarjeta.querySelector(".d-none").textContent  
    console.log(datosProductoSeleccionado)

    //usaremos la memoria del pc para guardar esta info 
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))
    
    window.location.href="./src/views/ampliarinfo.html"
    
    const btnEliminar = document.querySelector('#eliminarProducto');
btnEliminar.addEventListener('click', function() {
  const productoId = this.dataset.productId;
  // Código para eliminar el producto con el ID `productoId`
});



})
