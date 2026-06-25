let a=[];
let b=[];
let c=[];

for(let i=0;i<=4;i++){
    a[i]=Number(prompt(`Digite o valor pra posição ${i+1} do vetor A :`));
}

for(let i=0;i<=4;i++){
     b[i]=Number(prompt(`Digite o valor pra posição ${i+1} do vetor B :`));
}
console.log(a);
console.log(b);

for(let i = 0; i <= 4; i++){
    c[2*i] = a[i];       
    c[2*i + 1] = b[i];  
}
console.log(c)