//Helpers
function esPar(numerito){
    return (numerito % 2 ===0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
}

//Calculadora de medianas  
function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const p1 = lista[mitad - 1];
        const p2 = lista[mitad];
        return (p1+p2)/2;
    }else{
        const personaMitad = lista[mitad]
        return personaMitad;
    }
}

//Mediana general   
const salariosCol = colombia.map(
    function (person){
        return person.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * (90))/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10); 

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});