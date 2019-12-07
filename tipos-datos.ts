
//string declarar variables
let cadena: string='Jesus';
let edad:number=26;
let verdadero:boolean=true;

//Tipo de dato any
let cualquier:any='Charris';

console.log(cadena+' '+edad+' '+cualquier);

//Podemos tener un array en typescript

var lenguajes:Array<string> =["php","js","java"];

//Otra manera de declarar un array es así
let anios:number[]=[12,3,4,5];
console.log(lenguajes+' '+anios);


//Multiples tipos de datos en typescript: Un dato puede tener dos tipos haciendolo con |

var dato:string | number="José";
console.log(dato);


//En typescript puedo crear un tipo de dato con la palara reservada type

type alfanumerico= string | number;

var edadJesu: alfanumerico='veinti tres';
console.log(edadJesu);

// Let y var se pueden trabajar en ts. 

var numero1=10;
var numero2=12;

if (numero1==10){
    let numero1=44;
    let numero2=55;
    console.log(numero1+' '+numero2);
    
}

console.log(numero1+' '+numero2);




