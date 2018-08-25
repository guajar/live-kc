import { Component, OnInit } from '@angular/core';

import { Contact } from '../../models/contact.model';
import { GROUPS, SECTORS, HOBBIES } from '../../models/master.data';
import { Group } from '../../models/group.model';
import { Sector } from '../../models/sector.model';
import { Hobby } from '../../models/hobby.model';

@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {

  contact: Contact;
  aGroups: Array<Group>;
  aSectors: Array<Sector>;
  aHobbies: Array<Hobby>;

  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
    this.aGroups = GROUPS;
    this.aSectors = SECTORS;
    this.aHobbies = HOBBIES;
  }

  changeHobbies(ev) {
    if (ev.target.checked) {
      this.contact.hobbies.push(ev.target.id);
    } else {
      this.contact.hobbies.splice(
        this.contact.hobbies.indexOf(ev.target.id), 1
      );
    }
  }

  send() {
    console.log('Datos enviados');
  }
}
