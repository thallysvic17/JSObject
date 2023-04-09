class Calculadora{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    checarUltimoDigito(input, upperValue, reg){
        if((
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length-1))
        )){

            return true;

        }else{
            return false;
        }
    }

    limparValores(){
        this.upperValue.textContent ='0';
        this.resultValue.textContent ='0';
    }

    btnPress(){
        let input = this.textContent;
        let upperValue = calculadora.upperValue.textContent;
        // verificar se tem so numeros 
        var reg = new RegExp('^\\d+$');
       
        //ativda metodo de limpar o display
        if(input == 'AC'){
            calculadora.limparValores();



        }


        else{
                //checa se precisar adicionar ou nao
            if(calculadora.checarUltimoDigito(input, upperValue, reg)){
                return false;
            }
                //adiciona espaco nos operadores
                if(!reg.test(input)){
                    input = ` ${input} `;
                }


            if(upperValue == "0"){
                calculadora.upperValue.textContent = input;
            }else{
                calculadora.upperValue.textContent += input;
            }
        }
    }
    



}

// iniciando objeto
let calculadora = new Calculadora();

//start btns
let botoes = document.querySelectorAll('.btn')
   console.log(botoes)
// mapear todos os botes
for(let i = 0; botoes.length > i; i++){
    botoes[i].addEventListener('click', calculadora.btnPress);
}
