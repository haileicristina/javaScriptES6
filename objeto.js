let name = 'Nivaldo';
console.log('Nome variável let: ', name);
let user ={
    name: 'Marcelino'
};
console.log('objeto user: ', user);
user.name = 'Anésio';
console.log('objeto user com name atributo: ', user);
user['name'] = 'Outro nome';
console.log('objeto user: ', user);
console.log('name ', name);

const prop = "name";
user[prop] = "Hailei";
function getProp(prop){
    return user[prop];
    
}
console.log('objeto user prop: ', user);
user.lastName ="Oliveira";
console.log(user);

delete user.name;
console.log("Nome Hailei deletado", user);