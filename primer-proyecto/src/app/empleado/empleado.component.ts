import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  nombre="Juan";
  
  apellido="Diaz";

  edad=18;

  empresa = "Google";

  

  //llamaEmpresa(value:String){ }

  habilitacionCuadro=true;

  usuRegistrado=false;
  
  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){

    this.usuRegistrado=false;

  }

  setRegistroUsuario(){

    this.usuRegistrado=true;

  }

  setUsuarioRegistrado(event:Event){

    //alert("El usuario se acaba de registrar");

    //this.textoDeRegistro="El usuario se acaba de registrar";

    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else {
      this.textoDeRegistro="No hay nadie registrado";
    }

  }

}
