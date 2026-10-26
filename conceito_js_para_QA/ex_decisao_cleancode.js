// Exericio 2 - Estrutura de decisão (usando código limpo)

//Percorrer uma lista de estados
// Contendo na planilha
// Para cada item, verificar se a cidade determinada está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Número de ordem.

// 1. Função focada apenas em buscar e converter os dados da planilha
async function buscarDadosCSV(urlCsv) {
  const response = await fetch(urlCsv);
  if (!response.ok) {
    throw new Error(`Falha na requisição HTTP: Status ${response.status}`);
  }

  const textoCsv = await response.text();
  return textoCsv
    .trim()
    .split(/\r?\n/)
    .map(linha => linha.split(',').map(celula => celula.trim()));
}

// 2. Função principal responsável pelo fluxo de busca e exibição
async function processarBuscaEstado(urlCsv, estadoProcurado) {
  try {
    const arrayDados = await buscarDadosCSV(urlCsv);
    const termoBusca = estadoProcurado.toLowerCase(); // Otimizado: convertido 1 vez só

    // Imprime o relatório de cada linha da planilha
    arrayDados.forEach((linha, indice) => {
      const nomeEstado = linha[0];
      const eIgual = nomeEstado.toLowerCase() === termoBusca;

      console.log(`Ordem: ${indice + 1}`);
      console.log('Estado:', nomeEstado);
      console.log(eIgual ? 'Encontrado' : 'cidade não corresponde');
      console.log('============================');
    });

    // Busca declarativa sem variáveis mutáveis (let)
    const indiceEncontrado = arrayDados.findIndex(
      linha => linha[0].toLowerCase() === termoBusca
    );

    // Exibe o resultado consolidado final
    if (indiceEncontrado !== -1) {
      const nomeOriginal = arrayDados[indiceEncontrado][0];
      const ordemFinal = indiceEncontrado + 1;
      console.log(`--> ${estadoProcurado} foi encontrado na ordem: ${ordemFinal} com o nome ${nomeOriginal}`);
    } else {
      console.log(`--> ${estadoProcurado} não foi encontrado na planilha.`);
    }

    return arrayDados;
  } catch (erro) {
    console.error('Erro ao processar planilha:', erro.message);
  }
}

const URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?gid=1746909962&single=true&output=csv';

processarBuscaEstado(URL_CSV, 'amAzOnas');
