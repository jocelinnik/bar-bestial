function mucura(){
    let animais_para_remover = [];
    let maior = 0, segundo_maior = 0;

    //desmontamos a fila de animais
    desmontarFila();

    /**
     * primeiro vamos buscar os dois maiores
     * valores de poder presentes na fila
     */
    for(let animal of fila_cartas){
        let id = animal.id;
        let forca = parseInt(id.split("-")[0]);

        if(forca>maior) maior = forca;
        else if(forca<=maior && forca>segundo_maior) segundo_maior = forca;        
    }

    /**
     * em seguida, guardamos todos os animais
     * com os valores de poder que sao iguais
     * a maior ou segundo_maior
     */
    for(let animal of lista_cartas){
        let id = animal.id;

        if(parseInt(id.split("-")[0])===maior || parseInt(id.split("-")[0])===segundo_maior) animais_para_remover.push(animal);
    }

    //e finalmente, removemos estes animais da fila
    for(let animal of animais_para_remover) fila_cartas.pop(animal);
    animais_para_remover = [];

    //montamos a fila de animais
    montarFila();
}

function araraazul(id_carta){
    //ocultamos o modal
    ocultarModalGeral();

    /**
     * pegamos o elemento de id especifico
     * e removemos o animal da fila
     */
    let carta = document.getElementById(id_carta);
    fila_cartas.pop(carta);
    fila.removeChild(carta);
}

function paca(posicoes){
    //ocultamos o modal e desmontamos a fila de animais
    ocultarModalGeral();
    desmontarFila();

    //indice para controlar a troca de posicoes na fila
    let indice_aux = fila_cartas.length - 1;

    //agora trocamos os animais de posicao
    for(let i=0;i<posicoes;i++){
        let paca = fila_cartas[indice_aux];
        let animal = fila_cartas[indice_aux-1];

        fila_cartas[indice_aux-1] = paca;
        fila_cartas[indice_aux] = animal;

        indice_aux--;
    }

    //montamos a fila de animais
    montarFila();
}

function macacodecheiro(){
    let macacos = [], outros_animais = [], nova_fila = [];

    /**
     * vamos buscar todos os macacos da fila, 
     * separando os macacos dos outros animais 
     * e ignorando todos os jacarés acu e 
     * peixes boi
     */
    for(let i=0;i<fila_cartas.length-1;i++){
        let animal = fila_cartas[i];

        if(parseInt(animal.id.split("-")[0])===4) macacos.push(animal);
        else if(parseInt(animal.id.split("-")[0])!==10 || parseInt(animal.id.split("-")[0])!==11) outros_animais.push(animal);
    }

    /**
     * se tivermos algum macaco que ja estava 
     * na fila, avancamos o ultimo macaco pro 
     * comeco e ordenamos os macacos de forma 
     * decrescente (de chegada).
     * senao, segue a vida.
     */
    if(macacos.length>0){
        //desmontamos a fila de animais
        desmontarFila();

        /**
         * tiramos o ultimo macaco da fila por 
         * enquanto, e o colocamos na nova fila 
         * no comeco.
         */
        let ultimoMacaco = fila_cartas.pop();
        nova_fila.push(ultimoMacaco);

        //agora posicionamos os outros macacos de forma invertida
        for(let i=macacos.length-1;i>=0;i--){
            let macaco = macacos[i];
            nova_fila.push(macaco);
        }

        //em seguida, posicionamos o restante dos animais
        for(let animal of outros_animais) nova_fila.push(animal);

        //trocamos a fila pela nova formacao, e montamos a nova fila
        fila_cartas = nova_fila;
        nova_fila = macacos = outros_animais = [];
        montarFila();
    }
}

function camaleao(forca_animal){
    ocultarModalGeral();
    /**
     * o camaleao pode usar a habilidade de
     * QUALQUER animal que esta na fila.
     * nao usa o poder do camaleao porque jah
     * tamo aqui ne.
     */
    switch(forca_animal){
        case 1: mucura(); break;
        case 2: exibirModalAraraAzul(); break;
        case 3: exibirModalPaca(); break;
        case 4: macacodecheiro(); break;
        case 6: ariranha(); break;
        case 7: anta(); break;
        case 8: girafa(fila_cartas.length-1); break;
        case 9: sucuri(); break;
        case 10: jacareacu(fila_cartas.length-1); break;
        case 11: peixeboi(fila_cartas.length-1); break;
        case 12: oncapintada(); break;
    }
}

