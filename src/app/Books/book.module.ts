import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookThumbnail } from './book-thumbnail';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookThumbnail],
  imports: [FormsModule, HttpClientModule, CommonModule, AppRoutingModule],
})
export class BookModule {}
