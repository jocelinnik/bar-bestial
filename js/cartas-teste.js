var fila = document.getElementById("fila");
var mao = document.getElementById("mao-cartas");
var src_teste = "imagens/animais/";
var cartas_teste = [], fila_cartas = [], super_mao_teste = [];
var cores_teste = [{
    nome: "Amarelo",
    cor: "#ECC151"
}, {
    nome: "Azul",
    cor: "#68C2CA"
}, {
    nome: "Verde",
    cor: "#89B167"
}, {
    nome: "Vermelho",
    cor: "#D13B58"
}];
var animais_teste = [
    {
        nome: "Mucura",
        valor: 1,
        imagem: src_teste + "1-mucura.jpg"
    }, {
        nome: "Arara Azul",
        valor: 2,
        imagem: src_teste + "2-arara-azul.jpg"
    }, {
        nome: "Paca",
        valor: 3,
        imagem: src_teste + "3-paca.jpg"
    }, {
        nome: "Macaco de Cheiro",
        valor: 4,
        imagem: src_teste + "4-macaco-de-cheiro.jpg"
    }, {
        nome: "Camaleão",
        valor: 5,
        imagem: src_teste + "5-camaleao.jpg"
    }, {
        nome: "Ariranha",
        valor: 6,
        imagem: src_teste + "6-ariranha.jpg"
    }, {
        nome: "Anta",
        valor: 7,
        imagem: src_teste + "7-anta.jpg"
    }, {
        nome: "Girafa",
        valor: 8,
        imagem: src_teste + "8-girafa.jpg"
    }, {
        nome: "Sucuri",
        valor: 9,
        imagem: src_teste + "9-sucuri.jpg"
    }, {
        nome: "Jacaré Açu",
        valor: 10,
        imagem: src_teste + "10-jacare-acu.jpg"
    }, {
        nome: "Peixe Boi",
        valor: 11,
        imagem: src_teste + "11-peixe-boi.jpg"
    }, {
        nome: "Onça Pintada",
        valor: 12,
        imagem: src_teste + "12-onca-pintada.jpg"
    }
];

function gerarCartasTeste(){
    for(let cor of cores_teste){
        for(let animal of animais_teste){
            let imagem, imagem_carta, nome, botao, informacao_carta, carta;
            let id_animal = animal.valor + "-" + cor.nome;
            
            imagem = document.createElement("img");
            imagem.src = animal.imagem;
            imagem.alt = animal.nome;
        
            imagem_carta = document.createElement("div");
            imagem_carta.className = "imagem-carta";
            imagem_carta.appendChild(imagem);
        
            nome = document.createElement("p");
            nome.style.color = "#ffffff";
            nome.textContent = animal.valor + " - " + animal.nome;
    
            botao = document.createElement("button");
            botao.className = "botao-carta";
            botao.textContent = "JOGAR";
            botao.onclick = function(){
                let carta = document.getElementById(id_animal);
                mao.removeChild(carta);
                super_mao_teste.pop(carta);
    
                fila_cartas.push(carta);
                fila.appendChild(carta);
    
                adicionarCartaNaMaoTeste();
                executarHabilidadeEspecial(animal.valor);
            };
        
            informacao_carta = document.createElement("div");
            informacao_carta.className = "informacoes-carta";
            informacao_carta.appendChild(nome);
            informacao_carta.appendChild(botao);
        
            let info_carta = animal.valor + " - " + animal.nome + " " + cor.nome;
            carta = document.createElement("div");
            carta.className = "carta";
            carta.id = id_animal;
            carta.setAttribute("infocarta", info_carta);
            carta.style.backgroundColor = cor.cor;
            carta.appendChild(imagem_carta);
            carta.appendChild(informacao_carta);
        
            cartas_teste.push(carta);
        }
    }
}

function embaralharTeste(){
    for(let i=0;i<cartas_teste.length;i++){
        let index1 = Math.floor(Math.random() * cartas_teste.length);
        let index2 = Math.floor(Math.random() * cartas_teste.length);

        console.log("Trocando a posicao " + index1 + " pela posicao " + index2);
    
        let aux = cartas_teste[index1];
        cartas_teste[index1] = cartas_teste[index2];
        cartas_teste[index2] = aux;
    }
}

function adicionarCartaNaMaoTeste(){
    if(cartas_teste.length>0){
        let carta = cartas_teste.pop(0);

        super_mao_teste.push(carta);
        mao.appendChild(carta);
    }
}

function desmontarFila(){
    for(let animal of fila_cartas){
        fila.removeChild(animal);
    }
}

function montarFila(){
    for(let animal of fila_cartas){
        fila.appendChild(animal);
    }
}