import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Book } from '../models/book';
import { LoggerService } from './logger.service';
import { CoreModule } from './core.module';

describe('Tests for data.service', () => {
    let dataService: DataService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [
                DataService,
                LoggerService
            ],
            imports: [ HttpClientTestingModule, CoreModule ]
        });
        dataService = TestBed.get(DataService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should return the correct book', () => {
        dataService.getBookById(2)
        .subscribe(
            data => {
                expect(data.title).toEqual('In the Garden');
            }
        );

        let req: TestRequest = httpTestingController.expectOne('/api/books/2');

        req.flush(<Book>{
            title: 'In the Garden',
            author: 'Anna Lisp'
        });

        httpTestingController.verify();
    });

});
