function calcularIdade(){
    let idade = document.querySelector("#idade").value;

    if(idade.length > 0){
        if(idade >= 18){
            alert("Maior de idade");
        } else{
            alert("Menor de idade");
        }
    } else {
        alert("Digite um valor válido");
    }
}

function calcularMaior(){
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let maior = 0;

    if(numero1 && numero2 != 0){
        if(numero1 > numero2){
            maior = numero1
            alert(`O maior número é o ${numero1}`);
        } else if(numero2 > numero1) {
            maior = numero2
            alert(`O maior número é o ${numero2}`);
        } else {
            alert("Os números são iguais")
        }
    } else {
        alert("Digite um valor válido");
    }
}

function parOuImpar(){
    numero = document.querySelector("#numero").value;

    if (numero != 0){
        if (numero % 2 == 0){
            alert(`O número ${numero} é par`)
        } else{
            alert(`O número ${numero} é ímpar`)
        }
    } else {
        alert("Digite um número diferente de 0")
    }
}

function calcularMedia(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let num3 = parseInt(document.querySelector("#num3").value);
    let media = (num1 + num2 + num3) / 3
    console.log(num1);
    console.log(num2);
    console.log(num3); 
    console.log(num1 + num2 + num3);
    console.log(media.toFixed(1));

    if (media >= 7){
        alert("APROVADO")
    } else if(media < 7 && media > 5){
        alert("RECUPERAÇÃO")
    } else{
        alert("REPROVADO")
    }
}

function calcularDesconto(){
    let valorCompra = parseInt(document.querySelector("#valorCompra"))
    console.log(valorCompra)

    if (valorCompra > 100){
        valorCompra = valorCompra - (valorCompra * 0.1)
        alert(`Parabéns! O seu produto custará ${valorCompra}`)
    } else{
        alert("Sem desconto pra você")
    }
}

function eBissexto(){
    let ano = parseInt(document.querySelector("#ano").value);

    if (ano % 4 == 0){
        alert(`O ano de ${ano} é bissexto!`)
    } else {
        alert("Este ano não é bissexto...")
    }
}

function 

let semaforo = "amarelo"
switch (semaforo) {
    case "verde":
        console.log("Siga");
        break;

    case "amarelo":
        console.log("Prossiga com cuidado");
        break;    

    case "vermelho":
        console.log("Pare");
        break;

    default: // igual ao estatuto Else, caso nenhuma das opções se aplicarem
        console.log("Semaforo com defeito");
        break;
}

