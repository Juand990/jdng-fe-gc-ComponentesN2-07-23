import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'compN2';

  nombre:string='';
  email:string|any='';
  mensaje:string='';
  respuesta:number=0;

  form:any=[];


  constructor() {}

  validarEmail(valor:string) {
    //  /^\w+@\w+([\.-]?\w+)+$/
    //  /[a-z]+@+[a-z]+\.[a-z]/
    if (/^\w+@\w+([\.-]?\w+)+$/.test(valor)){
      //console.log("La dirección de email " + valor + " es correcta.");    
     return true;
    } else {
      //console.log("La dirección de email es incorrecta.");
     return false;
    }
  }

  resp(){
    if (this.nombre != ''  && this.mensaje!= '' && this.respuesta==5) {
      if (this.validarEmail(this.email)) {
        return true;
      } else {
        return false;
      }
      return true;
    }
    else{
      return false;
    }
  }

  enviar(){
    this.form.push({
      nombre:this.nombre,
      email:this.email,
      mensaje:this.mensaje,
      respuesta:this.respuesta,
    });
  }


}
