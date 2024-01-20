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
  filteredBooks: IBook[] = [];
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.performFilter(value);
  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLowerCase();
    return this.books.filter(
      (book: IBook) =>
        book.title.toLowerCase().includes(filterBy) ||
        book.author.toLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.sub = this.bookService.getBooks().subscribe({
      next: (allBooks) => {
        this.books = allBooks;
        this.filteredBooks = this.books;
      },
      error: (err) => console.error(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
