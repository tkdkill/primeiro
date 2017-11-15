export class cl_operacao {
    // valor 1 + valor 2 = resultado
    public valor1: number;
    public valor2: number;
    public tipo_operacao: number;
    public resultado: number;

    public str_operacao: string;

    // private min: number = 1;
    // private max: number = 10;

    // ================================================
    constructor() {
        // criar uma operação matematica aleatória
        this.valor1 = this.gerarValorAleatorio(1, 10);
        this.valor2 = this.gerarValorAleatorio(1, 10);
        this.tipo_operacao = this.gerarValorAleatorio(1, 4);

        switch (this.tipo_operacao) {
            // adião
            case 1:
                this.str_operacao = this.valor1 + ' + ' + this.valor2  + ' = ';
                this.resultado = this.valor1 + this.valor2;
                break;
            // subtração
            case 2:
                this.str_operacao = this.valor1 + ' - ' + this.valor2 + ' = ';
                this.resultado = this.valor1 - this.valor2;
                break;
            // multiplicação
            case 3:
                this.str_operacao = this.valor1 + ' x ' + this.valor2 + ' = ';
                this.resultado = this.valor1 * this.valor2;
                break;
            // divisão
            case 4:
                this.str_operacao = this.valor1 + ' : ' + this.valor2 + ' = ';
                this.resultado = this.valor1 / this.valor2;
                break;
            default:
                this.str_operacao = 'Valor inserido foi errado de 1 a 4';
                break;
        }

    }

    // ================================================
    gerarValorAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}