import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SpyLocation } from '@angular/common/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { FormsModule }    from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Note } from '../_models/note';
import { NoteService, AlertService } from '../_services/index';
import { NoteDetailComponent } from './note-detail.component';

let fixture: ComponentFixture<NoteDetailComponent>;
let comp: NoteDetailComponent;
let de: DebugElement;
let el: HTMLElement;

describe('NoteDetailComponent Test', () => {

  let expectedNote: Note = new Note();
  expectedNote.subject = 'Some subject here.';
  expectedNote.body = 'Som body of the subject here.';
  expectedNote.userId = 1;
  expectedNote.version = 2;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  let FakeNoteService = {};

  let FakeAlertService = {};

  let FakeActivatedRoute = {};

  let mockLocation = {
    back: jasmine.createSpy('back')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteDetailComponent],
      providers: [
        { provide: Location, useClass: SpyLocation },
        { provide: NoteService, useValue: FakeNoteService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: FakeActivatedRoute },
        { provide: AlertService, useValue: FakeAlertService }
      ],
      imports: [FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailComponent);
    comp = fixture.componentInstance;

    //set note
    comp.note = expectedNote;

    //override ngOnInit to not call the service
    comp.ngOnInit = function () { };

    fixture.detectChanges();
  });


  it('should show the note detail information', (done) => {
    fixture.detectChanges();
    
    //test subject value
    de = fixture.debugElement.query(By.css('#subject'));
    el = de.nativeElement;
    expect(el.getAttribute('ng-reflect-model')).toEqual(expectedNote.subject);

    //test body value
    de = fixture.debugElement.query(By.css('#body'));
    el = de.nativeElement;
    expect(el.getAttribute('ng-reflect-model')).toEqual(expectedNote.body);

    //test version value
    de = fixture.debugElement.query(By.css('#version'));
    el = de.nativeElement;
    expect(+(el.getAttribute('ng-reflect-model'))).toEqual(expectedNote.version);
    done();
  });
});



