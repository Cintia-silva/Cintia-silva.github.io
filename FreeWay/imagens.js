//definição das variáveis do jogo
let imagenDaEstrada;
let imagemDaGalinha;
let imagemDoAtor;
let imagensCarros= []; //Array(lista) de imagens

//sons
let trilhaSonora;
let somColidiu;
let somPonto;

function preload(){
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
  
//pré-carregamento das imagens nas variáveis
imagemDaEstrada = loadImage("imagens/estrada.png");
imagemDoAtor = loadImage("imagens/ator-1.png");
imagemDaGalinha = loadImage("imagens/galinha.png"); 
imagensCarros [0] =  loadImage("imagens/carro-1.png"); imagensCarros [1] =  loadImage("imagens/carro-2.png"); imagensCarros [2] =  loadImage("imagens/carro-3.png");   imagensCarros [3] =  loadImage("imagens/carro-1.png"); imagensCarros [4] =  loadImage("imagens/carro-2.png"); imagensCarros [5] =  loadImage("imagens/carro-3.png");
} 