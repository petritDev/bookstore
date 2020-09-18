import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from './books-list/books-list.component';
import { DirectivesModule } from '../directives/directives.module';
import { BooksListItemComponent } from './books-list-item/books-list-item.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BooksListItemComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    BooksListComponent
  ]
})
export class BooksModule { }
