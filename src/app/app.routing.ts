//importar los modulso del routing de  angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar componentes a los cuales  les quiero hacer una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { BlogComponent } from "./components/blog/blog.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

//array de rutas
const appRoutes: Routes=[
    {path:'home',component: HomeComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'blog',component:BlogComponent},
    {path:'blog/articulo/:id', component:ArticleComponent},
    {path:'blog/crear',component:ArticleNewComponent},
    {path:'blog/editar/:id',component:ArticleEditComponent},
    {path:'buscar/:search',component:SearchComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'paginaPruebas',component: PaginaComponent},
    {path:'paginaPruebas/:nombre/:apellido',component: PaginaComponent},
    {path:'**',component: ErrorComponent}//importante que la pagina de error este al ultimo sino no se ejecutan ninguna
]

//exportar el modulo de las rutas
 export const appRoutingProviders: any[]=[];//se lo pone vacio para establecerlo como servicio
 export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
