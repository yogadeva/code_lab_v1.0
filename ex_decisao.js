// Exericio 2 - Estrutura de decisão

//Percorrer uma lista de estados
// Contendo na planilha
// Para cada item, verificar se a cidade determinada está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Número de ordem.

async function dadosPlanilha(urlCsv, estadoProcurado){
    try{
        const response = await fetch(urlCsv);
        const textoCsv = await response.text();

        const arrayDados = textoCsv
        .trim()
        .split(/\r?\n/)
        .map(linha => linha.split(',').map(celula => celula.trim()));

        let ordemNome = null;
        let nomePlanilha = '';

        arrayDados.forEach((elemento, indice) => {
            const ordemAtual = indice + 1;

            console.log(`Ordem: ${indice + 1}`);
            console.log('Estado:', elemento[0]);

            if (elemento[0].toLowerCase() === estadoProcurado.toLowerCase()) {
                console.log('Encontrado');
                ordemNome = ordemAtual;
                nomePlanilha = elemento[0];
            } else {
                console.log('cidade não corresponde')
            }

            console.log('===========================')
        })

        if (ordemNome !== null) {
      console.log(`--> ${estadoProcurado} foi encontrado na ordem: ${ordemNome} com o nome ${nomePlanilha}`);
    } else {
      console.log(`--> ${estadoProcurado} não foi encontrado na planilha.`);
    }

    return arrayDados;
} catch (erro){
    console.error('Erro ao carregar planilha', erro);
}

    }
    
    const URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?gid=1746909962&single=true&output=csv'
    dadosPlanilha(URL_CSV, 'seRgiPe')
