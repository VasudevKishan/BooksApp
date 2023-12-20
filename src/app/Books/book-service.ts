import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookUrl = 'api/books/books.json';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.bookUrl);
  }
  getBook(id: number): Observable<IBook | undefined> {
    return this.getBooks().pipe(
      map((books: IBook[]) => books.find((b) => b.id === id))
    );
  }
}
