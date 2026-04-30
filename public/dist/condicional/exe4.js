export function exe4Cond() {
    var numero1 = Number(prompt("Informe o primeiro número:"));
    var numero2 = Number(prompt("Informe o segundo número:"));
    if (numero1 === numero2) {
        console.log(`Números Iguais`);
    }
    else if (numero1 > numero2) {
        console.log(`Primeiro é maior`);
    }
    else if (numero2 > numero1) {
        console.log(`Segundo maior`);
    }
    else {
        console.log(`[Erro] Dados inválidos!`);
    }
}
