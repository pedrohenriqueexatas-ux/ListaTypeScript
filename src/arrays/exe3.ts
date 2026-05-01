export function exe3Array() {
    console.log("--- Exercício 3: Lista de Compras ---");
    let lista: string[] = [];

    while (true) {
        let opcao = prompt("Menu Lista de Compras:\n1. Adicionar Item\n2. Ver Todos\n3. Quantidade de Itens\n4. Remover Item\n5. Sair (fim)");

        if (opcao === "1") {
            let item = prompt("Digite o nome do item:");
            if (item) lista.push(item);
        } else if (opcao === "2") {
            alert("Itens: " + (lista.length > 0 ? lista.join(", ") : "Lista vazia"));
        } else if (opcao === "3") {
            alert("Total de itens: " + lista.length);
        } else if (opcao === "4") {
            let itemRemover = prompt("Digite o nome do item para remover:");
            let index = lista.indexOf(itemRemover || "");
            if (index !== -1) {
                lista.splice(index, 1);
                alert("Item removido!");
            } else {
                alert("Item não encontrado.");
            }
        } else if (opcao === "5" || (opcao && opcao.toLowerCase() === "fim") || opcao === null) {
            break;
        }
    }
}
