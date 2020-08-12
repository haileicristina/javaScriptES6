var test ='example';
(() => {
    console.log('Valor dentro da função', test);
    if(true){
        console.log('Valor do if', test);
    }
    console.log('Valor após a execução do if', test);
    
})();

