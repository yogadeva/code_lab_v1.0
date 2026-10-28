# Estruturas de Repetição e Decisão — Consumo de planilha CSV

## Contexto
Dois exercícios de lógica de programação em JavaScript: um de estrutura
de repetição (loop) e um de estrutura de decisão (if/else), ambos
percorrendo a mesma fonte de dados.

## O que mudei em relação ao enunciado original
O exercício original pedia para montar a lista direto no código, como
um array fixo digitado à mão. Decidi importar os dados de uma planilha
do Google Sheets publicada como CSV, usando `fetch`. Motivos:

- Praticar requisição assíncrona (`async/await`) e tratamento de erro
  (`try/catch`), mais próximo do que se usa no dia a dia.
- Simular um cenário mais realista: dado vindo de fonte externa, não
  digitado à mão.
- Poder trocar os dados sem precisar mexer no código.

## Exercício 1 — Estrutura de repetição
**Objetivo:** percorrer a lista de estados, exibindo o número da
execução (começando em 1), o nome correspondente e um separador entre
cada item.

**Duas abordagens testadas:** deixei no código, comentada, a versão com
`for` tradicional, e ativa a versão com `forEach`. Fiquei com o
`forEach` porque elimina o controle manual de índice e deixa a intenção
mais clara: "para cada elemento, faça isso".

```javascript
arrayDados.forEach((elemento, indice) => {
  console.log(`Execução: ${indice + 1}`);
  console.log('Estado:', elemento[0]);
  console.log('============================');
});
```

## Exercício 2 — Estrutura de decisão
**Objetivo:** percorrer a mesma lista e verificar, item a item, se
corresponde ao estado buscado. Ao encontrar, guardar a posição e o
nome exato; ao final, informar o resultado da busca.

```javascript
if (elemento[0].toLowerCase() === estadoProcurado.toLowerCase()) {
  console.log('Encontrado');
  ordemNome = ordemAtual;
  nomePlanilha = elemento[0];
} else {
  console.log('cidade não corresponde');
}
```

A comparação usa `.toLowerCase()` nos dois lados para a busca não
depender de maiúsculas/minúsculas (testei com `'seRgiPe'` de propósito).

## Refatoração (clean code)
Fiz uma primeira versão funcional e depois refatorei, com apoio de IA,
aplicando boas práticas:
- Nomes de variáveis e funções mais descritivos (`dadosPlanilha`,
  `estadoProcurado`, `ordemNome`)
- Tratamento de erro centralizado com `try/catch`
- Separação clara entre buscar/transformar os dados e processar o
  resultado

**Sobre o uso de IA:** usei como apoio para acelerar a refatoração, mas
revisei linha a linha para entender cada mudança antes de aceitar — o
objetivo era aprender o padrão, não só ter um código pronto.

## Como executar
1. Rode num ambiente com suporte a `fetch` (Node.js 18+ ou o Console do
   navegador).
2. O script busca os dados direto da planilha publicada.
3. No exercício 2, troque o segundo argumento de
   `dadosPlanilha(URL_CSV, 'seRgiPe')` pelo estado que quiser buscar.

## Possíveis melhorias futuras
- Tratar CSV vazio ou em formato inesperado
- Extrair a busca/leitura do CSV para uma função reutilizável entre os
  dois exercícios (hoje está duplicada)
- Adicionar um teste automatizado simples para o parser do CSV

## Contato
Augusto — https://www.linkedin.com/in/augustoleite7/ 
