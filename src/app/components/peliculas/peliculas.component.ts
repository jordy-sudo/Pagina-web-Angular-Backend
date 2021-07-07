import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit {
  public peliculasText='Peliculas Jordy-sudo';
  public titulo:string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha!:Date;
  constructor(
    private _peliculaService:PeliculaService
  ) {
    this.titulo='Peliculas';
    this.fecha=new Date;
    this.peliculas=this._peliculaService.getPeliculas();

      /* se podria crear valores de esta manera pero la manera mas limpia de hacerlo es crear una clase y crear una neuva clase con los parametros solicitados
      {year:2019,title:"Spiderman",image:'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/06/10-curiosidades-de-Spiderman-2002-compressed-1.jpg?fit=1280%2C720&quality=80&ssl=1'},
      {year:2018,title:"Batman",image:'https://www.tonica.la/__export/1606087293449/sites/debate/img/2020/11/22/batman-ranking-actores.jpg_423682103.jpg'},
      {year:2013,title:"Advengers",image:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B24C001FE32ACC92946F2BA2F80BAF992943CBA6ED89C33C4775E5CDE389A0F5/scale?width=1200&aspectRatio=1.78&format=jpeg'},
      {year:2015,title:"La vida es bella",image:'https://www.recursosyhabilidades.com/cmsAdmin/uploads/o_1c6k6tvrp17iq16ki1me51rn81hcma.jpg'}
    ];*/

   }

  ngOnInit(): void {
  }
  mostrarFavorita(event:any){
    this.favorita=event.pelicula;
  }

}
