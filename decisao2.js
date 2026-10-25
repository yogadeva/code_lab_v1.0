const urlPlanilha = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwOND0FpSoJgvGSN1yjgKh5j20mUcQHaPwCrXFGDhLIFbIA2LldHxi8MRN7LaG_8aPLcGeANvR0plk/pub?output=csv ';

//cria a lista de idades possíveis
let idadeDisponivel = Array.from({length: 50 - 7 + 1 }, (_, i) => + 7);

async function sortearDaPlanilha(quantidade = 10){
    const resposta = await fetch(urlPlanilha);
    const texto = await resposta.text();

    let nomes = texto
    .split('\n')
    .map(linha => linha.trim())
    .filter(linha => linha !== '')
    .slice(1)
    .map(linha => linha.split(',')[0].replace(/"/g, '').trim());

    for (let i = 1; i <= quantidade; i++){
    //verifica se tem nomes e idades para sortear
    if (nomes.length === 0 || idadeDisponivel.length === 0) {
        console.log('Sem opções para sorteio.');
        break;        
    }

    //const linhas = texto.split('\n').map(linha => linha.trim()).filter(linha => linha !== '');
    
    // const nomes = linhas.slice(1).map(linha => {
    //     const colunas = linha.split(',');
    //     return colunas[0].replace(/"/g, '').trim();
    // })

    //sorteia e remove nome da lista
    const nomeAleatorio = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes.splice(nomeAleatorio, 1)[0];

    //sorteia e remove a idade da lista
    const idadeAleatoria = Math.floor(Math.random() * idadeDisponivel.length);
    const idadeSorteada = idadeDisponivel.splice(idadeAleatoria, 1)[0];
    //const idadeSorteada = idade[idadeAleatoria]

    //console.log('Nome sorteado da planilha:', nomeSorteado);

    if (idadeAleatoria >= 18){
    console.log(`Nome sorteado: ${nomeSorteado}`);
    console.log(`Idade: ${idadeAleatoria} anos`);
    console.log('Acesso Liberado');
    console.log('===================================')
} else{
    console.log(`Nome sorteado: ${nomeSorteado}`);
    console.log(`Idade: ${idadeAleatoria} anos`);
    console.log('Acesso Negado');
    console.log('===================================')
}
}}

sortearDaPlanilha();

//const nomes = ['Augusto', 'Diogo', 'Joao', 'Cláudio'];
//const idade = [13,15, 17,18,26, 33]
//sortear nome
//const nomeAleatorio = Math.floor(Math.random() * nomes.length);
//console.log('Nome sorteado ', nomes[nomeAleatorio]);

//const idadeAleatoria = Math.floor(Math.random() * idade.length);
//const idadeAleatoria = Math.floor(Math.random() * (77 - 7 + 1)) + 7;
//console.log('Idade: ', idadeAleatoria);

//const nomeSorteado = nomes[nomeAleatorio]
//const idadeSorteada = idade[idadeAleatoria]

//const tentativa = nomes[Math.floor(Math.random() * nomes.length)];

//if (nomeSorteado.toLowerCase() === tentativa.toLowerCase()) {
 //   console.log('Nome correto como:', nomeSorteado)
//} else {
 //   console.log('Errado')
//}


//if (idadeAleatoria >= 18){
//      console.log('É maior de idade')
// } else{
//     console.log('acesso negado por ser menor de idade')
// }

//const encontrado = países.find (país => país.toLowerCase() === termoBusca.toLocaleLowerCase())

