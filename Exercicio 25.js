let produtos = [];
let estoque = [];


function inventarioConsolidado(produtos, estoque){

console.log("==== INVENTÁRIO CONSOLIDADO ====");

for(let i = 0; i <= 3; i++){

let total = estoque[i][0] + estoque [i][1];

console.log(`${produtos[i]}: ${total} unidades`);
    
 }
}


for(let l = 0; l <= 3; l++){
    produtos[l] = prompt(`Digite o nome do produto ${l+1}:`);

    estoque[l] = [];

for(let c = 0; c <= 1; c++){
    estoque[l][c] = Number(prompt(`Quantidade de ${produtos[l]} na filial ${c+1}:`));
    }
}
inventarioConsolidado(produtos, estoque);