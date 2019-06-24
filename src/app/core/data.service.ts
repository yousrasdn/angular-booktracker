import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { allBooks, allReaders } from '../data';
import { LoggerService } from './logger.service';
import { Reader } from '../models/reader';
import { Book } from '../models/book';

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

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`/api/books/${id}`);
  }

  addBook(newBook: Book): Observable<Book> {
    return this.httpClient.post<Book>('/api/books', newBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBook(bookToUpdate: Book): Observable<void> {
    return this.httpClient.put<void>(`/api/books/${bookToUpdate.bookID}`, bookToUpdate, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteBook(bookID: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/books/${bookID}`);
  }
}
