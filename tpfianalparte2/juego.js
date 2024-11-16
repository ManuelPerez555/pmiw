class Juego{
  constructor(){
    this.estadoDeJuego = false;
    this.personaje = new Personaje();
    this.barra = new Barra();
    this.mensajes = new Mensajes();
  }
  dibujarInterfaz(){
   if(juegoIniciado == true){
      this.barra.dibujar();
    }
  }
  
  aumentarCarga(){
   this.personaje.aumentarCarga();
   this.barra.carga = this.personaje.carga;
  }
  
  disminuirCarga(){
  this.personaje.disminuirCarga();
  this.barra.carga = this.personaje.carga;
  }
  
  
  
  chequeoDeValor(){
    if(pantallas == 3){
      if (this.personaje.carga > 180){
        imagenPantallas = loadImage("data/imagenes/ganarImagen.png");
        this.mensajes.mensaje = "ganaste"
        pantallas = 4;
    
        sonido[0].play();
      }else{
        imagenPantallas = loadImage("data/imagenes/perderImagen.png");
        this.mensajes.mensaje = "perdiste"
        sonido[1].play();
        pantallas = 4;
        
        }
    juegoIniciado = false;
    this.estadoDeJuego = true;
    
    }
  }
  
  reiniciar(){
    this.estadoDeJuego = false;
    this.personaje.carga = 0;
    this.barra.carga = this.personaje.carga;
    imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
    juegoIniciado = false;
    sonido[0].stop();
    sonido[1].stop();
  }
  dibujarMensaje(){
    if(this.estadoDeJuego == true){
    this.mensajes.dibujar();
    }
  }
  
   funcionesConstantes(){
     if(juegoIniciado == true){
     this.dibujarInterfaz();
     this.disminuirCarga();
   }
     
   }
   
}
