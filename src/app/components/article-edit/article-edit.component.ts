import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article!: Article;
  public status!: string;
  public is_edit!:boolean;
  public page_title!:string;
  public url!:string;
  /*afuConfig = {
    uploadAPI: {
      url:Global.url+"upload-image/"
    }
};*/

  afuConfig = {
    uploadAPI: {
      url: Global.url + 'upload-image/'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    private http: HttpClient
  ) {
    this.is_edit=true;
    this.article = new Article('', '', '', '', null);
    this.page_title="Editar Articulo";
    this.url=Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }





  capDatos() {
    //alert('Formulario enviado'); 

    this._articleService.update(this.article._id,this.article).subscribe(
      response => {
        console.log(response);
        if (response.status == 'success') {
          //this.status = 'success';
          this.article = response.article;
        //alerta
        Swal.fire('El archivo se a Editado correctamente')
          this._router.navigate(['/blog/articulo',this.article._id]);

        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }

  imageUpload(data: any) {
    //let image_data = JSON.parse(data.response);
    //console.log(data.response);
    console.log(data.body.image)
    this.article.img = data.body.image;
  }

  getArticle(){
    this._route.params.subscribe(params=>{
      let id=params['id']//recoge la variable id que viene por la url
      this._articleService.getArticle(id).subscribe(
        response=>{
           console.log(response.articulo_consultado)
           if(response.articulo_consultado){
            this.article=response.articulo_consultado
           }else{
            this._router.navigate(['/home'])
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
}
