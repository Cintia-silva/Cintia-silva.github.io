//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [242,78,7];
let velocidadeX= 15;
let velocidadeY= 15;

//Variáveis Raquete
let alturaRaquete= 100;
let larguraRaquete = 20;

//Variaveis Minha Raquete
let xMinhaRaquete=580;
let yMinhaRaquete = 150;
let corMinhaRaquete= 0; //Preto

//Variaveis Raquete Oponente
let xRaqueteOponente=0;
let yRaqueteOponente = 150;
let corRaqueteOponente= 0; //Preto

//Variaveis placar
let pontosMeus=0;
let pontosOponente=0;

let ponto;
let raquetada;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto= loadSound("ponto.mp3");

}


//Configuração Inicial
function setup() {
  createCanvas(600, 400);
  largura= width;
  altura= height;
  print("Largura: "+largura+" altura: "+altura);
}
//Desenha - Looping infinito while(1)
function draw() {
  background(134, 176, 0);
  //Se os pontosMeus não forem maiores ou
  //iguais a 10 ou os pontos do oponente
  //não forem maiores ou igual a 10, então
  //joga
  if(!(pontosMeus >=10 || pontosOponente>=10))
   
  jogo();
  else
    mostraVencedor();
} //draw desenha

function mostraVencedor(){
if(pontosMeus >=10){
  fill(255,130,0); //laranja
  rect(300,0,300,400); //metade direita da tela
  textAlign(CENTER);
  fill(0), // texto preto
  noStroke();
  textSize(30);
  text("Lado Direito é Campeão", 300,200);
}
  else{
  fill(255,130,0); //laranja
  rect(300,0,300,400); //metade direita da tela
  textAlign(CENTER);    fill(0); //texto preto
  noStroke();
  textSize(30);
  text("Lado Esquerdo é Campeão!!", 300,200);
}
  
       }
function jogo(){
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoMinhaRaquete();
  verificaColisaoRaqueteOponente();
  mostraPlacar();
  marcaPonto();

 
  
  //draw - desenha
}


function verificaColisaoMinhaRaquete(){
if(xBolinha+ raio> xMinhaRaquete && 
   yBolinha -raio < yMinhaRaquete + alturaRaquete  && 
   yBolinha +raio > yMinhaRaquete)
  {
    if(!(xBolinha< 300 && velocidadeX >0 ||
        xBolinha>300 && velocidadeX<0)){
   velocidadeX*=-1;
      raquetada.play();
       }
  }
}


function verificaColisaoRaqueteOponente(){
if(xBolinha - raio < xRaqueteOponente +larguraRaquete && 
   yBolinha - raio < yRaqueteOponente + alturaRaquete   && 
   yBolinha + raio > yRaqueteOponente)
  
  {
      if(!(xBolinha< 300 && velocidadeX >0 ||
        xBolinha>300 && velocidadeX<0)){
        velocidadeX*=-1;
        raquetada.play();
      }
  }
}


function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){//seta para cima- 87 
    if(yMinhaRaquete<0){
      yMinhaRaquete=0 }
    else{
    yMinhaRaquete -=10;//velocidade da raquete
    }
  
  }
    if(keyIsDown(DOWN_ARROW)){//seta para baixo- 83 S
      if(yMinhaRaquete>300){
         yMinhaRaquete=300;
         }
  else{
    yMinhaRaquete +=10;//velocidade da raquete
  }
      
  }
  
}


function movimentaRaqueteOponente(){
  if(keyIsDown(87)){//seta para cima- 87 
        if(yRaqueteOponente<0){
      yRaqueteOponente=0 }
    else{
    yRaqueteOponente -=10;//velocidade da raquete
    }
  
  }
    if(keyIsDown(83)){//seta para baixo- 83 S
            if(yRaqueteOponente>300){
         yRaqueteOponente=300;
         }
      else{
    yRaqueteOponente +=10;//velocidade da raquete
      }
  
  }
  
}

function mostraRaquete(){
fill( corMinhaRaquete);
rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete,alturaRaquete);
//mostra raquete oponente
fill( corRaqueteOponente);
rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete,alturaRaquete);
}
  
function verificaColisao()  {
  //Colisão Horizontal com bordas laterais
  if(xBolinha + raio > largura || xBolinha - raio <0){
    //velocidadeX = velocidade * -1
    velocidadeX*=-1;
  }
  
  //Colisão Vertical com bordas superior e inferior
  if(yBolinha+ raio > altura || yBolinha - raio < 0){
    velocidadeY *= -1;
  }
}




function movimentaBolinha(){  
  if(frameCount> 100){    
  //Velocidade Horizontal
  xBolinha += velocidadeX; //Incremento de x
  //Velocidade vertical
  yBolinha += velocidadeY; //Incremento de y
  }
}


function mostraBolinha(){
    noStroke();
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
}

function mostraPlacar(){
  textSize(30);
  strokeWeight(4);//Largura da Borda
  stroke(93,36,173);//cor da Borda= roxo
  
  fill(0);
  rect(425,12,60,35,10);//retângulo Meus Pontos
  rect(125,12,60,35,10);// retangulo oponente

  fill(255);//Texto Branco
  textAlign(CENTER);// alinhamento centralizado do texto
  text(pontosMeus, 450, 40);
  text(pontosOponente, 150, 40);
}

function marcaPonto(){
 if(xBolinha<11){
 //incrementar os pontos
 pontosMeus+= 1; //pontosMeus=PontosMeus+1
   ponto.play();
 }
  if(xBolinha>589){
     pontosOponente+= 1;
     }
 
}



  