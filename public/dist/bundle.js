"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/condicional/exe1.ts
  function exe1Cond() {
    var numero = Number(prompt("Informe um n\xFAmero!"));
    if (numero > 0) {
      if (numero % 2 === 0) {
        console.log("Seu n\xFAmero \xE9 Par e Positivo!");
      } else {
        console.log("Seu n\xFAmero \xE9 \xCDmpar e Positivo!");
      }
    } else if (numero === 0) {
      console.log("Seu n\xFAmero \xE9 Zero!");
    } else {
      if (numero % 2 === 0) {
        console.log("Seu n\xFAmero \xE9 Par e Negativo!");
      } else {
        console.log("Seu n\xFAmero \xE9 \xCDmpar e Negativo!");
      }
    }
  }
  var init_exe1 = __esm({
    "src/condicional/exe1.ts"() {
      "use strict";
    }
  });

  // src/condicional/exe2.ts
  function exe2Cond() {
    var mes = Number(prompt("Digite em forma de n\xFAmero o m\xEAs: (Entre 1 e 12)"));
    if (mes >= 1 && mes <= 3) {
      if (mes === 1) {
        console.log("Janeiro: Ver\xE3o");
      } else if (mes === 2) {
        console.log("Fevereiro: Ver\xE3o");
      } else {
        console.log("Mar\xE7o: Ver\xE3o");
      }
    } else if (mes <= 6) {
      if (mes === 4) {
        console.log("Abril: Outono");
      } else if (mes === 5) {
        console.log("Maio: Outono");
      } else {
        console.log("Junho: Outono");
      }
    } else if (mes <= 9) {
      if (mes === 7) {
        console.log("Julho: Inverno");
      } else if (mes === 8) {
        console.log("Agosto: Inverno");
      } else {
        console.log("Setembro: Inverno");
      }
    } else if (mes <= 12) {
      if (mes === 10) {
        console.log("Outubro: Primavera");
      } else if (mes === 11) {
        console.log("Novembro: Primavera");
      } else {
        console.log("Dezembro: Primavera");
      }
    } else {
      console.log("[Erro] Informe corretamente!");
    }
  }
  var init_exe2 = __esm({
    "src/condicional/exe2.ts"() {
      "use strict";
    }
  });

  // src/condicional/exe3.ts
  function exe3Cond() {
    var numero1 = Number(prompt("Informe um n\xFAmero!"));
    var numero2 = Number(prompt("Informe um n\xFAmero!"));
    var opcao = Number(prompt(
      "Escolha uma op\xE7\xE3o:\n1 - Soma\n2 - Subtra\xE7\xE3o\n3 - Multiplica\xE7\xE3o\n4 - Divis\xE3o"
    ));
    switch (opcao) {
      case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
      case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
      case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
      case 4:
        if (numero2 !== 0) {
          console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        } else {
          console.log("Indefinido!");
        }
        break;
      default:
        console.log("Op\xE7\xE3o inv\xE1lida!");
    }
  }
  var init_exe3 = __esm({
    "src/condicional/exe3.ts"() {
      "use strict";
    }
  });

  // src/condicional/exe4.ts
  function exe4Cond() {
    var numero1 = Number(prompt("Informe o primeiro n\xFAmero:"));
    var numero2 = Number(prompt("Informe o segundo n\xFAmero:"));
    if (numero1 === numero2) {
      console.log(`N\xFAmeros Iguais`);
    } else if (numero1 > numero2) {
      console.log(`Primeiro \xE9 maior`);
    } else if (numero2 > numero1) {
      console.log(`Segundo maior`);
    } else {
      console.log(`[Erro] Dados inv\xE1lidos!`);
    }
  }
  var init_exe4 = __esm({
    "src/condicional/exe4.ts"() {
      "use strict";
    }
  });

  // src/repeticao/exe1.ts
  function exe1Rep() {
    let soma = 0;
    let contador = 0;
    let num;
    do {
      num = Number(prompt("Digite um n\xFAmero (0 para sair):"));
      if (num !== 0) {
        soma += num;
        contador++;
      }
    } while (num !== 0);
    console.log(`Quantidade de n\xFAmeros digitados: ${contador}`);
    console.log(`Soma total: ${soma}`);
  }
  var init_exe12 = __esm({
    "src/repeticao/exe1.ts"() {
      "use strict";
    }
  });

  // src/repeticao/exe2.ts
  function exe2Rep() {
    const num = Number(prompt("Digite um n\xFAmero para ver a tabuada:"));
    console.log(`Tabuada do ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  var init_exe22 = __esm({
    "src/repeticao/exe2.ts"() {
      "use strict";
    }
  });

  // src/repeticao/exe3.ts
  function exe3Rep() {
    let totalSalarios = 0;
    let maiorSalario = -1;
    let nomeMaiorSalario = "";
    let qtdMasc = 0;
    let qtdFem = 0;
    let continuar = true;
    while (continuar) {
      const nome = prompt("Nome do oper\xE1rio:") || "Sem nome";
      const horas = Number(prompt("Horas trabalhadas:"));
      const valorHora = Number(prompt("Valor por hora:"));
      const sexo = (prompt("Sexo (M/F):") || "").toUpperCase();
      const salario = horas * valorHora;
      totalSalarios += salario;
      if (salario > maiorSalario) {
        maiorSalario = salario;
        nomeMaiorSalario = nome;
      }
      if (sexo === "M") qtdMasc++;
      else if (sexo === "F") qtdFem++;
      continuar = confirm("Deseja cadastrar outro oper\xE1rio?");
    }
    const totalOperarios = qtdMasc + qtdFem;
    const percMasc = totalOperarios > 0 ? qtdMasc / totalOperarios * 100 : 0;
    const percFem = totalOperarios > 0 ? qtdFem / totalOperarios * 100 : 0;
    console.log(`Sal\xE1rio total da equipe: R$ ${totalSalarios.toFixed(2)}`);
    console.log(`Maior sal\xE1rio: R$ ${maiorSalario.toFixed(2)} (${nomeMaiorSalario})`);
    console.log(`Masculinos: ${qtdMasc} (${percMasc.toFixed(1)}%)`);
    console.log(`Femininos: ${qtdFem} (${percFem.toFixed(1)}%)`);
  }
  var init_exe32 = __esm({
    "src/repeticao/exe3.ts"() {
      "use strict";
    }
  });

  // src/repeticao/exe4.ts
  function exe4Rep() {
    let qPares = 0;
    let qImpares = 0;
    let x;
    while (true) {
      x = Number(prompt("Digite um n\xFAmero (-1 para sair):"));
      if (x === -1) break;
      if (x % 2 === 0) qPares++;
      else qImpares++;
    }
    console.log(`Quantidade de n\xFAmeros pares: ${qPares}`);
    console.log(`Quantidade de n\xFAmeros \xEDmpares: ${qImpares}`);
  }
  var init_exe42 = __esm({
    "src/repeticao/exe4.ts"() {
      "use strict";
    }
  });

  // src/repeticao/exe5.ts
  function classificarVenda(valor) {
    if (valor < 1e3) return "Bronze";
    if (valor <= 5e3) return "Prata";
    return "Ouro";
  }
  function exe5Rep() {
    let totalVendas = 0;
    let maiorVenda = -1;
    let qtdOuro = 0;
    for (let i = 1; i <= 5; i++) {
      const valor = Number(prompt(`Digite o valor da venda do vendedor ${i}:`));
      totalVendas += valor;
      if (valor > maiorVenda) maiorVenda = valor;
      const categoria = classificarVenda(valor);
      console.log(`Vendedor ${i}: R$ ${valor.toFixed(2)} (${categoria})`);
      if (categoria === "Ouro") qtdOuro++;
    }
    console.log(`Total de vendas da equipe: R$ ${totalVendas.toFixed(2)}`);
    console.log(`Maior venda individual: R$ ${maiorVenda.toFixed(2)}`);
    console.log(`Vendedores na categoria Ouro: ${qtdOuro}`);
  }
  var init_exe5 = __esm({
    "src/repeticao/exe5.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe1.ts
  function somarAte(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }
  function exe1Func() {
    const num = Number(prompt("Digite um n\xFAmero inteiro positivo:"));
    if (num > 0) {
      const resultado = somarAte(num);
      console.log(`A soma de 1 at\xE9 ${num} \xE9 ${resultado}`);
    } else {
      console.warn("Por favor, digite um n\xFAmero positivo.");
    }
  }
  var init_exe13 = __esm({
    "src/funcoes/exe1.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe2.ts
  function ler_temperatura() {
    return Number(prompt("Digite a temperatura atual da estufa:"));
  }
  function verificar_alerta_temperatura(temp) {
    return temp < 10 || temp > 30;
  }
  function emitir_mensagem_alerta(status_alerta) {
    if (status_alerta) {
      console.log("ALERTA: Temperatura fora da faixa ideal!");
    } else {
      console.log("Temperatura dentro da faixa normal.");
    }
  }
  function exe2Func() {
    const t = ler_temperatura();
    const alerta = verificar_alerta_temperatura(t);
    emitir_mensagem_alerta(alerta);
  }
  var init_exe23 = __esm({
    "src/funcoes/exe2.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe3.ts
  function desenharTriangulo(linhas) {
    for (let i = 1; i <= linhas; i++) {
      let linha = "";
      for (let j = 1; j <= i; j++) {
        linha += "*";
      }
      console.log(linha);
    }
  }
  function exe3Func() {
    const n = Number(prompt("Digite o tamanho do tri\xE2ngulo:"));
    desenharTriangulo(n);
  }
  var init_exe33 = __esm({
    "src/funcoes/exe3.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe4.ts
  function calcularSaque(valor) {
    let restante = valor;
    let n50 = 0;
    let n20 = 0;
    let n10 = 0;
    while (restante >= 50) {
      restante -= 50;
      n50++;
    }
    while (restante >= 20) {
      restante -= 20;
      n20++;
    }
    while (restante >= 10) {
      restante -= 10;
      n10++;
    }
    console.log(`Valor do saque: R$ ${valor}`);
    console.log(`Notas de 50: ${n50}`);
    console.log(`Notas de 20: ${n20}`);
    console.log(`Notas de 10: ${n10}`);
    if (restante > 0) {
      console.warn(`Valor restante que n\xE3o pode ser sacado: R$ ${restante}`);
    }
  }
  function exe4Func() {
    const saque = Number(prompt("Digite o valor para saque (m\xFAltiplo de 10):"));
    calcularSaque(saque);
  }
  var init_exe43 = __esm({
    "src/funcoes/exe4.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe5.ts
  function listarMultiplos3(inicio, fim) {
    console.log(`M\xFAltiplos de 3 entre ${inicio} e ${fim}:`);
    for (let i = inicio; i <= fim; i++) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
  }
  function exe5Func() {
    const start = Number(prompt("Digite o in\xEDcio do intervalo:"));
    const end = Number(prompt("Digite o fim do intervalo:"));
    listarMultiplos3(start, end);
  }
  var init_exe52 = __esm({
    "src/funcoes/exe5.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe6.ts
  function calcularFolha(valorHora, qtdHoras) {
    const bruto = valorHora * qtdHoras;
    let irPercentual = 0;
    if (bruto <= 2428.8) irPercentual = 0;
    else if (bruto <= 2826.65) irPercentual = 7.5;
    else if (bruto <= 3751.05) irPercentual = 15;
    else if (bruto <= 4664.68) irPercentual = 22.5;
    else irPercentual = 27.5;
    const irValor = bruto * (irPercentual / 100);
    const inss = bruto * 0.1;
    const sindicato = bruto * 0.03;
    const valeTransp = bruto * 0.06;
    const valeAlim = bruto * 0.08;
    const fgts = bruto * 0.11;
    const totalDescontos = irValor + inss + sindicato + valeTransp + valeAlim;
    const liquido = bruto - totalDescontos;
    console.log(`Sal\xE1rio Bruto: (${valorHora} * ${qtdHoras}) : R$ ${bruto.toFixed(2)}`);
    console.log(`(-) IR (${irPercentual}%) : R$ ${irValor.toFixed(2)}`);
    console.log(`(-) INSS (10%) : R$ ${inss.toFixed(2)}`);
    console.log(`(-) SINDICATO (3%) : R$ ${sindicato.toFixed(2)}`);
    console.log(`(-) V. ALIMENTA\xC7\xC3O (8%) : R$ ${valeAlim.toFixed(2)}`);
    console.log(`(-) V. TRANSPORTE (6%) : R$ ${valeTransp.toFixed(2)}`);
    console.log(`FGTS (11%) : R$ ${fgts.toFixed(2)} (N\xE3o descontado)`);
    console.log(`Total de descontos : R$ ${totalDescontos.toFixed(2)}`);
    console.log(`Sal\xE1rio L\xEDquido : R$ ${liquido.toFixed(2)}`);
  }
  function exe6Func() {
    const vHora = Number(prompt("Valor da hora:"));
    const hMes = Number(prompt("Horas trabalhadas no m\xEAs:"));
    calcularFolha(vHora, hMes);
  }
  var init_exe6 = __esm({
    "src/funcoes/exe6.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe7.ts
  function calcularConsumo(distancia, combustivel) {
    return distancia / combustivel;
  }
  function calcularAutonomia(consumoMedio, capacidadeTanque) {
    return consumoMedio * capacidadeTanque;
  }
  function exe7Func() {
    const dist = Number(prompt("Dist\xE2ncia percorrida (km):"));
    const gasto = Number(prompt("Combust\xEDvel gasto (l):"));
    const tanque = Number(prompt("Capacidade total do tanque (l):"));
    const consumo = calcularConsumo(dist, gasto);
    const autonomia = calcularAutonomia(consumo, tanque);
    console.log(`Consumo m\xE9dio: ${consumo.toFixed(2)} km/l`);
    console.log(`Autonomia total com tanque cheio: ${autonomia.toFixed(2)} km`);
  }
  var init_exe7 = __esm({
    "src/funcoes/exe7.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe8.ts
  function processarItem(preco, qtd) {
    let total = preco * qtd;
    if (qtd > 10) {
      total *= 0.95;
      console.log(`Desconto de 5% aplicado para ${qtd} unidades.`);
    }
    return total;
  }
  function exe8Func() {
    let totalGeral = 0;
    let somaPrecos = 0;
    let contador = 0;
    while (true) {
      const preco = Number(prompt("Pre\xE7o unit\xE1rio do produto (0 para sair):"));
      if (preco === 0) break;
      const qtd = Number(prompt("Quantidade comprada:"));
      const valorFinal = processarItem(preco, qtd);
      totalGeral += valorFinal;
      somaPrecos += preco;
      contador++;
      console.log(`Valor do item: R$ ${valorFinal.toFixed(2)}`);
    }
    if (contador > 0) {
      console.log(`Total geral investido: R$ ${totalGeral.toFixed(2)}`);
      console.log(`M\xE9dia de pre\xE7o dos produtos: R$ ${(somaPrecos / contador).toFixed(2)}`);
    } else {
      console.log("Nenhum produto cadastrado.");
    }
  }
  var init_exe8 = __esm({
    "src/funcoes/exe8.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe9.ts
  function solicitar_renda_mensal() {
    let renda;
    do {
      renda = Number(prompt("Digite sua renda mensal:"));
      if (renda <= 0) console.warn("Renda deve ser maior que zero!");
    } while (renda <= 0);
    return renda;
  }
  function analisar_credito(renda, parcela) {
    const limiteParcela = renda * 0.3;
    let aprovado = parcela <= limiteParcela;
    if (aprovado && renda > 5e3) {
      console.log("Parab\xE9ns! Voc\xEA ganhou um b\xF4nus de R$ 500,00 no limite por ter renda superior a R$ 5000.");
    }
    return aprovado;
  }
  function exibir_status(resultado) {
    if (resultado) {
      console.log("STATUS: Cr\xE9dito Aprovado");
    } else {
      console.log("STATUS: Cr\xE9dito Negado (Parcela excede 30% da renda)");
    }
  }
  function exe9Func() {
    const renda = solicitar_renda_mensal();
    const valorParcela = Number(prompt("Qual o valor da parcela desejada?"));
    const resultado = analisar_credito(renda, valorParcela);
    exibir_status(resultado);
  }
  var init_exe9 = __esm({
    "src/funcoes/exe9.ts"() {
      "use strict";
    }
  });

  // src/funcoes/exe10.ts
  function calcular_imc(peso, altura) {
    return peso / (altura * altura);
  }
  function classificar_imc(valor_imc) {
    if (valor_imc < 18.5) return "Abaixo do peso";
    if (valor_imc <= 24.9) return "Peso Normal";
    return "Sobrepeso";
  }
  function exibir_laudo(nome, classificacao) {
    console.log(`Paciente: ${nome} - Status: ${classificacao}`);
  }
  function exe10Func() {
    const nome = prompt("Nome do aluno:") || "An\xF4nimo";
    const peso = Number(prompt("Peso (kg):"));
    const altura = Number(prompt("Altura (m):"));
    const imc = calcular_imc(peso, altura);
    const classe = classificar_imc(imc);
    exibir_laudo(nome, classe);
  }
  var init_exe10 = __esm({
    "src/funcoes/exe10.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe1.ts
  function exe1Array() {
    console.log("--- Exerc\xEDcio 1: Derivadas de [0...15] ---");
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const pares = numeros.filter((n) => n % 2 === 0);
    const impares = numeros.filter((n) => n % 2 !== 0);
    const multiplos = numeros.filter((n) => n % 2 === 0 || n % 3 === 0 || n % 4 === 0);
    const reverso = [...numeros].reverse();
    console.log("Pares:", pares);
    console.log("\xCDmpares:", impares);
    console.log("M\xFAltiplos de 2, 3 e 4:", multiplos);
    console.log("Lista Reversa:", reverso);
    alert("Resultados impressos no console (F12)!");
  }
  var init_exe14 = __esm({
    "src/arrays/exe1.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe2.ts
  function exe2Array() {
    console.log("--- Exerc\xEDcio 2: Sistema de Notas (At\xE9 -1) ---");
    let notas = [];
    let nota;
    while (true) {
      let input = prompt("Digite uma nota (ou -1 para encerrar):");
      if (input === null || input === "-1") break;
      nota = parseFloat(input);
      if (!isNaN(nota)) {
        notas.push(nota);
      }
    }
    if (notas.length === 0) {
      alert("Nenhuma nota informada.");
      return;
    }
    const soma = notas.reduce((acc, n) => acc + n, 0);
    const media = soma / notas.length;
    const acimaMedia = notas.filter((n) => n > media).length;
    console.log("Quantidade de notas:", notas.length);
    console.log("Notas na ordem informada:", notas);
    console.log("Notas na ordem inversa:", [...notas].reverse());
    console.log("Soma das notas:", soma);
    console.log("M\xE9dia das notas:", media.toFixed(2));
    console.log("Notas acima da m\xE9dia:", acimaMedia);
    alert("Estat\xEDsticas impressas no console (F12)!");
  }
  var init_exe24 = __esm({
    "src/arrays/exe2.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe3.ts
  function exe3Array() {
    console.log("--- Exerc\xEDcio 3: Lista de Compras ---");
    let lista = [];
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
          alert("Item n\xE3o encontrado.");
        }
      } else if (opcao === "5" || opcao && opcao.toLowerCase() === "fim" || opcao === null) {
        break;
      }
    }
  }
  var init_exe34 = __esm({
    "src/arrays/exe3.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe4.ts
  function exe4Array() {
    console.log("--- Exerc\xEDcio 4: Calculadora ENEM ---");
    function calcular_media(notas) {
      const soma = notas.reduce((acc, n) => acc + n, 0);
      return parseFloat((soma / notas.length).toFixed(2));
    }
    let notasEnem = [];
    const materias = ["Ci\xEAncias da Natureza", "Ci\xEAncias Humanas", "Linguagens", "Matem\xE1tica", "Reda\xE7\xE3o"];
    for (let materia of materias) {
      let nota = prompt(`Digite a nota de ${materia}:`);
      notasEnem.push(parseFloat(nota || "0"));
    }
    const mediaFinal = calcular_media(notasEnem);
    alert(`A m\xE9dia final do ENEM \xE9: ${mediaFinal}`);
    console.log("Notas individuais:", notasEnem);
  }
  var init_exe44 = __esm({
    "src/arrays/exe4.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe5.ts
  function exe5Array() {
    console.log("--- Exerc\xEDcio 5: Organizador de Tarefas Di\xE1rias ---");
    let tarefas = [];
    while (true) {
      let opcao = prompt("Menu de Tarefas:\n1. Adicionar Tarefa\n2. Marcar como Conclu\xEDda (Remover)\n3. Exibir Pendentes\n4. Sair");
      if (opcao === "1") {
        let tarefa = prompt("Digite a nova tarefa:");
        if (tarefa) tarefas.push(tarefa);
      } else if (opcao === "2") {
        let itemRemover = prompt("Digite o nome da tarefa conclu\xEDda:");
        let index = tarefas.indexOf(itemRemover || "");
        if (index !== -1) {
          tarefas.splice(index, 1);
          alert("Tarefa removida!");
        } else {
          alert("Tarefa n\xE3o encontrada.");
        }
      } else if (opcao === "3") {
        alert("Tarefas Pendentes:\n" + (tarefas.length > 0 ? tarefas.join("\n") : "Nenhuma tarefa pendente."));
      } else if (opcao === "4" || opcao === null) {
        break;
      }
    }
  }
  var init_exe53 = __esm({
    "src/arrays/exe5.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe6.ts
  function exe6Array() {
    console.log("--- Exerc\xEDcio 6: Lista de 15 Nomes ---");
    let nomes = [];
    for (let i = 0; i < 15; i++) {
      let nome = prompt(`Digite o nome ${i + 1} de 15:`);
      nomes.push(nome || "An\xF4nimo");
    }
    console.log("Nomes digitados:", nomes);
    const nomesOrdenados = [...nomes].sort();
    console.log("Nomes ordenados:", nomesOrdenados);
    alert("Nomes exibidos e ordenados no console (F12)!");
  }
  var init_exe62 = __esm({
    "src/arrays/exe6.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe7.ts
  function exe7Array() {
    console.log("--- Exerc\xEDcio 7: Lista de Presen\xE7a ---");
    const presenca = [];
    presenca.push("Jo\xE3o", "Maria", "Pedro", "Ana", "Lucas");
    console.log("Lista de Presen\xE7a (Mai\xFAsculas):");
    for (let aluno of presenca) {
      console.log(aluno.toUpperCase());
    }
    alert("Lista impressa em MAI\xDASCULAS no console (F12)!");
  }
  var init_exe72 = __esm({
    "src/arrays/exe7.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe8.ts
  function exe8Array() {
    console.log("--- Exerc\xEDcio 8: Boletim H\xEDbrido ---");
    const notasSemestre = [8.5, 10, "N.A", 7.2];
    console.log("Processando Boletim:");
    for (let nota of notasSemestre) {
      if (typeof nota === "number") {
        console.log(`Nota: ${nota}`);
      } else {
        console.log("O aluno n\xE3o realizou a prova");
      }
    }
    alert("Boletim processado no console (F12)!");
  }
  var init_exe82 = __esm({
    "src/arrays/exe8.ts"() {
      "use strict";
    }
  });

  // src/arrays/exe9.ts
  function exe9Array() {
    console.log("--- Exerc\xEDcio 9: Gerar Intervalo Filtrado ---");
    function gerarIntervaloFiltrado(inicio, fim) {
      if (inicio > fim) {
        console.log("Invertendo valores para garantir intervalo v\xE1lido...");
        [inicio, fim] = [fim, inicio];
      }
      let intervalo = [];
      for (let i = inicio; i <= fim; i++) {
        intervalo.push(i);
      }
      let idadeInput = prompt("Digite sua idade para filtrar os m\xFAltiplos e divisores:");
      let idade = parseInt(idadeInput || "0");
      let contador = 0;
      console.log(`N\xFAmeros que s\xE3o m\xFAltiplos e divisores de ${idade}:`);
      for (let num of intervalo) {
        if (num > 0 && (num % idade === 0 || idade % num === 0)) {
          console.log(num);
          contador++;
        }
      }
      console.log(`Total de n\xFAmeros impressos: ${contador}`);
      alert(`Filtro conclu\xEDdo! ${contador} n\xFAmeros encontrados. Veja o console (F12).`);
    }
    let start = parseInt(prompt("Digite o in\xEDcio do intervalo:") || "0");
    let end = parseInt(prompt("Digite o fim do intervalo:") || "0");
    gerarIntervaloFiltrado(start, end);
  }
  var init_exe92 = __esm({
    "src/arrays/exe9.ts"() {
      "use strict";
    }
  });

  // src/index.ts
  var require_index = __commonJS({
    "src/index.ts"() {
      init_exe1();
      init_exe2();
      init_exe3();
      init_exe4();
      init_exe12();
      init_exe22();
      init_exe32();
      init_exe42();
      init_exe5();
      init_exe13();
      init_exe23();
      init_exe33();
      init_exe43();
      init_exe52();
      init_exe6();
      init_exe7();
      init_exe8();
      init_exe9();
      init_exe10();
      init_exe14();
      init_exe24();
      init_exe34();
      init_exe44();
      init_exe53();
      init_exe62();
      init_exe72();
      init_exe82();
      init_exe92();
      var exercicios = {
        // Condicional
        exe1Cond,
        exe2Cond,
        exe3Cond,
        exe4Cond,
        // Repetição
        exe1Rep,
        exe2Rep,
        exe3Rep,
        exe4Rep,
        exe5Rep,
        // Funções
        exe1Func,
        exe2Func,
        exe3Func,
        exe4Func,
        exe5Func,
        exe6Func,
        exe7Func,
        exe8Func,
        exe9Func,
        exe10Func,
        // Arrays
        exe1Array,
        exe2Array,
        exe3Array,
        exe4Array,
        exe5Array,
        exe6Array,
        exe7Array,
        exe8Array,
        exe9Array
      };
      function rodar(nome) {
        const func = exercicios[nome];
        if (func) {
          console.log(`%c >>> Executando: ${nome} <<< `, "background: #2B2D42; color: #EDF2F4; font-weight: bold;");
          func();
        } else {
          console.warn("Exerc\xEDcio n\xE3o encontrado: " + nome);
        }
      }
      function verCodigo(nome) {
        const func = exercicios[nome];
        if (func) {
          console.log(`%c --- C\xD3DIGO FONTE DE ${nome} --- `, "background: #EF233C; color: #EDF2F4; font-weight: bold;");
          console.log(func.toString());
        } else {
          console.warn("Exerc\xEDcio n\xE3o encontrado: " + nome);
        }
      }
      window.rodar = rodar;
      window.verCodigo = verCodigo;
    }
  });
  require_index();
})();
