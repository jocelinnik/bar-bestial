var parintins = [];
var total_animais = [];
var antas = [], girafas = [], jacaresacu = [], peixesboi = [];


function definirIndices(){
    total_animais["Amarelo"] = 0;
    total_animais["Azul"] = 0;
    total_animais["Verde"] = 0;
    total_animais["Vermelho"] = 0;
}

function executarHabilidadeEspecial(animal){
    /**
     * aqui nos executamos a habilidade 
     * especial do animal inserido 
     * recentemente na fila
     */
    switch(animal){
        case 1: mucura(); break;
        case 2: exibirModalAraraAzul(); break;
        case 3: exibirModalPaca(); break;
        case 4: macacodecheiro(); break;
        case 5: exibirModalCamaleao(); break;
        case 6: ariranha(); break;
        case 7: anta(); break;
        case 8: girafa(fila_cartas.length-1); break;
        case 9: sucuri(); break;
        case 10: jacareacu(fila_cartas.length-1); break;
        case 11: peixeboi(fila_cartas.length-1); break;
        case 12: oncapintada(); break;
    }

    /**
     * varremos os animais que possuem 
     * habilidade recorrente e então
     * executamos as habilidades dos animais 
     * que sao recorrentes durante as jogadas
     */
    varrerAnimaisComHabilidadeInfinita();
    executarHabilidadesInfinitas();

    /**
     * se a fila chegou em 5, levamos os dois 
     * primeiros animais pro festival e o 
     * ultimo pro buracao
     */
    if(fila_cartas.length===5) festivalEburacao();

    /**
     * se as cartas acabaram, contamos os 
     * animais de cada cor e finalizamos 
     * o jogo
     */
    // if(mao_cartas.length===0) finalizarJogo(); // Ainda nao esta fechado, favor nao descomentar
    if(super_mao_teste.length===0) finalizarJogo();
}

function varrerAnimaisComHabilidadeInfinita(){
    for(animal of fila_cartas){
        let id = animal.id;
        let poder = parseInt(id.split("-")[0]);

        //inserimos os animais em seus devidos arrays
        switch(poder){
            case 7: antas.push(animal); break;
            case 8: girafas.push(animal); break;
            case 10: jacaresacu.push(animal); break;
            case 11: peixesboi.push(animal); break;
        }
    }
}

function executarAntas(){
    for(let animal of antas){
        anta();
    }
}

function executarGirafas(){
    for(let animal of girafas){
        let indice = fila_cartas.indexOf(animal);
        girafa(indice);
    }
}

function executarJacaresacu(){
    for(let animal of jacaresacu){
        let indice = fila_cartas.indexOf(animal);
        jacareacu(indice);
    }
}

function executarPeixesboi(){
    for(let animal of peixesboi){
        let indice = fila_cartas.indexOf(animal);
        peixeboi(indice);
    }
}

function executarHabilidadesInfinitas(){
    executarAntas();
    executarGirafas();
    executarJacaresacu();
    executarPeixesboi();
}

function festivalEburacao(){
    let primeiroAnimal, segundoAnimal, ultimoAnimal;

    //pegamos o primeiro e segundo animais da fila
    //levamos eles para parintins
    primeiroAnimal = fila_cartas.pop(0);
    segundoAnimal = fila_cartas.pop(0);
    parintins.push(primeiroAnimal);
    parintins.push(segundoAnimal);
    fila.removeChild(primeiroAnimal);
    fila.removeChild(segundoAnimal)

    //e tiramos o ultimo animal da fila
    //levando-o assim para o buracao
    ultimoAnimal = fila_cartas.pop();
    fila.removeChild(ultimoAnimal);
}

function contabilizarAnimais(){
    /**
     * pegamos a cor do animal a
     * partir do id, e incrementamos
     * o valor no array
     */
    for(let animal of parintins){
        let id = animal.id;
        let cor = id.split("-")[1];

        total_animais[cor]++;
    }
}

function finalizarJogo(){
    contabilizarAnimais();
    exibirModalFinalizarJogo();
}