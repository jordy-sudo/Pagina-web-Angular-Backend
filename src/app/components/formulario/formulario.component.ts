import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formularioText='Formulario Jordy-Sudo';
  public titulo:string;
  public user:any;
  public campo!:string;
  constructor() {
    this.titulo='Formulario'
    this.user={
      nombre:'',
      apellido:'',
      bio:'',
      genero:''
    }
   }

  ngOnInit(): void {
  }
  capDatos(){
    alert('Formulario enviado');
    console.log(this.user)
  }
  hasdadoClick(){
    alert('has dado click')
  }

  hasSalido(){
    alert('has dado enter');

  }
}
