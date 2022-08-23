class Display {

    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.ValorActual = '';
        this.valorAnterior = '';
    }


    borrar() {
        this.ValorActual = this.ValorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.ValorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }


    computar(tipo) {
        this.tipoOperacion !== 'gual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.ValorActual || this.valorAnterior;
        this.ValorActual = '';
        this.imprimirValores();

    }




    agregarNumero(numero) {
        if(numero === '.' && this.ValorActual.includes('.')) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    
    imprimirValores(){

        this.displayValorActual.textContent = this.ValorActual;

        this.displayValorAnterior.textContent = this.ValorAnterior;
        
        
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const ValorActual = parseFloat(this.ValorActual);

        if( isNaN(ValorActual) || isNaN(valorAnterior) ) return
        this.ValorActual = this.calculadora[this.tipoOperacion](valorAnterior, ValorActual);
    }
}