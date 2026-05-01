export function exe5Array() {
    console.log("--- Exercício 5: Organizador de Tarefas Diárias ---");
    let tarefas: string[] = [];

    while (true) {
        let opcao = prompt("Menu de Tarefas:\n1. Adicionar Tarefa\n2. Marcar como Concluída (Remover)\n3. Exibir Pendentes\n4. Sair");

        if (opcao === "1") {
            let tarefa = prompt("Digite a nova tarefa:");
            if (tarefa) tarefas.push(tarefa);
        } else if (opcao === "2") {
            let itemRemover = prompt("Digite o nome da tarefa concluída:");
            let index = tarefas.indexOf(itemRemover || "");
            if (index !== -1) {
                tarefas.splice(index, 1);
                alert("Tarefa removida!");
            } else {
                alert("Tarefa não encontrada.");
            }
        } else if (opcao === "3") {
            alert("Tarefas Pendentes:\n" + (tarefas.length > 0 ? tarefas.join("\n") : "Nenhuma tarefa pendente."));
        } else if (opcao === "4" || opcao === null) {
            break;
        }
    }
}
