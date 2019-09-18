//ator
let yAtor = 366;
let xAtor = 100; 
let colidiu = false;
let placar= 0;

function mostraPlacar(){
  
  if(yAtor<15){
    placar+=1;
    voltaAtorParaPosicaoInicial();
    somPonto.play();

    
  }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(placar, 150, 30);
}
//colideRectCircle(rx, ry, rComprimento rAltura, cx, cy, diameter
function verificaColisao(){
  for( let i=0; i< imagensCarros.length; i++){
   //pergunta se colidiu, recebe resposta 
  colidiu=collideRectCircle(xCarros[i],yCarros[i],comprimentoCarros[i],altura, xAtor, yAtor,15);
    
    if(colidiu){
      somColidiu.play();
    
      console.log("colidiu");
      voltaAtorParaPosicaoInicial();
        if(placar >0)// só tira ponto se for maior que zero
    placar-=1; // perde ponto
      
    }
    
  }//fim do for

}// fim do verificaColisão

function voltaAtorParaPosicaoInicial(){
yAtor= 366;
}


function mostraAtor(){
 image(imagemDoAtor,100,yAtor,30, 30);}

function movimentaAtor() {
  
  if(keyIsDown(UP_ARROW))
     {
       if(yAtor >5)
     yAtor-=3;
     }
 if(keyIsDown(DOWN_ARROW))
   if(yAtor < 366){
    yAtor+=3;
   }
}
