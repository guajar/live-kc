import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FormVdComponent } from './form-vd/form-vd.component';


@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule
  ],
  declarations: [ContactsComponent, FormVdComponent]
})
export class ContactsModule { }
