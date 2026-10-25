// Exericio 1 - Estrutura de repetição

//Percorrer uma lista de nomes, contendo os nomes;
//Número da execução, começando em 1
//Nome que está sendo executado
// Separadores


//Execução: 1
//Nome: 
//=======================

async function dadosPlanilha(urlCsv){
    try{
        const response = await fetch(urlCsv);
        const textoCsv = await response.text();

        const arrayDados = textoCsv
        .trim()
        .split(/\r?\n/)
        .map(linha => linha.split(',').map(celula => celula.trim()));

        //COM FOR NORMAL
    // for (let i = 0; i < arrayDados.length; i++) {
    //   console.log(`Execução: ${i + 1}`);
    //   console.log('Estado:', arrayDados[i][0]);
    //   console.log('=========================');
    // }

    //FOREACH 
    arrayDados.forEach((elemento, indice) => {
      console.log(`Execução: ${indice + 1}`); // Adiciona +1 ao índice para iniciar a contagem em 1
      console.log('Estado:', elemento[0]);    // 'elemento' representa a linha atual; [0] acessa o primeiro item
      console.log('============================');
    });

    return arrayDados;
} catch (erro){
    console.error('Erro ao carregar planilha', erro);
}

    }
    
    const URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?gid=1746909962&single=true&output=csv'
    dadosPlanilha(URL_CSV)
