import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BookListComponent, BookDetailComponent],
  imports: [FormsModule, HttpClientModule, CommonModule],
})
export class BookModule {}
