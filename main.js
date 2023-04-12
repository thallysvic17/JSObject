
class Animal {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
      }
    
      emitirSom() {
        console.log("O animal emitiu um som.");
      }
    
      apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, sou um(a) ${this.especie} e tenho ${this.idade} anos.`);
      }
    }
    
    class Cachorro extends Animal {
      constructor(nome, idade, raca) {
        super(nome, "cachorro", idade);
        this.raca = raca;
      }
    
      emitirSom() {
        console.log("Au au!");
      }
    
      apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, sou um(a) ${this.raca} e tenho ${this.idade} anos.`);
      }
    }
    
    class Gato extends Animal {
      constructor(nome, idade, cor) {
        super(nome, "gato", idade);
        this.cor = cor;
      }
    
      emitirSom() {
        console.log("Miau!");
      }
    
      apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, sou um gato ${this.cor} e tenho ${this.idade} anos.`);
      }
    }
    
    const cachorro1 = new Cachorro("Tobby", 5, "Poodle");
    const gato1 = new Gato("Félix", 3, "preto");
    const cachorro2 = new Cachorro("Buddy", 2, "Labrador");
    
    cachorro1.emitirSom();
    cachorro1.apresentar();
    
    gato1.emitirSom();
    gato1.apresentar();
    
    cachorro2.emitirSom();
    cachorro2.apresentar();







