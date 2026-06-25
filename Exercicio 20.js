let m=[];


for(let l=0;l<=2;l++){
    m[l] = [];
    for(let c=0;c<=2;c++){
        m[l][c] = Number(prompt(`Digite o valor para a posição [${l}][${c}]`));
        let maior=m[0][0];
    }
}
for(let l=0;l<=2;l++){
    for(let c=0;c<=2;c++){
        
    if(m[l][c]>m[0][0]){
      maior=m[l][c] ; 
   
   }
 }
}
for(let l=0;l<=2;l++){
    let linha = " ";
    
for(let c=0;c<=2;c++){
    linha += m[l][c] + "\t";
 }
 console.log (linha)
}
console.log(`O maior valor dessa matriz é ${maior}`);