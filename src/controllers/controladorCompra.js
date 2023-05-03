    //llamo a la memoria para acceder a los datos Guardados:
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let nombre=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let vaciar=document.getElementById("empty")
vaciar.textContent=infoProducto.vaciar



let precioCOP=document.getElementById("precioCOP")
precio.textContent=infoProducto.precio
let cantidad=document.getElementById("cantidad")
cantidad.addEventListener("change",function(){ 
    
    let cantidad=document.getElementById("cantidad").value
    let precioUnitario=infoProducto.precio.split("COP ")[1]
    let subtotal=cantidad*precioUnitario
    console.log(subtotal)
    let psubtotal=document.getElementById("psubtotal")


    //precioCOP.textContent=infoProducto.precioCOP*cantidad.value
    })




let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infocarrito!=null){
carrito=infocarrito
pildora.textContent=carrito.length
}else{
    carrito=[]
}


let botonAgregarProducto=document.getElementById("btnagregarcarrito")



botonAgregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
    
})

vaciar.addEventListener("click",function(){
    carrito=[]
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
  })
    
  
  


    
    

    
    
    
    
    
