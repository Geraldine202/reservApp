import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.page.html',
  styleUrls: ['./administrar.page.scss'],
})
export class AdministrarPage implements OnInit {

  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9Kk]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl('',[Validators.required]),
    genero: new FormControl('',[Validators.required]),
    tiene_equipo: new FormControl('No',[Validators.required]),
    nombre_equipo: new FormControl('',[]),
  });
  usuarios:any[]=[];
  //el servicio nos permite trabajar la información:
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarios=this.usuarioService.getUsuarios();
  }

  registrar(){
    if(this.usuarioService.createUsuario(this.persona.value)){
      alert("Usuario Creado con Éxito!");
      this.persona.reset();
    }else{
      alert("ERROR! No se pudo crear el Usuario!")
    }
  }

  buscar(rut_buscar:string){
   this.persona.setValue(this.usuarioService.getUsuario(rut_buscar));
  }
  modificar(){
    var rut_buscar:string = this.persona.controls.rut.value || "";
    if(this.usuarioService.updateUsuario(rut_buscar , this.persona.value)){
      alert("Usuario MODIFICADO con Éxito");
    }else{
      alert("ERROR!! Usuario NO modificado!");
    }
  }
  eliminar(rut_eliminar:string){
    //console.log(rut_eliminar);
    if(this.usuarioService.deleteUsuario(rut_eliminar)){
      alert("Usuario ELIMINADO con éxito")
    }else{
      alert("ERROR!! Usuario NO eliminado")
    }
  }

}
