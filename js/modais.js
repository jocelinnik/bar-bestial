const modal = document.getElementById("modal");
const modal_header = document.getElementById("modal-header");
const modal_body = document.getElementById("modal-body");
var titulo = document.createElement("h2");
var botoes_acao = [];
var habilidade_animais = [];

function exibirModalAraraAzul(){
    titulo.textContent = "Qual animal você deseja que a Arara Azul remova ?";
    modal_header.appendChild(titulo);

    for(let animal of fila_cartas){
        let info = animal.getAttribute("infocarta");
        let botao = document.createElement("button");
        botao.className = "btn-body";
        botao.textContent = info;
        botao.onclick = function(){
            araraazul(animal.id);
        };

        botoes_acao.push(botao);
        modal_body.appendChild(botao);
    }

    modal.style.display = "block";
}

function exibirModalPaca(){
    titulo.textContent = "Quantas posições você deseja pular com a Paca ?";
    modal_header.appendChild(titulo);

    for(let i=1;i<=2;i++){
        let botao = document.createElement("button");
        botao.className = "btn-body";
        botao.textContent = i + " posição";
        botao.onclick = function(){
            paca(i);
        }

        botoes_acao.push(botao);
        modal_body.appendChild(botao);
    }

    modal.style.display = "block";
}

function exibirModalCamaleao(){
    titulo.textContent = "Qual animal o seu Camaleão deseja copiar ?";
    modal_header.appendChild(titulo);

    buscarTodosOsAnimaisDaFila();
    for(let habilidade of habilidade_animais){
        let botao = document.createElement("button");
        botao.className = "btn-body";
        botao.textContent = "Animal " + habilidade;
        botao.onclick = function(){
            camaleao(habilidade);
        }

        botoes_acao.push(botao);
        modal_body.appendChild(botao);
    }

    modal.style.display = "block";
}

function exibirModalFinalizarJogo(){
    titulo.textContent = "Chegamos no final do jogo, esse é o total de animais de cada cor:";
    modal_header.appendChild(titulo);

    let amarelos = total_animais["Amarelo"];
    let azuis = total_animais["Azul"];
    let verdes = total_animais["Verde"];
    let vermelhos = total_animais["Vermelho"];
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Amarelos: " + amarelos + 
                            "\nAzuis: " + azuis + 
                            "\nVerdes: " + verdes + 
                            "\nVermelhos: " + vermelhos;
    let botao = document.createElement("button");
    botao.className = "btn-body";
    botao.textContent = "Finalizar";
    botao.onclick = function(){
        //aqui ocultamos o modal e recarregamos a pagina
        modal.style.display = "none";
        modal_header.removeChild(titulo);
        modal_body.removeChild(paragrafo);
        modal_body.removeChild(botao);

        window.location.href = "/";
    }

    modal_body.style.gridTemplateColumns = "auto";
    modal_body.appendChild(paragrafo);
    modal_body.appendChild(botao);

    modal.style.display = "block";
}

function ocultarModalGeral(){
    modal.style.display = "none";
    modal_header.removeChild(titulo);

    for(let botao of botoes_acao) modal_body.removeChild(botao);

    botoes_acao = [];
}

//a ideia eh pegar todos os animais distintos, sem repeticoes
function buscarTodosOsAnimaisDaFila(){
    for(let animal of fila_cartas){
        let id = parseInt(animal.id.split("-")[0]);

        //se ainda nao temos o tipo do animal na fila, insere
        if(habilidade_animais.indexOf(id)===-1) habilidade_animais.push(id);
    }
}