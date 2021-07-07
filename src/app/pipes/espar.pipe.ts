import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'espar'
})
export class EsparPipe implements PipeTransform{
    transform(value:any){
        var espar='no es par';
        if(value % 2 ==0){
            espar='Es un numero par'
        }
        return "El anio es : "+value+" y "+espar;
    }
}