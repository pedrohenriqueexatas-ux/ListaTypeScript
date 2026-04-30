export function exe1Cond(): void {
    var numero: number = Number(prompt("Informe um número!"))

    if (numero > 0) {
        if (numero % 2 === 0) {
            console.log("Seu número é Par e Positivo!")
        } else {
            console.log("Seu número é Ímpar e Positivo!")
        }
    } else if (numero === 0) {
        console.log("Seu número é Zero!")
    } else {
        if (numero % 2 === 0) {
            console.log("Seu número é Par e Negativo!")
        } else {
            console.log("Seu número é Ímpar e Negativo!")
        }
    }
}