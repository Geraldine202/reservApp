import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //aqui podemos crear variables:
  //NOMBRE: TIPO = VALOR;
  //nombre = Clase(valor); required->obligatorio
  persona = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern("[0-9]{7,8}-[0-9Kk]{1}")]),
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl('',[Validators.required]),
    genero: new FormControl('',[Validators.required]),
    tiene_equipo: new FormControl('No',[Validators.required]),
    nombre_equipo: new FormControl('',[]),
  });
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //podemos crear métodos:
  //public/private registrar
  registrar():void{
    //VALIDACIONES? llamar un DAO? conversion?
    console.log(this.persona.value);
    //alert("Registrado!");
    this.router.navigate(['/login']);

  }

  /*public habilitar_boton():boolean{
    if(this.persona.valid){
      return false;
    }
    return true
  }*/

    setResult(ev:any) {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    }
}
