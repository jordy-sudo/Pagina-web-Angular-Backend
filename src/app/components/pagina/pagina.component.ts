import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public paginaText='Pagina Jordy-sudo';
  public titulo:string;
  public nombre!: string;
  public apellido!: string;
  
  constructor(private _route:ActivatedRoute,private _router:Router) { //con route sacamos los parametros de la url y el router hacer q nos redireccione con otras paginas
    this.titulo='Pagina de pruebas'
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
       this.nombre=params.nombre;
       this.apellido=params.apellido;
    });
  }
  redirigir(){
    this._router.navigate(['/paginaPruebas','jordy','Quila']);
  }

}
