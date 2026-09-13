//fluxo para testar uma lista de usuários direto da planilha do google sheets de forma aleatória (sem ordem de listagem) e com idade aleatória gerada pelo sistema, sendo que >= 18 tem acesso liberado e abaixo disso acesso negado, sendo obrigado uma das idades ter 18 anos

const urlPlanilha = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?output=csv';

//cria a lista de idades possíveis (de 07 à 50 anos)
let idadeDisponivel = Array.from({ length: 50 - 7 + 1 }, (_, i) => i + 7);

async function sortearDaPlanilha(quantidade = 50) {
    const resposta = await fetch(urlPlanilha);
    const texto = await resposta.text();

    let nomes = texto
        .split('\n')
        .map(linha => linha.trim())
        .filter(linha => linha !== '')
        .slice(1)
    //.map(linha => linha.split(',')[0].replace(/"/g, '').trim());

    let liberados = 0
    let negados = 0

    for (let i = 1; i <= quantidade; i++) {
        //verifica se tem nomes e idades para sortear
        if (nomes.length === 0 || idadeDisponivel.length === 0) {
            console.log('Sem opções para sorteio.');
            break;
        }

        //sorteia e remove nome da lista
        const nomeAleatorio = Math.floor(Math.random() * nomes.length);
        const nomeSorteado = nomes.splice(nomeAleatorio, 1)[0];

        let idadeAleatoria;
        if (i === 1 && idadeDisponivel.includes(18)) {
            idadeAleatoria = idadeDisponivel.indexOf(18);
        } else {
            idadeAleatoria = Math.floor(Math.random() * idadeDisponivel.length);
        }

        const idadeSorteada = idadeDisponivel.splice(idadeAleatoria, 1)[0];
        //console.log('Nome sorteado da planilha:', nomeSorteado);

        if (idadeSorteada >= 18) {
            liberados++
            console.log(`Nome sorteado: ${nomeSorteado}`);
            console.log(`Idade: ${idadeSorteada} anos`);
            console.log('Acesso Liberado');
            console.log('===================================')
        } else {
            negados++
            console.log(`Nome sorteado: ${nomeSorteado}`);
            console.log(`Idade: ${idadeSorteada} anos`);
            console.log('Acesso Negado');
            console.log('===================================')
        }


    }
    console.log('\n===================== RESUMO =====================');
    console.log(`Total liberados: ${liberados}`);
    console.log(`Total Negados: ${negados}`);
    console.log('=====================================================');
}



sortearDaPlanilha();

