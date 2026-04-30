function calcularConsumo(distancia: number, combustivel: number): number {
    return distancia / combustivel;
}

function calcularAutonomia(consumoMedio: number, capacidadeTanque: number): number {
    return consumoMedio * capacidadeTanque;
}

export function exe7Func(): void {
    const dist = Number(prompt("Distância percorrida (km):"));
    const gasto = Number(prompt("Combustível gasto (l):"));
    const tanque = Number(prompt("Capacidade total do tanque (l):"));

    const consumo = calcularConsumo(dist, gasto);
    const autonomia = calcularAutonomia(consumo, tanque);

    console.log(`Consumo médio: ${consumo.toFixed(2)} km/l`);
    console.log(`Autonomia total com tanque cheio: ${autonomia.toFixed(2)} km`);
}
