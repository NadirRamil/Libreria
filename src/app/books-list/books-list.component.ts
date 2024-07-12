import { Component } from '@angular/core';
import { bookCartService } from '../book-cart.service';
import { bookDataService } from '../book-data.service';
import { book } from './book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class booksListComponent {

  books: book []= [];

constructor(
  private cart: bookCartService,
  private bookDataService: bookDataService) { 
}

ngOnInit(): void{
  this.bookDataService.getAll()
 .subscribe(books => this.books= books);
}

addToCart(book: book):void{
  this.cart.addToCart(book);
  book.stock -= book.quantity;
  book.quantity = 0;
}

maxReached(m: String){
  console.log (m);
}

}

