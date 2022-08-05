export interface Product { //poner la palabra clave export si no, no es visible para otros archivos
    name:string;
    price:number;
    image:string;
    category?:string; // el signo de pregunta dice que puede venir o no el atributo (no es necesario)
}