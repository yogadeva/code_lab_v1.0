//Uma variável que pode ser alterada
//para texto usar aspas
var nome = 'augusto' // string = texto
console.log(nome)

let idade = 20 //para numero sem aspas
console.log(idade)
// a constante não pode ser alterada
const cidade = 'São Paulo'
console.log(cidade)

var maior_idade = false // boolean = verdadeiro ou falso 

const países = ['Brasil', 'Argentina', 'Alemanha'] //array contém lista de informações/dados

const termoBusca = 'bRaSil';

const encontrado = países.find(país => país.toLowerCase() === termoBusca.toLowerCase());

console.log(encontrado);//para texto usar aspas

//objetos
let devices = {
    nome: 'Iphone',
    preço: 8000,
    cores: {
        vermelho: 'vermelho',
        azul: 'azul',
        cinza: 'cinza'
    }
} //objetos, tem chave: valor. E pode colocar objetos dentro de objeto

console.log(devices.nome)