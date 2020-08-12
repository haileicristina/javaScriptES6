const itens = ['macarrao', 'feijao'];
const arr = itens.push("pao");
const removeItem = itens.pop();
const adItem = itens.unshift("Arroz");
const farmacia =['desodorante', 'sabonete','absorvente'];

//faz um merge em itens e farmacia e cria um novo array
/*const merge = itens.concat(farmacia);
console.log(merge);*/
const inserir = farmacia.splice(1, 0, "shampoo");
console.log("Inserir depois de um dado especifico: ", farmacia);


/*console.log(" itens", itens);
console.log(" tamanho array", arr);
console.log(" itens", itens);

console.log("item removido", removeItem);
console.log("array", itens);

console.log("Adicionar item no inicio", itens);
console.log("Quantidade itens", adItem);*/