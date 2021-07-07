import { Injectable } from "@angular/core";
import { Pelicula } from "../model/pelicula";

@Injectable()
export class PeliculaService{
    public peliculas!:Pelicula[];

    constructor(){
        this.peliculas=[
            new Pelicula("Spiderman",2019,"https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/06/10-curiosidades-de-Spiderman-2002-compressed-1.jpg?fit=1280%2C720&quality=80&ssl=1"),
            new Pelicula("Batman",2018,"https://www.tonica.la/__export/1606087293449/sites/debate/img/2020/11/22/batman-ranking-actores.jpg_423682103.jpg"),
            new Pelicula("Advengers",2013,"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B24C001FE32ACC92946F2BA2F80BAF992943CBA6ED89C33C4775E5CDE389A0F5/scale?width=1200&aspectRatio=1.78&format=jpeg"),
            new Pelicula("La vida es bella",2015,"https://www.recursosyhabilidades.com/cmsAdmin/uploads/o_1c6k6tvrp17iq16ki1me51rn81hcma.jpg")
          ];
    }
    holaMundo(){
        return 'Hola mundo dese un servicio de Angular!!'
    }
    getPeliculas(){
        return this.peliculas
    }

}