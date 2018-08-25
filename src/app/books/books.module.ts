import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { FormsModule } from '@angular/forms';
import { MbooksService } from '../services/mbooks.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  declarations: [BooksComponent, MockBooksComponent],
  providers: [
    MbooksService
  ]
})
export class BooksModule { }
