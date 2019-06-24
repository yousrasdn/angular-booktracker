import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { allBooks, allReaders } from '../data';
import { LoggerService } from './logger.service';
import { Reader } from '../models/reader';
import { Book } from '../models/book';
import { BookTrackerError } from '../models/bookTrackerError';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient,
              private loggerService: LoggerService) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Observable<Book[]> {
    console.log('Getting all books from the server.');
    return this.httpClient.get<Book[]>('/api/books');
  }

  getBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }
}
