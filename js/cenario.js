class Cenario{
    constructor(contexto){
        this.contexto = contexto;
        this.contexto.strokeStyle = "#ffffff";
    }

    getContexto(){
        return this.contexto;
    }

    desenharNomeJogo(){
        let contexto = this.getContexto();

        contexto.font = "50px Arial";
        contexto.strokeText("Festival Folclórico", 500, 100);
    }

    desenharFila(){
        let contexto = this.getContexto();

        contexto.strokeRect(300, 200, 800, 250);
    }

    desenharParintins(){
        let contexto = this.getContexto();
        let parintins = new Image();

        contexto.font = "30px Arial";
        parintins.src = "imagens/cenario/parintins.jpg";
        contexto.strokeText("Parintins", 80, 220);
        contexto.drawImage(parintins, 0, 250);
    }

    desenharBuracao(){
        let contexto = this.getContexto();
        let buracao = new Image();

        contexto.font = "30px Arial";
        buracao.src = "imagens/cenario/buracao.jpg";
        contexto.strokeText("Buracão", 1185, 220);
        contexto.drawImage(buracao, 1100, 250);
    }
}