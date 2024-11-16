// video
//https://www.youtube.com/watch?v=IM04AjYaw-0

let imagenes = [];
let textos = [];
let pantalla = 0;
let img = [];
let MostrarOpciones = false;
let MostrarTexto = true;
let opciones1 = [];
let opciones2 = [];
let Sonido = [] ;
function preload(){
  
//definicion de imagenes

  
  for(let i = 0; i< 28;i++){
   imagenes[i] = "imagenes/img"+i+".png"; 
  }

//Definicion de textos
   
  textos = loadStrings("data/Textos.txt"); 
  
  //definicion de opciones
  
  //opciones 1

  opciones1 [5] = ["Aceptar"];
  opciones1 [9] = ["Trabajar en el correo"];
  opciones1 [20] = ["Sacar a Mike"];
  
  
  //opciones 2
  
  opciones2 [5] = ["No aceptar"];
  opciones2 [9] = ["Buscar otro trabajo"];
  opciones2 [20]= ["Darle una oportunidad"];
  
  // se cargan las imagenes
  for(let i=0; i < imagenes.length ;i++){
    img[i] = loadImage (imagenes[i]);
  }
  for(let i = 0; i < 3 ; i++){
    Sonido[i] = loadSound("sound/pasarPagina"+i+".mp3");
  }
  
}

function setup() {
createCanvas(640,480);
//precargar el sonido
}

function draw() {
  //pantalla de creditos
    image(img[pantalla],0,0,640,480);
  // define en que pantallas se va mostrar texto. por ejemplo en las finales no se va a mostrar
  if(pantalla ==0|| pantalla == 12 || pantalla == 16 || pantalla == 23 || pantalla == 26 || pantalla == 27 ){
    MostrarTexto = false;
  }else{
    MostrarTexto = true;
  }
  
  if (MostrarTexto == true){
    // muestra el recuadro con el texto si Mostrar texto es Verdadero
    push();
    fill(0,0,0,150);
    textAlign(CENTER);
    rect(20,300,600,160);
    fill(255);
    textSize(20);
    text(textos[pantalla],20,350,600,300);
    pop();
  }
  if(pantalla != 0){
    push();
      textAlign(CENTER,CENTER);
      textSize(25);
      fill(0,0,0,50);
      rect(10,10,100,40);
      fill(255);
      text("Atras",50,30);
    pop();
  }

  
  
  if(MostrarOpciones == true){
    // muestra las opciones si MostrarOpciones es verdadero
    //opcion1
    push();
    
      textAlign(CENTER,CENTER);
      textSize(15);
      fill(0,0,0,50);
      rect(40,400,150,40);
      fill(255);
      text(opciones1[pantalla],120,420);
      
    pop();
    //opcion2
    
    push();
      textAlign(CENTER,CENTER);
      textSize(15);
      fill(0,0,0,50);
      rect(450,400,150,40);
      fill(255);
      text(opciones2[pantalla],520,420);
    pop();
  }
  
  if(pantalla == 5 || pantalla == 9 || pantalla == 20){
    //define en que pantallas se van a mostrar las opciones
    MostrarOpciones = true;
  }else{
    MostrarOpciones = false;
  }
  
  if(pantalla ==0|| pantalla == 12 || pantalla == 16 || pantalla == 23 || pantalla == 26 ){
    // el boton con el cual se inicia el programa y se reinicia el mismo
      push();
      textAlign(CENTER,CENTER);
      textSize(25);
      fill(0,0,0,50);
      rect(240,320,160,60);
      
      if(pantalla == 0 ){
        fill(255);
        text("inicio",320,350);
      }else{
        fill(255);
        text("Reiniciar",320,350);
        text("Fin",320,300)
      }
      pop();
      push();
      textAlign(CENTER,CENTER);
      textSize(25);
      fill(0,0,0,50);
      rect(520,10,100,40);
      fill(255);
      text("creditos",570,25);
      pop();
  }
}

function mousePressed(){
  // el boton para ir a la pagina anterior
  if(mouseX >10 && mouseX < 110 && mouseY >10 && mouseY < 50){
      pasarpagina();
    if (pantalla == 17){
      pantalla = 5
    }else if(pantalla == 13){
      pantalla = 9;
    } else if(pantalla ==24){
      pantalla = 20;
    }else if (pantalla == 0){
      sonido.stop();
    }else if(pantalla== 27){
      pantalla = 0;
    }else{
      pantalla = pantalla - 1;
    }
    
  }else if(MostrarOpciones == true){
    // define a que indice del array va a ir dependiendo de la opcione elegida
    //opcion1
    if(mouseX >40 && mouseX < 190 && mouseY >400 && mouseY < 440){
      //el area del boton de la opcion 1
      pantalla ++;
      pasarpagina();
    }
    
    //opcion2
    if(mouseX >450 && mouseX < 600 && mouseY >400 && mouseY < 440){
      // el area del boton de la opcion 2
        pasarpagina();
       if(pantalla == 5){
         pantalla = 17;
       }
       if(pantalla == 9){
         pantalla = 13;
       }
       if(pantalla == 20){
         pantalla = 24;
       }

    }
  }
      else{
    if(pantalla == 0 || pantalla == 12 || pantalla == 16 || pantalla == 23 || pantalla == 26 || pantalla == 27 ){
      
    }else{
      pantalla++;
      pasarpagina();
    }

  }
  if(mouseX >240 && mouseX < 400 && mouseY >320 && mouseY < 380 ){
    //El area del boton de inicio/reinicio
    if(pantalla == 12 || pantalla == 16 || pantalla == 23 || pantalla == 26 ){
      pantalla =0;
      pasarpagina();
    }else if (pantalla == 0){
      pantalla++;
      pasarpagina();
    }
  }
  if(mouseX > 460 && mouseX <620 && mouseY > 20 && mouseY < 80 ){
    pantalla = 27;
  }
}
function pasarpagina (){
  //una funcion que activa el sonido cuando se requiere
    //detiene el sonido para volver a iniciarlo para que no se solape
    for(let i ; i < 3 ; i++){
       Sonido[i].stop();
    }
       Sonido[int(random(0,2))].play();
  }
