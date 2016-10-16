"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var index_1 = require('./index');
var note_service_1 = require('../_services/note.service');
var user_1 = require('../_models/user');
var comp;
var fixture;
var de;
var el;
var noteService;
var spy;
describe('NoteListComponent Test', function () {
    var mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    var FakeNoteService = {};
    var carlo = new user_1.User();
    carlo.firstName = 'Carlo';
    carlo.lastName = 'Liwanag';
    carlo.userId = 1;
    carlo.username = 'carloliwanag';
    carlo.password = 'password';
    var notes = [{ "id": "1", "subject": "note 1", "body": "body 1", "userId": "1" }];
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [index_1.NoteListComponent],
            providers: [
                { provide: note_service_1.NoteService, useValue: FakeNoteService },
                { provide: router_1.Router, useValue: mockRouter },
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(index_1.NoteListComponent);
        comp = fixture.componentInstance;
        //set the notes
        comp.notes = notes;
        //override ngOnInit to not call the service
        comp.ngOnInit = function () { };
        //set the user
        comp.user = carlo;
        fixture.detectChanges();
    });
    it("should contain the note's subject", function (done) {
        var compiled = fixture.debugElement.query(platform_browser_1.By.css('.subject'));
        var el = compiled.nativeElement;
        expect(el.textContent).toEqual(notes[0].subject);
        done();
    });
});
//# sourceMappingURL=note-list.component.spec.js.map