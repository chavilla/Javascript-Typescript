var bicicleta={
    color:'rojo',
    modelo:'BMX',
    frenos:'Disco',
    velocidadMaxima:'60km',
    cambiaColor: function(nuevo_color){
        this.color=nuevo_color;
        console.log(this); 
    }
}

bicicleta.cambiaColor('Azul');

