









function setup() { //Preparação
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {  //Desenha o jogo
  background(imagemDaEstrada);
   if(!(placar >= 10 || pontos >=10))
    jogo();
  else
    mostraVencedor();
}


function mostraVencedor(){
  if(pontos >= 10){
    fill(35,142,104);
    rect(300,0,300,400);//Metade direita da tela
     rect(0,0,300,400);//Metade esquerda da tela
    textAlign(CENTER);
    noStroke();
    fill(0);//Texto preto
    textSize(30);
    text("Galinha Jurema é campeã!",300,200);
  }else{//copia e cola tudo ali de cima!
    fill(0,255, 127);
    rect(0,0,300,400);//Metade esquerda da tela
     rect(300,0,300,400);//Metade direita da tela
    textAlign(CENTER);
    noStroke();
    fill(0);//Texto preto
    textSize(30);
    text("Vaquinha maria é campeã!",300,200);
  }
}
//fimdodraw
  
 
  
function jogo(){
  mostraGalinha();
  movimentaGalinha();
  mostraAtor();
  movimentaAtor();
  movimentaCarro();
  mostraCarro();
  verificaColisao();
  mostraPlacar();
   mostraPontos();
   verificarColisao();
  
}

 






