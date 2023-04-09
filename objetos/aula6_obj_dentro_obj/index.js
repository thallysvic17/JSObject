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
    },

    podeDirigir: () =>{
        if(this.idade >=18){
            console.log('voce pode dirigir');
        } else{
            console.log('voce ainda nao pode dirigir ')
        }
    },

    caracteristicas: {
        cnh : true,
        carteira :['dinheiro', 'documento', 'moeda'],

    }

}

console.log(pessoa.caracteristicas.carteira[2])
