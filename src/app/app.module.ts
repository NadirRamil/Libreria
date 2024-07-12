import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksListComponent } from './books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { bookAboutComponent } from './book-about/book-about.component';
import { bookbooksComponent } from './book-books/book-books.component';
import { bookCartComponent } from './book-cart/book-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';



@NgModule({
  declarations: [
    AppComponent,
    booksListComponent,
    bookAboutComponent,
    bookbooksComponent,
    bookCartComponent,
    InputNumberComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
