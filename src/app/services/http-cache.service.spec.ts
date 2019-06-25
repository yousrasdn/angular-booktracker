import { TestBed } from '@angular/core/testing';

import { HttpCacheService } from './http-cache.service';
import { HttpResponse } from '@angular/common/http';

describe('HttpCacheService', () => {
  let service: HttpCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(HttpCacheService);
  });

  it('should be created', () => {
    // const service: HttpCacheService = TestBed.get(HttpCacheService);
    expect(service).toBeTruthy();
  });

  describe('put is invoked', () => {
    it('should add new cache value when the url does not exist in the cache', () => {
      const reqUrl = 'api/books';
      const currentCacheValueOfReqUrl = service.getRequests()[reqUrl];
      expect(currentCacheValueOfReqUrl).toEqual(undefined);

      service.put(reqUrl, new HttpResponse());
      expect(service.getRequests()[reqUrl]).toEqual(new HttpResponse());
    });
  });

  describe('get is invoked', () => {
    it('should return the cached value', () => {
      const reqUrl = 'api/books';
      const currentCacheValueOfReqUrl = service.getRequests()[reqUrl];
      expect(currentCacheValueOfReqUrl).toEqual(undefined);
    });
  });
});
