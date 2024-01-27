import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookUrl = 'api/books/books.json';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrl);
    // .pipe(
    //   tap((data) => console.log('All: ', JSON.stringify(data))),
    //   catchError(this.handleError)
    // )
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => `An error occured: ${err.error.message}`);
  }

  getBook(id: number): Observable<IBook | undefined> {
    return this.getBooks().pipe(
      map((books: IBook[]) => books.find((b) => b.id === id))
    );
  }
  //TODO:
  // getNewId(): number {
  //   let max = NaN;
  //   this.getBooks().pipe(
  //     map((books) => {
  //       max = books.reduce((book, currBook) => {
  //         return book.id.valueOf() > currBook.id.valueOf() ? book : currBook;
  //       }).id;
  //       return max;
  //     })
  //   );
  //   return max;
  // }
}
