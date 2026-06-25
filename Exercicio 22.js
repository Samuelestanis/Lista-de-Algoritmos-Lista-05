let m=[];


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

 let mult=Number(prompt(`Digite o multiplicador da matriz :`));
 
 for(let l=0;l<=3;l++){ 
     for(let c=0;c<=3;c++){
      m[l][c]=m[l][c]*mult  
    }
 }
 console.log("=== MATRIZ MULTIPLICADA ===");

for(let l = 0; l <= 3; l++){
    let linha = "";

    for(let c = 0; c <= 3; c++){
        linha += m[l][c] + "\t";
    }

    console.log(linha);
}
     