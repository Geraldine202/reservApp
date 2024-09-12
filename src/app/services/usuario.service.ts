import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //aca podemos crear variables:
  usuarios: any[]=[
    {
      "rut": 16666666,
      "nombre": "admin",
      "fecha_nacimiento": "1990-03-24",
      "genero": "Masculino",
      "tiene_equipo": "",
      "nombre_equipo": "minions",
      "tipo_usuario": "administrador"
    }
  ];

  constructor() { }

  //aqui vamos a crear toda nuestra logica de programación
  //DAO:
  public createUsuario(usuario:any):boolean{
    if(this.getUsuario(usuario.rut)==undefined){
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }

  public getUsuario(rut:string){
    return this.usuarios.find(elemento=>elemento.rut == rut );
  }

  public getUsuarios():any[]{
    return this.usuarios;
  }

  public updateUsuario(rut:string, nuevoUsuario:any){
    const indice = this.usuarios.findIndex(elemento => elemento.rut==rut);
    if(indice==-1){
      return false;
    }
    this.usuarios[indice] = nuevoUsuario;
    return true;
  }

  public deleteUsuario(rut:string):boolean{
    const indice = this.usuarios.findIndex(elemento => elemento.rut==rut);
    if(indice==-1){
      return false;
    }
    this.usuarios.splice(indice,1);
    return true;
  }
}
