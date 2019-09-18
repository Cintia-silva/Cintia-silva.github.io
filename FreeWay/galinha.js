
let yGalinha = 366;
let xGalinha = 350; 
let colide = false;
let pontos = 0;

function mostraPontos(){
  
  if(yGalinha<15){
    pontos+=1;
    voltaGalinhaParaPosicaoInicial();
    somPonto.play();

    
  }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(pontos, 350, 30);
}
//colideRectCircle(rx, ry, rComprimento rAltura, cx, cy, diameter
function verificarColisao(){
  for( let i=0; i< imagensCarros.length; i++){
   //pergunta se colidiu, recebe resposta 
  colide=collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros[i],altura, xGalinha, yGalinha,15);
    
    if(colide){
      somColidiu.play();
    
      console.log("colidiu");
      voltaGalinhaParaPosicaoInicial();
        if(pontos >0)// só tira ponto se for maior que zero
    pontos-=1; // perde ponto
      
    }
    
  }//fim do for

}// fim do verificaColisão

function voltaGalinhaParaPosicaoInicial(){
yGalinha= 366;
}


function mostraGalinha(){
 image(imagemDaGalinha,350,yGalinha,30, 30);}

function movimentaGalinha() {
  
  if(keyIsDown(87))
     {
       if(yGalinha >5)
     yGalinha-=3;
     }
 if(keyIsDown(83))
   if(yGalinha < 366){
    yGalinha+=3;
   }
}
