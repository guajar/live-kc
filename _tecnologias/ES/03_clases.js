/*jshint esversion: 6*/
class Libro {
    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
    }
}

class LibroTec extends Libro {
    constructor(autor, titulo, categoria = "Informatica") {
       super(autor, titulo);
       this.categoria = categoria; 
    }
}

let libro = new Libro("J.Maldonado", "Aprendiendo Angular 6");
libro.editorial = "Ra-ma";
libro.mostrar();

let libro2 = new LibroTec("J.Maldonado", "Aprendiendo Angular 6");
libro2.editorial = "Ra-ma";
libro2.mostrar();