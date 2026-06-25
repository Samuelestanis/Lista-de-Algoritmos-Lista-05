let m=[];
let b=[]


for(let l=0;l<=1;l++){
    m[l] = [];
    for(let c=0;c<=2;c++){
        m[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}]`));
    }
}
console.log("=== MATRIZ ORIGINAL ===")
    
    for(let l=0;l<=1;l++){
    let linha = " ";
    
for(let c=0;c<=2;c++){
    linha += m[l][c] + "\t";
 }
 console.log (linha);
 
}
 for(let l=0;l<=1;l++){
  for(let c=0;c<=2;c++){
      if(!b[c]){
            b[c] = [];
        }
     b[c][l]=m[l][c];
  }
 }
 console.log("=== MATRIZ TRANSPOSTA ===");

 for(let l=0;l<=2;l++){
    let linha = " ";
    
for(let c=0;c<=1;c++){
    linha += b[l][c] + "\t";
 }
 console.log (linha);
 }