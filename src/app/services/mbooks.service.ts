import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbooksService {

  aBooks: Array<string>;

  constructor() {
    this.aBooks = [
      'Introducción a Angular', 'Angular a fondo', 'Angular avanzado'
    ];
   }

   getBooks(clave: string) {
     return this.aBooks;
   }

   getBooks$(clave: string) {
    return new Observable(
      (observer) => {
        setTimeout( () => {
          observer.next(this.aBooks);
        }, 2000);
      }
    );
  }
}
