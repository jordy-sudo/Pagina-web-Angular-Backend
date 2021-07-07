import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {
  public homeText='Home Jordy-sudo';
  public titulo:string;
  public articles!:Article[];
  constructor(
    private _articleService:ArticleService
  ) { 
    this.titulo='Home'
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
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
