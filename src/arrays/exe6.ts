export function exe6Array() {
    console.log("--- Exercício 6: Lista de 15 Nomes ---");
    let nomes: string[] = [];

    for (let i = 0; i < 15; i++) {
        let nome = prompt(`Digite o nome ${i + 1} de 15:`);
        nomes.push(nome || "Anônimo");
    }

    console.log("Nomes digitados:", nomes);
    const nomesOrdenados = [...nomes].sort();
    console.log("Nomes ordenados:", nomesOrdenados);

    alert("Nomes exibidos e ordenados no console (F12)!");
}
