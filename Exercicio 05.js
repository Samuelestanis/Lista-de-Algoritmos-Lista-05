let saldo=Number(prompt(`Digite seu saldo :`));
let saque=Number(prompt(`Digite o valor que vc quer sacar :`));

const valorfinal=saldo-saque

if(saldo>saque){
    console.log(`Saque realizado com sucesso! Novo saldo: ${valorfinal}`);
}
else{
    console.log(`Saldo insuficiente`)
}