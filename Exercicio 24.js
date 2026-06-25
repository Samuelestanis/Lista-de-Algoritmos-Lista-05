let matriz = [];
let medias = [];

for(let l=0;l<=3;l++){
    matriz[l] = [];
    for(let c=0;c<=2;c++){
    
        matriz[l][c] =Number(prompt(`Qual a nota da equipe ${l+1} no trimestre ${c+1}`));
    
  }
}
for(let l=0;l<=3;l++){
    let soma = 0;
    for(let c=0;c<=2;c++){
        soma += matriz[l][c];
    }
    medias[l] = soma/3;
    
}
for(let l=0;l<=3;l++){
console.log(`A média da equipe ${l+1} é ${medias[l]}`);
}