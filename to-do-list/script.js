class Produto{

    constructor(){
        this.id =1;
        this.arrayprodutos = [];
    }

    adicionar(){
        let produto = this.lerdados();

        if(this.validarCampos(produto)){
            this.addNoArray(produto);
        }
        
        this.addNatabela()
        this.cancelar();

        console.log(this.arrayprodutos)
        
    }

    lerdados(){
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valorProduto = document.getElementById('valor').value;    
        return produto
    }

    validarCampos(produto){
        let msg = '';
        if(produto.nomeProduto == ''){
            msg += ('digite o nome do produto \n')
        }
        if(produto.valorProduto == ''){
            msg += ('digite o valor do produto')
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true
    };

    addNoArray(produto){
        this.arrayprodutos.push(produto);
        this.id ++
    }

    addNatabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText ='';
        for(let i = 0; i < this.arrayprodutos.length; i++){
            let linha = tbody.insertRow();
            let coluna_id = linha.insertCell()
            let coluna_produto = linha.insertCell()
            let coluna_valor = linha.insertCell()
            let coluna_acao = linha.insertCell()

            coluna_id.innerText = this.arrayprodutos[i].id;
            coluna_produto.innerText = this.arrayprodutos[i].nomeProduto;
            coluna_valor.innerText = this.arrayprodutos[i].valorProduto;

        }
    }
    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
    }
}


let produto = new Produto();