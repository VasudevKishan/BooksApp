import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from './book-service';
import { IBook } from './book';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Books';
  constructor(private bookService: BookService) {}
  sub!: Subscription;
  books: IBook[] = [];

  ngOnInit(): void {
    this.sub = this.bookService.getBooks().subscribe({
      next: (allBooks) => {
        this.books = allBooks;
      },
      error: (err) => console.error(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
