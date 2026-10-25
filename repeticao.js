// repetição por array

// Array.forEach(element => {

// })

async function dadosPlanilha(urlCsv){
    try{
        const response = await fetch(urlCsv);
        const textoCsv = await response.text();

        const arrayDados = textoCsv
        .trim()
        .split(/\r?\n/)
        .map(linha => linha.split(',').map(celula => celula.trim()));


        //USANDO O FOREACH
    //     arrayDados.forEach((elemento, indice = 0) => {
    //     //console.log(`Ordem ${indice}`, elemento)
    //     console.log(arrayDados[indice])
    // });

        //USANDO O FOR NORMAL
    for (let i = 0; i < arrayDados.length; i++) {
      console.log(`Ordem ${i}`, arrayDados[i]);
    }

    return arrayDados;
} catch (erro){
    console.error('Erro ao carregar planilha', erro);
}

    }
    
    const URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?gid=1746909962&single=true&output=csv'
    dadosPlanilha(URL_CSV)



// for normal

