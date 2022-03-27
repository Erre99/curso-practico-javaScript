const lista1 = [
    100,
    200,
    400, 
    100000000,
]

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito) {
    if(numerito %2 === 0){
        return true;
    }else{
        return false;
    }
    
}

let mediana;

if (esPar(lista1.length)){
    const e1 = lista1[mitadLista1 - 1];
    const e2 = lista1[mitadLista1];
    const promedio = (e1+e2)/2;
    mediana = promedio 
}else{
    mediana = lista1[mitadLista1];
}

function calculaMediana (lista){
    lista.sort((a,b)=>a-b);
    console.log(lista);
    const mitadLista = lista.length/2
    if(esPar(lista.length)){
        const e1 = lista[mitadLista-1];
        const e2 = lista[mitadLista]
        return mediana = (e1+e2)/2
    }else{
        return mediana = lista[mitadLista]
    }
}

