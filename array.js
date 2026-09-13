const países = ['Brasil', 'Argentina', 'Alemanha'] //array contém lista de informações/dados

//const termoBusca = 'arGentIna';

//const encontrado = países.find (país => país.toLowerCase() === termoBusca.toLocaleLowerCase())

console.log('Acessando país: ' + países[0]) // acessando uma posição do array
console.log('Tamanho do array: ' + países.length) // tamanho do array

//OPERAÇÕES COM O ARRAY

países.push('USA') //adiciona no final do array
países.pop() // remove último elemento
países.unshift('Bélgica') //adiciona no inicío do array
países.shift() // remove o primeiro elemento

console.log(países)