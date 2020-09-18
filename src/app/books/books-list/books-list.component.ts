import { Component, Input, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

}
