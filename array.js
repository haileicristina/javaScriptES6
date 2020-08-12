/*const pessoas =['Ricardo', 'Bruno', 'João', 'Simesvaldo', 'Nobrega']
//adicionar integrantes
pessoas.push('Douglas');
console.log(pessoas);
//remover item
pessoas.shift();
console.log(pessoas);
pessoas[2]="Norberto";
console.log(pessoas);
pessoas.push('Ricardo');
console.log(pessoas);
*/
const user =['Guilherme', 'Pedro', 'Jennifer'];
const gender={
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}
const pessoas =[
{
    nome : "Guilherme",
    idade: 15,
    genero: gender.MAN
},
{   nome: "Pedro",
    idade: 40,
    genero: gender.MAN
    
},
{
    nome:"Jennifer",
    idade: 23,
    genero: gender.WOMAN
}
]
//Retornar a quantidade de pessoas do array
console.log('Quantidade de pessoas do array: ', pessoas.length, "pessoas");
//Verificar se a variavel pessoa é um array
console.log('A variável pessoa é um array', Array.isArray(pessoas));

//Iterar o array
pessoas.forEach(individuo =>{
    console.log('Nome: ', individuo.nome);
});

//Filtrar o array
const girl = pessoas.filter(individuo =>individuo.genero == gender.WOMAN);
console.log("Lista somente com meninas", girl);
/*//coloca uma nova pessoa no array
const novo ={
    nome: "Bruna",
    idade: 22,
    genero: gender.WOMAN
}
pessoas.push(novo);
console.log("Inserindo nova pessoa ao array", novo);
console.log(pessoas) 
Isso é errado pois altera o array original "pessoas" jeito certo abaixo*/

//Retorna um novo
/*const novoNome = pessoas.map(individuo =>{
    individuo.name = "Valentina"
    individuo.age = 18,
    individuo.gen = gender.WOMAN;
    return individuo;
});
console.log("Novo individuo: ", novoNome);*/

//Trandforma um array em outro tipo
const totalAge = pessoas.reduce((idade, individuo) => {
    idade += individuo.idade;
    return idade;

}, 0);
console.log("Soma de idade das pessoas", totalAge);

//Operações
const totalIdadesPar = pessoas
                    .filter(individuo => individuo.idade %2 === 0)
                    .reduce((idade, individuo) =>{
                        idade += individuo.idade;
                        return idade;
                    }, 0);
console.log("Soma das idades das pessoas de idades par ", totalIdadesPar);


