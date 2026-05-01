export function exe7Array() {
    console.log("--- Exercício 7: Lista de Presença ---");

    const presenca: string[] = [];

    presenca.push("João", "Maria", "Pedro", "Ana", "Lucas");

    console.log("Lista de Presença (Maiúsculas):");
    for (let aluno of presenca) {
        console.log(aluno.toUpperCase());
    }

    alert("Lista impressa em MAIÚSCULAS no console (F12)!");
}
