export function exe8Array() {
    console.log("--- Exercício 8: Boletim Híbrido ---");

    const notasSemestre: (number | "N.A")[] = [8.5, 10, "N.A", 7.2];

    console.log("Processando Boletim:");
    for (let nota of notasSemestre) {
        if (typeof nota === "number") {
            console.log(`Nota: ${nota}`);
        } else {
            console.log("O aluno não realizou a prova");
        }
    }

    alert("Boletim processado no console (F12)!");
}
