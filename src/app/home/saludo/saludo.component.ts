import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  user: string;
  language: string;

  constructor() { }

  ngOnInit() {
    this.user = 'Jose Antonio Maldonado';
    this.language = 'es';
  }

  remove(ev) {
    this.user = '';
    console.log(ev);
  }

}
