export function exe1Rep(): void {
    let soma: number = 0;
    let contador: number = 0;
    let num: number;

    do {
        num = Number(prompt("Digite um número (0 para sair):"));
        if (num !== 0) {
            soma += num;
            contador++;
        }
    } while (num !== 0);

    console.log(`Quantidade de números digitados: ${contador}`);
    console.log(`Soma total: ${soma}`);
}