export function exe4Array() {
    console.log("--- Exercício 4: Calculadora ENEM ---");

    function calcular_media(notas: number[]): number {
        const soma = notas.reduce((acc, n) => acc + n, 0);
        return parseFloat((soma / notas.length).toFixed(2));
    }

    let notasEnem: number[] = [];
    const materias = ["Ciências da Natureza", "Ciências Humanas", "Linguagens", "Matemática", "Redação"];

    for (let materia of materias) {
        let nota = prompt(`Digite a nota de ${materia}:`);
        notasEnem.push(parseFloat(nota || "0"));
    }

    const mediaFinal = calcular_media(notasEnem);
    alert(`A média final do ENEM é: ${mediaFinal}`);
    console.log("Notas individuais:", notasEnem);
}
