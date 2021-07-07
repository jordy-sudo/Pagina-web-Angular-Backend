import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  public titulo:string;
  constructor() { 
    this.titulo='Pruebas'
  }

  ngOnInit(): void {
  }

}
