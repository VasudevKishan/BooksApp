import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookListComponent, BookDetailComponent],
  imports: [FormsModule],
})
export class BookModule {}
