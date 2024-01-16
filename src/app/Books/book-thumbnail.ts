import { Component, Input } from '@angular/core';
import { IBook } from './book';

@Component({
  selector: 'book-thumbnail',
  templateUrl: './book-thumbnail.component.html',
})
export class BookThumbnail {
  @Input() book: IBook | undefined;
}
