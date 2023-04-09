
//acessando propriedades
let carro ={
    portas:4,
    cor: 'vermelha'
}

if(carro.portas > 2){
    console.log('esse carro tem mais de duas portas')
}
//posso acessar a propriedade atravez dos [], e tambem posso atribuir uma propriedade em uma variavel
console.log(carro['cor']);

let CorCarro= carro['cor'];

//posso chamar essa propriedade dentro da variavel, ve o tamanho etc
console.log(CorCarro.length);

