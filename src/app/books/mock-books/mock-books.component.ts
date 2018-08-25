import { Component, OnInit } from '@angular/core';
import { MbooksService } from '../../services/mbooks.service';

@Component({
  selector: 'kc-mock-books',
  templateUrl: './mock-books.component.html',
  styleUrls: ['./mock-books.component.css']
})
export class MockBooksComponent implements OnInit {

  key: string;
  aBooks: Array<string>;

  constructor(public mBooks: MbooksService) { }

  ngOnInit() {
    this.key = '';
    this.aBooks = [];
  }

  btnSearch() {
    this.aBooks = this.mBooks.getBooks(this.key);
  }

  btnSearchRx() {
    this.mBooks.getBooks$(this.key)
      .subscribe(
        (response: any) => { this.aBooks =  response; }
      );
  }
}
