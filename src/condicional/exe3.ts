export function exe3Cond(): void {
    var numero1: number = Number(prompt("Informe um número!"))
    var numero2: number = Number(prompt("Informe um número!"))
    var opcao: number = Number(prompt(
        "Escolha uma opção:\n" +
        "1 - Soma\n" +
        "2 - Subtração\n" +
        "3 - Multiplicação\n" +
        "4 - Divisão"
    ))

    switch (opcao) {
        case 1:
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
            break;
        case 2:
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
            break;
        case 3:
            console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`)
            break;
        case 4:
            if (numero2 !== 0) {
                console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
            } else {
                console.log("Indefinido!")
            }
            break;
        default:
            console.log("Opção inválida!")
    }
}