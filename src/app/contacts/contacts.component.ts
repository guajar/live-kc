import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-contacts',
  template: `
    <div class="row">
      <kc-form-vd class="col"></kc-form-vd>
    </div>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
