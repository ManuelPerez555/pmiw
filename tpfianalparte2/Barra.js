class Barra{
  cosntructor(){
    this.carga = 0.0;
    this.personaje = new Personaje(); 
  }
   dibujar(){
     push();
     fill(255,100);
     rect(20,100,40,200,5);
     pop();
     
     push();
     fill(0,0,100);
     rect(20,300,40,-this.carga,5);
     pop();
     
     push();
     if(this.carga >180){
       fill(0,0,100);
       rect(15,115,50,5);
     }else{
       fill(255);
       rect(15,115,50,5);
   }
     pop();
   }  
}

              
