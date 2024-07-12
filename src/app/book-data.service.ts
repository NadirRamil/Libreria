import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { book } from './books-list/book';

const URL = "https://6690bbb3c0a7969efd9d3ff0.mockapi.io/libros";



@Injectable({
  providedIn: 'root'
})
export class bookDataService {


    
constructor(private http: HttpClient) { }

  public getAll(): Observable<book[]>{
    return this.http.get<book[]>(URL)
    .pipe(
      tap( (books: book[])=>books.forEach(book => book.quantity = 0)  )
    );
  }
}
