function imprimirTabuada(numero = 0){
    for (let i = 0; i <= 10; i++){
        console.log(`${numero} X ${i} = ${numero * i}`)
    }
}

function repetirPalavra(palavra, vezes){
    for (i = 0; i <= (vezes - 1); i++){
        console.log(`${palavra}`)
    }
}

function verificarIntervalo(numero, min, max){
    if (numero >= min && numero <= max){
        console.log(`${numero} está no intervalo`)
    } else{
        console.log(`${numero} não está no intervalo`)
    }
}

function contarVogais(palavra){
    let vogais = ["a", "e", "i", "o", "u"];
    for (i = 0; i <= palavra.length; i++){
        if palavra[i] 
    }
}

verificarIntervalo(22, 20, 30)