import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { Article } from "../model/article";
import {Global} from './global'
import { Params } from '@angular/router';

@Injectable()
export class ArticleService{

    public url!:string;
    constructor(
        private _https:HttpClient
    ){
        this.url=Global.url;
         
    }
    pruebas(){
        return'Soy el servicio de articulo'; 
    }
    getArticles(last:any=null):Observable<any>{

        var articles='articles';

        if(last != null){
            articles='articles/true'
        }
        return this._https.get(this.url+articles)
        
    }
    getArticle(articleId:any):Observable<any>{
        return this._https.get(this.url+'article/'+articleId);
    }
    search(searchString:any):Observable<any>{
        return this._https.get(this.url+'search/'+searchString)
    }
    create(article:any):Observable<any>{
        let params=JSON.stringify(article)//convierto a un JSOn
        let headers=new HttpHeaders().set('Content-Type', 'application/json');//para q el back end reciva un json
        return this._https.post(this.url+'save',params,{headers:headers});
    }
    update(id:any, article:any):Observable<any>{
        let params=JSON.stringify(article);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._https.put(this.url+'article/'+id,params,{headers:headers})
    }
    delete(id:any):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._https.delete(this.url+'article/'+id,{headers:headers})
    }
}