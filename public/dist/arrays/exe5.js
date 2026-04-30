export function exe5Array() {
    var nomes = ["Ana", "Beto", "Carla", "David", "Elena"];
    var busca = String(prompt(`Lista: ${nomes.join(", ")}\nQuem você deseja buscar?`));
    var encontrado = false;
    for (var i = 0; i < nomes.length; i++) {
        if (nomes[i].toLowerCase() === busca.toLowerCase()) {
            console.log(`"${busca}" encontrado na posição ${i}!`);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        console.log(`"${busca}" não foi encontrado na lista.`);
    }
}
