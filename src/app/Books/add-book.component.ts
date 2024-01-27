import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IBook } from './book';
import { BookService } from './book-service';

@Component({
  templateUrl: 'add-book.component.html',
  styles: [
    `
      input {
        color: black;
        text-align: center;
        border-radius: 25px;
      }
    `,
  ],
})
export class AddBookComponent {
  constructor(
    // private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private bookService: BookService
  ) {}
  validInput: boolean = false;
  emptyData: boolean | undefined;
  invalidDataMsg: string = 'Invalid Data';

  file: any;
  // author: string | undefined;
  // country: string | undefined;
  // language: string | undefined;
  // pages: string | undefined;
  // title: string | undefined;
  // year: string | undefined;
  // link: string | undefined;

  book: IBook = {
    id: NaN,
    author: '',
    country: '',
    imageLink: '',
    language: '',
    link: '',
    title: '',
    pages: NaN,
    year: NaN,
  };

  bookObj = '';

  // checkoutForm = this.formBuilder.group({
  //   author: '',
  //   country: '',
  //   language: '',
  //   pages: '',
  //   title: '',
  //   year: '',
  // });

  validateData() {
    if (
      this.book.author == '' ||
      this.book.country == '' ||
      this.book.language == '' ||
      this.book.pages < 0 ||
      this.book.title == ''
    ) {
      this.emptyData = true;
      this.validInput = false;
      this.invalidDataMsg = 'All fields except year and link are required!!';
      console.log(this.invalidDataMsg);
    } else if (
      this.file.type != 'image/png' &&
      this.file.type != 'image/jpeg'
    ) {
      this.invalidDataMsg =
        'Please upload coverpage of the book in .png or .jpeg format';
      this.validInput = false;
      this.emptyData = true;
      console.log(this.invalidDataMsg);
    } else {
      this.emptyData = false;
      this.validInput = true;
    }
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file - ');
    console.log(this.file);
    console.log('file type - ' + this.file.type);
    console.log('file name - ' + this.file.name);
    if (this.file.type == 'image/png' || this.file.type == 'image/jpeg') {
      this.book.imageLink = 'assets/images/' + 'this.file.name';
    }
  }

  onSubmit(): void {
    // console.log('new ID = ' + this.bookService.getNewId());
    this.validateData();
    console.log(' Valid input = ' + this.validInput);
    let formData = new FormData();
    formData.set('coverPage', this.file);
    // save file to local

    if (this.validInput) {
      this.bookObj = JSON.stringify(this.book).toString();
      console.log('Your Book - ', this.bookObj);
      this.router.navigate(['']);
    } else {
    }
  }
}

// "id": 1,
// "author": "Chinua Achebe",
// "country": "Nigeria",
// "imageLink": "assets/images/things-fall-apart.jpg",
// "language": "English",
// "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
// "pages": 209,
// "title": "Things Fall Apart",
// "year": 1958
