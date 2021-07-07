export class Article{
    constructor(
        public _id:string,
        public title:string,
        public content:string,
        public img:string,
        public date:any
    ){}
}













/*title:String,
content: String,
date:{type:Date,default:Date.now},//se usa llaves{} para poder dar caractersiticas especiales a un tipo JSON
img:String
*/