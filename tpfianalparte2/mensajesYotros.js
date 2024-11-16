class Mensajes{
  constructor(){
  this.mensaje = "mensaje no cargado";
  }
  dibujar(){
    if(pantallas == 4 ){
      push();
      fill(0,50);
      rect(400,400,200,50,5);
      pop();
      push();
      textAlign(CENTER,CENTER);
      textSize(40);
      text(this.mensaje,(500),(425));
      pop()
    }
  }
}
