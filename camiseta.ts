
// interfaz
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo:string)
{
    return function(target:Function){
        target.prototype.estampado=function():void
        {
            console.log('Camiseta estampada con el logo: '+logo);
        }
    }    
}
@estampar('Chavilla')


// Clases
 class Camiseta implements CamisetaBase{

    // Propiedades
    private color:string;
    public modelo:string;
    public marca:string;
    public talla:string;
    public precio:number;

    //  Métodos

    constructor(color,modelo,marca,talla,precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio;


    }

    public setColor(color){
        this.color=color;
    }

    public getColor(){
        return this.color;
    }

}

// Clase hija

class Sudadera extends Camiseta
{

    public capucha:boolean;

    public setCapucha(capucha){
        this.capucha=capucha;
    }

    public getCapucha():boolean{
        return this.capucha;
    }


}

var camiseta=new Camiseta('Verde','Corto','Lacoeste','xl',23);
    camiseta.estampar();
var sudadera=new Sudadera('Azul','Corto','Nike','M',30);
    sudadera.setCapucha(true);
    sudadera.setColor('Gris');
console.log(camiseta,sudadera);






