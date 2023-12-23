import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from './book';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book-service';

@Component({
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit, OnDestroy {
  PageTitle: string = 'Book Details';
  book: IBook | undefined;
  sub!: Subscription;
  errorMsg: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.bookService.getBook(id).subscribe({
      next: (book) => (this.book = book),
      error: (err) => (this.errorMsg = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
