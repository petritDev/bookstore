import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = [
    {
      id: 0,
      title: 'Les Misérables',
      author: 'Victor Hugo'
    },
    {
      id: 1,
      title: 'Substance',
      author: 'Peter Hook'
    },
    {
      id: 2,
      title: 'Provocation',
      author: 'John Waters'
    }
  ];

  constructor() { }

  getBook() {
    return this.books;
  }

  getBooks() {
    
  }
}
