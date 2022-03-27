//const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento (precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    return (precioOriginal * porcentajePrecioConDescuento)/100
}
/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/

function priceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,valueDiscount);
    const ResultP = document.getElementById("resultPrice");
    ResultP.innerText =   "El precio de tu articulo con descuento es: $" + precioConDescuento;

}