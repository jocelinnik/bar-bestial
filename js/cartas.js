var fila = document.getElementById("fila");
var mao = document.getElementById("mao-cartas");
var src = "imagens/animais/";
var cartas = [], fila_cartas = [], mao_cartas = [];
var cores = [{
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
var animais = [
    {
        nome: "Mucura",
        valor: 1,
        id: 1 + "-" + cores[0].nome,
        imagem: src + "1-mucura.jpg"
    }, {
        nome: "Arara Azul",
        valor: 2,
        id: 2 + "-" + cores[0],
        imagem: src + "2-arara-azul.jpg"
    }, {
        nome: "Paca",
        valor: 3,
        id: 3 + "-" + cores[0],
        imagem: src + "3-paca.jpg"
    }, {
        nome: "Macaco de Cheiro",
        valor: 4,
        id: 4 + "-" + cores[0],
        imagem: src + "4-macaco-de-cheiro.jpg"
    }, {
        nome: "Camaleão",
        valor: 5,
        id: 5 + "-" + cores[0],
        imagem: src + "5-camaleao.jpg"
    }, {
        nome: "Ariranha",
        valor: 6,
        id: 6 + "-" + cores[0],
        imagem: src + "6-ariranha.jpg"
    }, {
        nome: "Anta",
        valor: 7,
        id: 7 + "-" + cores[0],
        imagem: src + "7-anta.jpg"
    }, {
        nome: "Girafa",
        valor: 8,
        id: 8 + "-" + cores[0],
        imagem: src + "8-girafa.jpg"
    }, {
        nome: "Sucuri",
        valor: 9,
        id: 9 + "-" + cores[0],
        imagem: src + "9-sucuri.jpg"
    }, {
        nome: "Jacaré Açu",
        valor: 10,
        id: 10 + "-" + cores[0],
        imagem: src + "10-jacare-acu.jpg"
    }, {
        nome: "Peixe Boi",
        valor: 11,
        id: 11 + "-" + cores[0],
        imagem: src + "11-peixe-boi.jpg"
    }, {
        nome: "Onça Pintada",
        valor: 12,
        id: 12 + "-" + cores[0],
        imagem: src + "12-onca-pintada.jpg"
    }
];

function embaralhar(){
    for(let i=0;i<animais.length;i++){
        let index1 = Math.floor(Math.random() * animais.length);
        let index2 = Math.floor(Math.random() * animais.length);
    
        let aux = animais[index1];
        animais[index1] = animais[index2];
        animais[index2] = aux;
    }
}

function gerarCartas(){
    for(let animal of animais){
        let imagem, imagem_carta, nome, botao, informacao_carta, carta;
        
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
            let carta = document.getElementById(animal.id);
            mao.removeChild(carta);
            mao_cartas.pop(carta);

            fila_cartas.push(carta);
            fila.appendChild(carta);

            adicionarCartaNaMao();
        };
    
        informacao_carta = document.createElement("div");
        informacao_carta.className = "informacoes-carta";
        informacao_carta.appendChild(nome);
        informacao_carta.appendChild(botao);
    
        let info_carta = animal.valor + " - " + animal.nome + " " + cores[0].nome;
        carta = document.createElement("div");
        carta.className = "carta";
        carta.id = animal.id;
        carta.setAttribute("infocarta", info_carta);
        carta.style.backgroundColor = cores[0].cor;
        carta.appendChild(imagem_carta);
        carta.appendChild(informacao_carta);
    
        cartas.push(carta);
    }
}

function adicionarCartaNaMao(){
    if(cartas.length>0){
        let carta = cartas.pop(0);

        mao_cartas.push(carta);
        mao.appendChild(carta);
    }
}