let senha=prompt(`Digite a senha :`);
let tentativas=0;
tentativas++

while(senha!=='segredo123' && tentativas<=2){
    senha=prompt('Senha incorreta, Tente novamente! :');
    tentativas++;
}
if(tentativas===3){
    console.log(`Conta Bloqueada`)
}
else{
 console.log(`Acesso Permitido`)
}