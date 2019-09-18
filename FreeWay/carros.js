
//Carro
let xCarros = [600, 600,600,600,600,600];
let yCarros = [40, 98, 150,210,260,315];
let velocidadedesCarros = [2, 2.5,3.2,3,2,4];
let comprimentoCarros = [50,50,80,50,50,80];
let altura = 40;

function mostraCarro(){
// print("quantidade de carros:"+imagensCarros.lenght);
  for(let i=0; i< imagensCarros.length;i++){
  image(imagensCarros [i], xCarros[i], yCarros[i], comprimentoCarros[i],altura);
 
  }

}


 
function movimentaCarro(){
  for(let i=0; i<imagensCarros.length;i++){
  xCarros[i] -= velocidadedesCarros[i];
    
      
  if( xCarros[i]< -50){
     xCarros[i]= 600; //volsta á posição inicial
  
    }

  }
  


    
      
 
  
}