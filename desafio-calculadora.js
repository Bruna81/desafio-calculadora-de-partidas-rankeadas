avaliarDesempenho(25, 5);

//Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base no saldo de vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função que recebe vitórias e derrotas como parâmetros
function avaliarDesempenho(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);  //Saldo de vitórias
    const nivel = determinarNivel(vitorias); //Nível com base no saldo de vitórias

    //Mensagem de saída
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}
