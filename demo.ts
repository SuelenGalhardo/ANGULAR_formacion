class Demo {

    nombre: string
    apellidos: string
    constructor(nome: string) {
        this.nombre = nome;
      
    }
    toString() {
        console.log(this.nombre + '' + this.apellidos);
    }
}