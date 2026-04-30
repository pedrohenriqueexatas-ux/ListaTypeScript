function calcularSaque(valor) {
    let restante = valor;
    let n50 = 0;
    let n20 = 0;
    let n10 = 0;
    while (restante >= 50) {
        restante -= 50;
        n50++;
    }
    while (restante >= 20) {
        restante -= 20;
        n20++;
    }
    while (restante >= 10) {
        restante -= 10;
        n10++;
    }
    console.log(`Valor do saque: R$ ${valor}`);
    console.log(`Notas de 50: ${n50}`);
    console.log(`Notas de 20: ${n20}`);
    console.log(`Notas de 10: ${n10}`);
    if (restante > 0) {
        console.warn(`Valor restante que não pode ser sacado: R$ ${restante}`);
    }
}
export function exe4Func() {
    const saque = Number(prompt("Digite o valor para saque (múltiplo de 10):"));
    calcularSaque(saque);
}
