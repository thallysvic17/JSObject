//const robo ={
//    bracos:4,
//   pernas:2,
//    arma : 'metralhadora',
//    armaEspecial: 'foguete',
//    atirar : () =>{
//        console.log('peww')
//    }
//}

//robo.atirar();

let pessoa ={
    nome: 'thallys',
    idade : 25,
    falar: () =>{
        console.log('oi, meu nome é thallys')
    },

    aniversario(){
        this.idade += 1;
    },

    dizerIdade(){
        console.log('a minha idade e ' + this.idade);
    }

}


pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.dizerIdade();

let calculadora ={
    numeros: 0,
    somar : function(a,b){
        this.numeros = a + b;
    },
    subtracao : function(a){
        this.numeros -= a;
    },

}

calculadora.somar(2,4);
console.log(calculadora.numeros);
calculadora.subtracao(5)
console.log(calculadora.numeros);
