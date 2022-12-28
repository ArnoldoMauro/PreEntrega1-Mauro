// ** Venta de empanadas **
// iniciacion de variables
let precioSinIva = 100.00;
let precioConIva = 0.00;
let precio = 0;
let i = 1;
let sabor = "";
let valorFinal = 0;
let formaPago = "";

// calculo del precio final
precioConIva = parseFloat(precioSinIva * 1.21);

//tomar pedidos y mostrar el precio final
let cantidad = Number(parseInt(prompt("Ingrese la cantidad de empanadas a comprar:")));
alert('Los sabores de nuestras empanadas son: \n Carne \n Jamon y Queso \n Humita \n Arabes \n Salteñas');
sabor = prompt("Ingrese la opcion de su preferencia: \n 1. Carne \n 2. Jamón y Queso \n 3. Humita \n 4. Arabes \n 5. Salteñas");

// calculo del monto de la compra
function total() {
    while (i<=cantidad) {               
        precio = parseFloat(precio + precioConIva);        
        i++;
    }    
}

switch (sabor) {
    case "1":
        sabor = "Carne"
        break;
    case "2":
        sabor = "Jamón y Queso"
        break;
    case "3":
        sabor = "Humita"
        break;
    case "4":
        sabor = "Árabes"
        break;        
    case "5":
        sabor = "Salteñas"
        break;    
    default:
        break;
}
total();

alert("el cliente pidió " + cantidad + " empanadas " + sabor);
alert("el total de su compra es: $ " + precio + " (IVA incluido)");

// formas de pago
let opcion = parseInt(prompt("Ingrese la forma de pago: 1 (efectivo), 2 (tarjeta)"));
switch (opcion) {
    case 1:
        // efectivo: se descuenta un 10%
        valorFinal = parseFloat(precio * 0.90);
        formaPago = "efectivo";
        console.log("descuento del 10% por pago en efectivo");
        break;

    case 2:
        // tarjeta: se paga el valor calculado en la funcion total() 
        valorFinal = parseFloat(precio);
        formaPago = "tarjeta";
        console.log("no se aplica descuento por pago con tarjeta");
        break;    
    default:
        break;
}
alert("el precio final a pagar en " + formaPago + " es $ " + valorFinal);
alert("MUCHAS GRACIAS POR SU COMPRA");