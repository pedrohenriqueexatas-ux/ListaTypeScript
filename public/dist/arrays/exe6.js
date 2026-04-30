export function exe6Array() {
    var numeros = [45, 12, 89, 3, 27, 56];
    console.log("Original:", numeros);
    // Usando uma lógica simples de ordenação (Bubble Sort) para ser didático
    for (var i = 0; i < numeros.length; i++) {
        for (var j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                var aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }
    console.log("Ordenado:", numeros);
}