function ariranha(){
    //vamo tirar toda a fila aqui rapidao
    desmontarFila();

    //vamo inverter a fila com um novo array
    let nova_fila = [];
    for(let i=fila_cartas.length-1;i>=0;i--) nova_fila.push(fila_cartas[i]);
    fila_cartas = nova_fila;
    nova_fila = [];

    //agora montamos a nova fila
    montarFila();
}

function anta(){
    /**
     * ja que a anta apenas bloqueia
     * a acao do jacare acu e do
     * peixe boi, ela nao precisa
     * fazer nada
     */

    return;
}

function girafa(indice){
    //girafa ja esta no comeco da fila
    if(indice===0) return;

    desmontarFila();
    let girafa = fila_cartas[indice];
    let animal = fila_cartas[indice-1];
    let id_carta = animal.id;
    let forca = parseInt(id_carta.split("-")[0]);

    //se a forca for menor que 8, troca de lugar
    if(forca<8){
        fila_cartas[indice-1] = girafa;
        fila_cartas[indice] = animal;
    }

    montarFila();
}

function sucuri(){
    //vamo tirar toda a fila aqui rapidao
    desmontarFila();

    /**
     * @Function sort = ordenando a fila de forma decrescente
     * @Param animal1
     * @Param animal2
     * @Return -1 = forca de animal1 eh maior de que animal2, 
     * entao nao vai mover os elementos do lugar
     * @Return 1 = forca de animal1 eh menor de que animal2,
     * entao vai mover os elementos do lugar
     */
    fila_cartas.sort(function(animal1, animal2){
        if(parseInt(animal1.id.split("-")[0])>parseInt(animal2.id.split("-")[0])) return -1;
        if(parseInt(animal1.id.split("-")[0])<parseInt(animal2.id.split("-")[0])) return 1;
    });

    //agora montamos a nova fila
    montarFila();
}

function jacareacu(indice){
    let i = indice;
    let parou = false;

    desmontarFila();
    while(i>0 && !parou){
        let animal = fila_cartas[i-1];
        let id_carta = animal.id;
        let forca = parseInt(id_carta.split("-")[0]);

        /**
         * se o animal nao for uma anta, e a forca 
         * for menor que 10, removo o animal da fila
         * se for uma anta ou a forca for maior ou 
         * igual a 10, para de tirar os animais
         */
        if(forca!==7 && forca<10) fila_cartas.pop(animal);
        else parou = true;

        i--;
    }

    montarFila();
}

function peixeboi(indice){
    let i = indice;
    let parou = false;

    desmontarFila();
    while(i>0 && !parou){
        let peixeboi = fila_cartas[i];
        let animal = fila_cartas[i-1];
        let id_carta = animal.id;
        let forca = parseInt(id_carta.split("-")[0]);

        /**
         * se nao for uma anta e a forca do 
         * animal for menor que 11, avanca na frente
         * se for uma anta ou a forca do animal for 
         * maior ou igual a 11, para de avancar
         */
        if(forca!==7 && forca<11){
            fila_cartas[i-1] = peixeboi;
            fila_cartas[i] = animal;
        }else{
            parou = true;
        }

        i--;
    }

    montarFila();
}

function oncapintada(){
    let macacos = [];

    //desmontamos a fila de animais
    desmontarFila();

    //identificando todos os macacos da fila
    for(let animal of fila_cartas){
        let id_carta = animal.id;
        let forca = parseInt(id_carta.split("-")[0]);

        if(forca===4) macacos.push(animal);
    }

    //removendo todos os macacos da fila
    for(let macaco of macacos) fila_cartas.pop(macaco);
    macacos = [];

    //avancando a onca na fila
    for(let i=fila_cartas.length-1;i>0;i--){
        let onca = fila_cartas[i];
        let animal = fila_cartas[i-1];

        fila_cartas[i-1] = onca;
        fila_cartas[i] = animal;
    }

    //montamos a fila de animais
    montarFila();
}