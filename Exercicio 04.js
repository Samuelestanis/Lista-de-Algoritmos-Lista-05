let vet=[];

for(let i=0;i<=2;i++){
    
    vet[i]=Number(prompt(`Digite o lado do triangulo`));
    
}
if(vet[0]==vet[1] && vet[1]==vet[2]){
    console.log(`Triângulo Equilátero`);
}
else if(vet[0]==vet[1] || vet[0]==vet[2] || vet[1]==vet[2]){
   console.log(`Triângulo Isóceles`); 
}
else{
  console.log(`Triângulo Escaleno`); 
}