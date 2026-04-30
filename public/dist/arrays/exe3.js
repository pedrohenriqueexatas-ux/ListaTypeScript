export function exe3Array() {
    const lista = [];
    while (true) {
        const opcao = prompt("LISTA DE COMPRAS\n" +
            "1 - Adicionar item\n" +
            "2 - Ver todos os itens\n" +
            "3 - Quantidade de itens\n" +
            "4 - Remover item\n" +
            "5 - Finalizar (fim)\n" +
            "Digite sua opção ou 'fim':");
        if (!opcao || opcao.toLowerCase() === "fim" || opcao === "5")
            break;
        switch (opcao) {
            case "1":
                const novoItem = prompt("Nome do item:");
                if (novoItem)
                    lista.push(novoItem);
                break;
            case "2":
                console.log("Itens na lista:", lista.length > 0 ? lista.join(", ") : "Lista vazia");
                break;
            case "3":
                console.log(`A lista possui ${lista.length} itens.`);
                break;
            case "4":
                const itemRemover = prompt("Qual item deseja remover?");
                const index = lista.indexOf(itemRemover || "");
                if (index !== -1) {
                    lista.splice(index, 1);
                    console.log(`Item '${itemRemover}' removido.`);
                }
                else {
                    console.warn("Item não encontrado.");
                }
                break;
            default:
                console.warn("Opção inválida.");
        }
    }
    console.log("Programa finalizado.");
}
