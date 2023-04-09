let maquina ={
    material :'Aço Inox',
    equipamentos: ['motor','freio','esteira','cilindro'],
    vaiMontada : false,
    numeroDeMotores : 1
};
//visualizar no console propriedades do objeto maquina
console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[2]);
console.log(maquina.equipamentos);

//percorrer todos os itens no array
for(let i =0; i < maquina.equipamentos.length; i++){
    console.log(maquina.equipamentos[i]);
}

if(maquina.vaiMontada == false){
    console.log('o comprador precisa montar a maquina ');
}


