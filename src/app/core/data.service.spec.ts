import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
describe('Tests for data.service', () => {
    let dataService: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [DataService],
            imports: []
        });
        dataService = TestBed.get(DataService);
    });


});
