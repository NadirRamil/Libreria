import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { book } from './books-list/book';

@Injectable({
  providedIn: 'root'
})


export class bookCartService {
  private _cartList: book[] = [];
  cartList: BehaviorSubject<book[]> =new BehaviorSubject(this._cartList);
  total : number;

  constructor() { }

  addToCart(book: book) {
    let item: book | undefined = this._cartList.find((v1) => v1.titulo == book.titulo);
      if(!item){
        this._cartList.push ({...book});
      }
      else{
        item.quantity += book.quantity;
       
      }
   console.log(this._cartList);
   this.cartList.next(this._cartList);
  }
 
  


}
 
