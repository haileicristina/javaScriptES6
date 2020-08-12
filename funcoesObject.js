/*const user ={
    name: "Hailei",
    lastName: " OLiveira Lopes"
}
console.log('Recupera as chaves do objeto user: ', Object.keys(user));
console.log('Recupera o valor que tem nas chaves', Object.values(user));
console.log('retorna um array com chave e valor', Object.entries(user));
console.log('merge propriedades dos objetos', Object.assign({},user,{ idade: "34"}));
console.log(user);
*/
const person = {nome: "Bruno"};
console.log(person);
Object.seal(person);
person.nome = "Novac";
console.log(person);
// não dá pra deletar e criar com o Object.seal

