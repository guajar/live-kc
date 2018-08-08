import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-home',
  template: `
    <div class="row">
      <kc-saludo class="col"></kc-saludo>
      <kc-references class="col"></kc-references>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
