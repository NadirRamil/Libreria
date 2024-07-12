import { Component, EventEmitter, Input, Output } from '@angular/core';
import { book } from '../books-list/book';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached:EventEmitter<String> = new EventEmitter<String>();


  upQuantity():void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
        this.maxReached.emit("se alcanzó el max");
  }
  
  downQuantity():void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  
  changeQuantity(event: any): void {
    console.log(event);
    this.quantityChange.emit(this.quantity);
  }
  cambioDePuntaje(event: { preventDefault():any;key: any;target:any },book:book):void{
    if (event.key<0 || event.key>10)
      event.preventDefault();
    
  }
  verifybookQuantity(book){
    if(book.quantity > book.stock) {
      alert("No hay suficientes libros en stock");
    }
    if(book.quantity < 0) {
      alert("No se pueden encargar libros negativas ");
    }
    book.quantity = 0;
  }


}
