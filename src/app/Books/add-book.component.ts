import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) {}

  checkoutForm = this.formBuilder.group({
    author: '',
    country: '',
    language: '',
    pages: '',
    title: '',
    year: '',
  });

  onSubmit(): void {
    console.log('Your Book - ', this.checkoutForm.value);
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
