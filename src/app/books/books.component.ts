import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-books',
  template: `
    <div class="row">
      <kc-mock-books></kc-mock-books>
    </div>
  `,
  styles: []
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
