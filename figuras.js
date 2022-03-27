//Código del cuadrado
console.group("Cuadrados"); 

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return  lado * 4;
} 
perimetroCuadrado();
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado){
    return lado*lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulo"); 

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm ", + ladoTriangulo2 + "cm "+ baseTriangulo + " cm y su altura es de: "+ alturaTriangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;

}

//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
//console.log("El área del triángulo es: " + areaTriangulo + " cm^2");
console.groupEnd();

//Código del círculo
console.group("Circulo"); 

/*const radio = 4;
const diametro = radio*2;
const pi = Math.PI;

console.log("El radio de nuestro círculo es: " + radio + "cm ", + "el diámetro del círculo es de: "+ diametro + " cm y el valor de PI es: "+ pi);*/
function diametroCirculo(radio) {
    return radio*radio;
}

function perimetroCirculo (radio){
    return diametroCirculo(radio)* Math.PI;
}
//console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

function areaCirculo (radio){
    return (radio*radio)*Math.PI;
}

// Aquí comenzamos a interacturar con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriagulo(){
    const inputLado1 = document.getElementById("InputLadoTriangulo");
    const value1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const value2 = inputLado2.value;
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = inputBase.value;
    const perimetro = perimetroTriangulo(value1,value2,valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}