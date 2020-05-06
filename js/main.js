var fila = document.getElementById("fila");
var mao = document.getElementById("mao-cartas");
var src = "imagens/animais/";
var cartas = [];
var fila_cartas = [];
var mao_cartas = [];
var cores = ["#68C2CA", "#ECC151", "#89B167", "#D13B58"];
var animais = [
    {
        nome: "1-Mucura",
        id: "1-mucura" + cores[0],
        imagem: src + "1-mucura.jpg",
        infinito: false
    }, {
        nome: "2-Arara Azul",
        id: "2-arara-azul" + cores[0],
        imagem: src + "2-arara-azul.jpg",
        infinito: false
    }, {
        nome: "3-Paca",
        id: "3-paca" + cores[0],
        imagem: src + "3-paca.jpg",
        infinito: false
    }, {
        nome: "4-Macaco de Cheiro",
        id: "4-macaco-de-cheiro" + cores[0],
        imagem: src + "4-macaco-de-cheiro.jpg",
        infinito: false
    }, {
        nome: "5-Camaleão",
        id: "5-camaleao" + cores[0],
        imagem: src + "5-camaleao.jpg",
        infinito: false
    }, {
        nome: "6-Ariranha",
        id: "6-ariranha" + cores[0],
        imagem: src + "6-ariranha.jpg",
        infinito: false
    }, {
        nome: "7-Anta",
        id: "7-anta" + cores[0],
        imagem: src + "7-anta.jpg",
        infinito: true
    }, {
        nome: "8-Girafa",
        id: "8-girafa" + cores[0],
        imagem: src + "8-girafa.jpg",
        infinito: true
    }, {
        nome: "9-Sucuri",
        id: "9-sucuri" + cores[0],
        imagem: src + "9-sucuri.jpg",
        infinito: false
    }, {
        nome: "10-Jacaré Açu",
        id: "10-jacare-acu" + cores[0],
        imagem: src + "10-jacare-acu.jpg",
        infinito: true
    }, {
        nome: "11-Peixe Boi",
        id: "11-peixe-boi" + cores[0],
        imagem: src + "11-peixe-boi.jpg",
        infinito: true
    }, {
        nome: "12-Onça Pintada",
        id: "12-onca-pintada" + cores[0],
        imagem: src + "12-onca-pintada.jpg",
        infinito: false
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
    for(let i=0;i<animais.length;i++){
        let imagem, imagem_carta, nome, botao, informacao_carta, carta;
        
        imagem = document.createElement("img");
        imagem.src = animais[i].imagem;
        imagem.alt = animais[i].nome;
    
        imagem_carta = document.createElement("div");
        imagem_carta.className = "imagem-carta";
        imagem_carta.appendChild(imagem);
    
        nome = document.createElement("p");
        nome.style.color = "#ffffff";
        nome.textContent = animais[i].nome;

        botao = document.createElement("button");
        botao.className = "botao-carta";
        botao.textContent = "JOGAR";
        botao.onclick = function(){
            let carta = document.getElementById(animais[i].id);
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
    
        carta = document.createElement("div");
        carta.className = "carta";
        carta.id = animais[i].id;
        carta.style.backgroundColor = cores[0];
        carta.appendChild(imagem_carta);
        carta.appendChild(informacao_carta);
    
        cartas.push(carta);
    }
}

function adicionarCartaNaMao(){
    let carta = cartas.pop(0);

    mao_cartas.push(carta);
    mao.appendChild(carta);
}

embaralhar();
gerarCartas();
for(let i=0;i<4;i++) adicionarCartaNaMao();