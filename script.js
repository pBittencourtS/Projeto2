// EXEMPLO 1
function numerosSecretos(){
    alert("Executando números secretos");

    let tentativas = 0;
    let x = 10; // número secreto
    let numeroUsuario;

    // Enquanto o usuário não acertar, perguntar o número de novo
    do{
        numeroUsuario = prompt("Informe um número");
        tentativas++;

        if(x != numeroUsuario){
            alert("Número incorreto")
        }

    }while(x != numeroUsuario)
    alert(`Parabéns, você acertou!\nNúmero secreto: ${x}\nTentativas: ${tentativas}`)
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