// Geralmente nome de ações (verbos)

function boasVindas(nome){
    console.log(`Seja bem-vindo(a) ${nome ? nome : ""}`);
}

// Outra forma

function boasVindas2(nome = ""){
    console.log(`Seja bem-vindo(a) ${nome}`);
    
}

boasVindas("Carla");
boasVindas2()