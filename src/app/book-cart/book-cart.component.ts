import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { bookCartService } from '../book-cart.service';
import { bookDataService } from '../book-data.service';
import { book } from '../books-list/book';
import { booksListComponent } from '../books-list/books-list.component';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss']
})

export class bookCartComponent implements OnInit {


  cartList: book[];
  constructor(private cart: bookCartService) {

    cart.cartList.subscribe((observable: book[]) => this.cartList = observable);
  }
  ngOnInit(): void {

  }

  total(): number {
    let total = 0
      for (let i in this.cartList) {
        total += this.cartList[i].precio * this.cartList[i].quantity;
      }
    return total;
  }




}



