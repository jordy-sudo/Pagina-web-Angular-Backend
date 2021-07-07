import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../services/global';
import Swal from 'sweetalert2'





@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {


  public article!: Article;
  public status!: string;
  public page_title!:string;
  public is_edit!:boolean;
  public url!:string;


  /*afuConfig = {
    uploadAPI: {
      url:Global.url+"upload-image/"
    }
};*/

  afuConfig = {
    uploadAPI: {  
      url: Global.url+'upload-image/'
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
    private http: HttpClient,
  ) {
    this.is_edit=false;
    this.article = new Article('', '', '', '', null);
    this.page_title="Crear ariculo";
    this.url=Global.url;
  }

  ngOnInit(): void {
  }





  capDatos() {
    //alert('Formulario enviado');
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'succes') {
          this.status = 'success';
          this.article = response.nuevo_article;
          Swal.fire('El archivo se a creado correctamente')
          this._router.navigate(['/blog']);

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

  imageUpload(data:any){
    //let image_data = JSON.parse(data.response);
    //console.log(data.response);
    console.log(data.body.image)
    this.article.img = data.body.image;
  }
}
