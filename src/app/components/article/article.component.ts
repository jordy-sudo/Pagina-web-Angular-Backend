import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/article';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
}) 
export class ArticleComponent implements OnInit {

  public article!:Article;
  public url!:string;
  public title!:string;
  constructor(
    private _articlesService:ArticleService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.url=Global.url;
     
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id']//recoge la variable id que viene por la url
      this._articlesService.getArticle(id).subscribe(
        response=>{
           console.log(response.articulo_consultado)
           if(response.articulo_consultado){
            this.article=response.articulo_consultado
           }else{
            //this._router.navigate(['/home'])
           }
           //asignamos el valor o btenido a nuestra variable
            //this.title=response.title
          
            
            //this._router.navigate(['/home']);
          
        },
        error=>{
          console.log(error);
          this._router.navigate(['/home']);
        }
      )
    } )
    
  }
  delete(id:any){
    Swal.fire({
      title: 'Estas seguro de eliminar este ariculo?',
      text: 'Una vez eliminado no se podra recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Hazlo',
      cancelButtonText: 'No, ten cuidado'
    }).then((result) => {
      if (result.isConfirmed) {
        this._articlesService.delete(id).subscribe(
          response=>{
            Swal.fire(
              'Eliminado..',
              'El articulo se a eliminado exitosamente',
              'success'
            )
            this._router.navigate(['/blog']);
          },
          error=>{
            console.log(error)
            this._router.navigate(['/blog']);
          }
        )
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El archivo aun sigue en la base de datos :)',
          'error'
        )
      }
    })
  
  }

}
