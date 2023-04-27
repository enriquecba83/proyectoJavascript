class Pokemon{
    ////atributos
    nombre;
    tipo;
    nivel;
    entrenador;
    tipoAtaque;
    ataque;
    vida;
    precio; ///undefined para despues declararla si es necesario

    ///constructor
    constructor(nombre,tipo,nivel,entrenador)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.entrenador = entrenador;
        this.tipoAtaque = tipoAtaque;
        this.ataque = ataque;
        this.vida = vida;
    }

    /// comportamientos/metodos
    atacar =function(nombre) {
        console.log(this.nombre + ' ataca a ' + nombre + ' con un tipo de ataque de ' + this.tipoAtaque);
    }

    evolucionar = function(nombreEvolucionado, cantAtaque) {
        console.log(this.nombre + ' esta evolucionando...');
        this.nombre = nombreEvolucionado;
        this.ataque += cantAtaque;
        this.nivel++;
    }

    volverPokebola =() => {
        console.log(this.nombre + ' vuelve a la Pokebola...');
    }
}