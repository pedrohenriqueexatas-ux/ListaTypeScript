export function exe4Rep(): void {
    let qPares: number = 0;
    let qImpares: number = 0;
    let x: number;

    while (true) {
        x = Number(prompt("Digite um número (-1 para sair):"));
        if (x === -1) break;

        if (x % 2 === 0) qPares++;
        else qImpares++;
    }

    console.log(`Quantidade de números pares: ${qPares}`);
    console.log(`Quantidade de números ímpares: ${qImpares}`);
}
