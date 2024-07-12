import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bookAboutComponent } from './book-about/book-about.component';
import { bookbooksComponent } from './book-books/book-books.component';

const routes: Routes = [
  {
    path: " ",
    redirectTo: "books",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: bookbooksComponent
  },
  {
    path: "about",
    component: bookAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
