import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Router } from '@angular/router';

import { NoteListComponent } from './index';
import { NoteService } from '../_services/note.service';
import { User } from '../_models/user';

let comp: NoteListComponent;
let fixture: ComponentFixture<NoteListComponent>;
let de: DebugElement[];
let el: HTMLElement[];
let noteService: NoteService;
let spy;


describe('NoteListComponent Test', () => {
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  let FakeNoteService = {};

  
  var carlo = new User();
  carlo.firstName = 'Carlo';
  carlo.lastName = 'Liwanag';
  carlo.userId = 1;
  carlo.username = 'carloliwanag';
  carlo.password = 'password';

  var notes = [{ "id": "1", "subject": "note 1", "body": "body 1", "userId": "1" }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteListComponent],
      providers: [
        { provide: NoteService, useValue: FakeNoteService },
        { provide: Router, useValue: mockRouter },
      ]
    }).compileComponents();


  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(NoteListComponent);

    comp = fixture.componentInstance;
    //set the notes
    comp.notes = notes;
    //override ngOnInit to not call the service
    comp.ngOnInit = function () { };
    //set the user
    comp.user = carlo;

    fixture.detectChanges();
  });


  it("should contain the note's subject", (done) => {
    var compiled = fixture.debugElement.query(By.css('.subject'));
    var el: HTMLElement = compiled.nativeElement;
    expect(el.textContent).toEqual(notes[0].subject);
    done();
  });

});