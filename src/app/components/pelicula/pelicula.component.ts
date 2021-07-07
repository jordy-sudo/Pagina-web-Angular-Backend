import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  constructor() { }
  @Input() pelicula!:Pelicula;
  @Output() MarcarFavorita=new EventEmitter();//para enviar datos a la clase padre
  ngOnInit(): void {
    //console.log(this.pelicula.image)
  }
  seleccionar(event: any, pelicula: any){
    this.MarcarFavorita.emit({
      pelicula:pelicula
    })
  }
}
