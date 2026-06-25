let m=[];
let soma=0;


for(let l=0;l<=3;l++){
    m[l] = [];
    for(let c=0;c<=3;c++){
        m[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}]`));
    }
}
    
    for(let l=0;l<=3;l++){
    let linha = " ";
    
for(let c=0;c<=3;c++){
    linha += m[l][c] + "\t";
 }
 console.log (linha);
 
}
for(let l=0;l<=3;l++){
soma+=m[l][1];
}
console.log(`A soma da segunda coluna é igual ${soma}`);