export function pintarProductos(productos){
    
    productos.forEach(function(producto){
   
        //creando columnas para alojar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //crear una tarjeta para almacenar la info del producto
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        //crear una imagen
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]

        //Crear Una descripcion
        let descripcion=document.createElement("h6")
        descripcion.classList.add("text-center","d-none")
        descripcion.textContent=producto.descripcion    
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        //crear un precio
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-bold")
        precio.textContent="COP "+producto.precio
        
        
        

        //Detectando evento
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })

        let precioCOP=document.createElement("h5")
        precio.classList.add("text-center","fs-4","text-success","fw-bold")
        precio.textContent="COP "+producto.precio

        let dolares=document.createElement("h5","fs-4","text-success","fw-bold")
        dolares.classList.add("text-center") 
        dolares.textContent=Math.trunc(producto.precio/4800)
    
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio) 
        tarjeta.appendChild(precioCOP)
        tarjeta.appendChild(dolares)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    })
}

