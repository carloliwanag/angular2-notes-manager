import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, Headers, XHRBackend, HttpModule, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { User } from '../_models/user';
import { UserService } from './user.service';

describe('User Service Test', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        UserService,
        MockBackend,
        BaseRequestOptions,
        {
          provide:Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaulOtions: BaseRequestOptions) => {
              return new Http(backend, defaulOtions);
            }
        }
      ],
      imports: [HttpModule]
    });
  }));

  it ('should create a user', inject([UserService, MockBackend], (service:UserService, MockBackend) => {
    const responseBody = {
      respCode: '000',
      message: 'User Successfully created.'
    };

    const response = new Response(new ResponseOptions({body: responseBody, status: 200}));
    MockBackend.connections.subscribe(connection=>connection.mockRespond(response));

    service.create(new User()).subscribe(res => {
      expect(res.respCode).toEqual(responseBody.respCode);
    });

  }));

});