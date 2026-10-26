// 1. Função responsável apenas por buscar e formatar os dados da planilha
async function buscarDadosCSV(urlCsv) {
  const response = await fetch(urlCsv);

  if (!response.ok) {
    throw new Error(`Erro na requisição HTTP: Status ${response.status}`);
  }

  const textoCsv = await response.text();
  return textoCsv
    .trim()
    .split(/\r?\n/)
    .map(linha => linha.split(',').map(celula => celula.trim()));
}

// 2. Função responsável por iterar e exibir o relatório
async function exibirRelatorioPlanilha(urlCsv) {
  try {
    const arrayDados = await buscarDadosCSV(urlCsv);

    arrayDados.forEach(([estado], indice) => {
      const ordem = indice + 1;
      console.log(`Execução: ${ordem}`);
      console.log('Estado:', estado);
      console.log('============================');
    });

    return arrayDados;
  } catch (erro) {
    console.error('Erro ao carregar planilha:', erro.message);
  }
}

const URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?gid=1746909962&single=true&output=csv';

exibirRelatorioPlanilha(URL_CSV);