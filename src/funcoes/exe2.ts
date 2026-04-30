function ler_temperatura(): number {
    return Number(prompt("Digite a temperatura atual da estufa:"));
}

function verificar_alerta_temperatura(temp: number): boolean {
    return temp < 10 || temp > 30;
}

function emitir_mensagem_alerta(status_alerta: boolean): void {
    if (status_alerta) {
        console.log("ALERTA: Temperatura fora da faixa ideal!");
    } else {
        console.log("Temperatura dentro da faixa normal.");
    }
}

export function exe2Func(): void {
    const t = ler_temperatura();
    const alerta = verificar_alerta_temperatura(t);
    emitir_mensagem_alerta(alerta);
}
