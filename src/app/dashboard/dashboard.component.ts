import { Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private dataService: DataService,
              private title: Title) { }

  ngOnInit() {
    this.dataService.getAllBooks()
    .subscribe(
      (books: Book[]) => this.allBooks = books,
      (error: any) => console.log(error)
    );
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker ${VERSION.full}`);
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID)
    .subscribe(
      (data: void) => {
        let index = this.allBooks.findIndex(book => book.bookID === bookID);
        this.allBooks.splice(index, 1);
      }, (error: any) => console.log(error)
    );
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
