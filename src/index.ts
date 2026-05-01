import { exe1Cond } from "./condicional/exe1.js";
import { exe2Cond } from "./condicional/exe2.js";
import { exe3Cond } from "./condicional/exe3.js";
import { exe4Cond } from "./condicional/exe4.js";

import { exe1Rep } from "./repeticao/exe1.js";
import { exe2Rep } from "./repeticao/exe2.js";
import { exe3Rep } from "./repeticao/exe3.js";
import { exe4Rep } from "./repeticao/exe4.js";
import { exe5Rep } from "./repeticao/exe5.js";

import { exe1Func } from "./funcoes/exe1.js";
import { exe2Func } from "./funcoes/exe2.js";
import { exe3Func } from "./funcoes/exe3.js";
import { exe4Func } from "./funcoes/exe4.js";
import { exe5Func } from "./funcoes/exe5.js";
import { exe6Func } from "./funcoes/exe6.js";
import { exe7Func } from "./funcoes/exe7.js";
import { exe8Func } from "./funcoes/exe8.js";
import { exe9Func } from "./funcoes/exe9.js";
import { exe10Func } from "./funcoes/exe10.js";

import { exe1Array } from "./arrays/exe1.js";
import { exe2Array } from "./arrays/exe2.js";
import { exe3Array } from "./arrays/exe3.js";
import { exe4Array } from "./arrays/exe4.js";
import { exe5Array } from "./arrays/exe5.js";
import { exe6Array } from "./arrays/exe6.js";
import { exe7Array } from "./arrays/exe7.js";
import { exe8Array } from "./arrays/exe8.js";
import { exe9Array } from "./arrays/exe9.js";

const exercicios: Record<string, Function> = {
    // Condicional
    exe1Cond, exe2Cond, exe3Cond, exe4Cond,
    // Repetição
    exe1Rep, exe2Rep, exe3Rep, exe4Rep, exe5Rep,
    // Funções
    exe1Func, exe2Func, exe3Func, exe4Func, exe5Func, exe6Func, exe7Func, exe8Func, exe9Func, exe10Func,
    // Arrays
    exe1Array, exe2Array, exe3Array, exe4Array, exe5Array, exe6Array, exe7Array, exe8Array, exe9Array
};

function rodar(nome: string): void {
    const func = exercicios[nome];
    if (func) {
        console.log(`%c >>> Executando: ${nome} <<< `, "background: #2B2D42; color: #EDF2F4; font-weight: bold;");
        func();
    } else {
        console.warn("Exercício não encontrado: " + nome);
    }
}

function verCodigo(nome: string): void {
    const func = exercicios[nome];
    if (func) {
        console.log(`%c --- CÓDIGO FONTE DE ${nome} --- `, "background: #EF233C; color: #EDF2F4; font-weight: bold;");
        console.log(func.toString());
    } else {
        console.warn("Exercício não encontrado: " + nome);
    }
}

(window as any).rodar = rodar;
(window as any).verCodigo = verCodigo;
