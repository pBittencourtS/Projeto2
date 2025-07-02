// EXEMPLO 1
function numerosSecretos(){
    alert("Seja bem-vindo ao nosso jogo");

    // Número aleatório
    let numerosSecreto = 9;
    // console.log(numerosSecreto);

    // Armazenando chute do Usuário
    let chute;
    let tentativas = 0;

    while(chute != numerosSecreto){
        chute = parseInt(prompt('Escolha um número entre 1 e 10'));
        tentativas++;
    
        if(chute == numerosSecreto){
            alert(`Parabéns! Você acertou o número secreto ${numerosSecreto} na ${tentativas} tentativa`);
        }else if(chute > numerosSecreto){
            alert(`O número secreto é menor que ${chute}. Tente novamente`);
        }else{
            alert(`O número secreto é maior que ${chute}. Tente novamente`);
        }
    }
}

// EXEMPLO 2
function calculoMedia(){
    alert("Executando cálculo de média");
    
    let qtdeNumeros;
    let soma = 0;
    
    // Usuário informa quantos números deseja insirir
    qtdeNumeros = Number(prompt("Quantos números você deseja insirir?"));

    for(let i = 0; i < qtdeNumeros; i++){
        soma += Number(prompt(`Informe o número: `));
    }

    // Média é calculada e exibida
    media = soma/qtdeNumeros;

    alert(`Média obtida: ${media}`);
}

// EXEMPLO 3
function somaNumeros(){
    alert("Executando soma de números");

    let x;
    let y;
    let soma;

    x = Number(prompt("Informe o primeiro número: "));
    y = Number(prompt("Informe o segundo número: "));
    soma = x + y;


    alert(`Resultado da soma de ${x} + ${y} = ${soma}`);
}