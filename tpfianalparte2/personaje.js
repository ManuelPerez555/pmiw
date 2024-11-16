class Personaje{
  constructor(){
    this.carga = 0.0;
    this.imagen = 0;
  }
  aumentarCarga(){
    if(this.carga <200){
       this.carga = this.carga + 1;
    }
  
  }
  disminuirCarga(){
    if(this.carga >0){
      this.carga = this.carga - 1;
    if(this.carga >200){
      this.carga = 200;
    }
    }
  }
  
}
