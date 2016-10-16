import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, Headers, XHRBackend, HttpModule, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Note } from '../_models/note';
import { NoteService } from './note.service';


describe('Note Service Test', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteService, 
        MockBackend, 
        BaseRequestOptions,
        {
          provide: Http,
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


  it('should get notes using user id', inject([NoteService,MockBackend], (service:NoteService, MockBackend) => {
    const resultSet = [{}, {}];
    const response = new Response(new ResponseOptions({body:resultSet, status: 200}));
    MockBackend.connections.subscribe(connection=>connection.mockRespond(response));
    service.getByUserId(1).subscribe(res => expect(res.length).toEqual(2));
  }));

  it('should get a note using note id', inject([NoteService,MockBackend], (service:NoteService, MockBackend) => {
    const resultSet = [{}];
    const response = new Response(new ResponseOptions({body:resultSet, status: 200}));
    MockBackend.connections.subscribe(connection=>connection.mockRespond(response));
    service.getByUserId(1).subscribe(res => expect(res.length).toEqual(1));
  }));


  
});