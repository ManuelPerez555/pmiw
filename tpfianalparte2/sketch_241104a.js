//VIDEO
//https://youtu.be/10g94Ce0qx4

let objJuego;
let juegoIniciado = false;
let pantallas = 0;
let imagenPantallas;
let sonido = [];

function preload(){
  
  sonido[1] = loadSound("data/audio/sonidoPerder.mp3");
  sonido[2] = loadSound("data/audio/musica.mp3");
  sonido[0] = loadSound("data/audio/grito.mp3");
  
}
function setup() {
  frameRate(60);
  createCanvas(640,480); 
  objJuego = new Juego();
  imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
  sonido[2].play();
}
function draw(){
  
  image(imagenPantallas,0,0,width,height);
  
  if (juegoIniciado == true){
    objJuego.funcionesConstantes();
  }
  
  pantallaInicial();
  pantallaCreditos();
  pantallaControles();
  
  
  objJuego.dibujarMensaje();
}

function pantallaInicial(){
  if (pantallas == 0 && juegoIniciado == false){
    push();
    rectMode(CENTER,CENTER);
    fill(255,50);
    rect(width/2,height*0.75,150,230,10);
    pop();
    
    //botones
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(width/2,300,140,40,20)
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Jugar",width/2,300);
    pop();
    
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(width/2,360,140,40,20)
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Creditos",width/2,360);
    pop();
    
    
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(width/2,420,140,40,20)
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Controles",width/2,420);
    pop();
  }
}
function pantallaCreditos(){
  if (pantallas == 1){
    botonAtras();
    push();
    rectMode(CENTER,CENTER);
    fill(255,50);
    rect(width/2,height/2,300,200,10);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Creado por:",width/2,170);
    text("Lautaro Oviedo:",width/2,220);
    text("Manuel Perez:",width/2,270);
    pop();
  
  }

}
function pantallaControles(){
  if (pantallas == 2){
    botonAtras()
    push();
    rectMode(CENTER,CENTER);
    fill(255,50);
    rect(width/2,height/2,500,200,10);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Controles:",width/2,170);
    text("Barra espaciadora para aumentar la potencia de grito",width/2,220);
    text("M para ejecutar el grito",width/2,270);
    text("R para reiniciar el juego",width/2,320);
    pop();
  }

}
function botonAtras(){
  if(pantallas == 1 || pantallas == 2 || pantallas == 3){
    push();
    rectMode(CENTER,CENTER);
    fill(255,255,255);
    rect(50,50,100,40,20);
    textAlign(CENTER,CENTER);
    textSize(20);
    fill(0);
    text("Atras",50,50);
    pop();
    
  }
}

function keyPressed(){
  
  if (key == ' '){
    if(juegoIniciado == true){
      for(let i = 0; i < 10; i++){
        objJuego.aumentarCarga();
      }
    }
  }
  if(key == 'm'){
    objJuego.chequeoDeValor();
  }
  if(key == "r"){
    pantallas = 0;
    imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
    juegoIniciado = false;
    objJuego.personaje.carga = 0;
  }  
}
function mousePressed(){
  if(pantallas == 0 && mouseX > 250 && mouseY > 280 && mouseX < 370 && mouseY < 320){
    juegoIniciado = true;
    pantallas = 3
    sonido[2].stop();
  }
  if(pantallas == 0 && mouseX > 250 && mouseY > 340 && mouseX < 370 && mouseY < 380){
    pantallas = 1;
  }
  if(pantallas == 0 && mouseX > 250 && mouseY > 400 && mouseX < 370 && mouseY < 440){
    pantallas = 2;
  }
  if (pantallas == 1 || pantallas == 2 || pantallas == 4){
    if (mouseX > 0 && mouseY > 30 && mouseX < 100 && mouseY < 70){
      pantallas = 0;
      imagenPantallas = loadImage("data/imagenes/imagenFondo.png");
      juegoIniciado = false;
    }
  }
}
