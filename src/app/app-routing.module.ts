import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './Books/book-list.component';
import { BookDetailComponent } from './Books/book-detail.component';
import { AddBookComponent } from './Books/add-book.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/addbook', component: AddBookComponent, pathMatch: 'full' },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', redirectTo: 'books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
