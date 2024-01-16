import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from './book';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book-service';

@Component({
  templateUrl: './book-detail.component.html',
  styles: [
    `
      td,
      th {
        border: 1px;
        padding: 20px;

        border-collapse: collapse;
      }

      .bookTitle {
        font-size: 2.25rem /* 36px */;
        line-height: 2.5rem /* 40px */;
      }
      td {
        font-size: 1.2rem /* 36px */;
        line-height: 2rem /* 40px */;
      }
    `,
  ],
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
      next: (book) =>
        book != null
          ? (this.book = book)
          : (this.errorMsg = 'Book does not exist'),
      error: (err) => (this.errorMsg = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
