import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/model/article';
import{Global}from'../../services/global'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ArticleService]
})
export class BlogComponent implements OnInit {
  public blogText='Blog Jordy-Sudo';
  public articles!:Article[];
  public url!:string;
  constructor( private _articleService:ArticleService) { 
    this.url  =Global.url;

  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      response=>{
        console.log(response.articles)
        if(response.articles){
          this.articles=response.articles;
        }else{

        }
      },
      error=>{
        console.log(error)
      }
    ); //subscribe metodo para obtener los datos http
  }

}
