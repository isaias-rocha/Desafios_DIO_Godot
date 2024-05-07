const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o número de vitórias: ", (vitorias) => {
    readline.question("Digite o número de derrotas: ", (derrotas) => {
        calcularNivel(parseInt(vitorias), parseInt(derrotas));
        readline.close();
    });
});

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    console.log("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **" + nivel + "**");
}
