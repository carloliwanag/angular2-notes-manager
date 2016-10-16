"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/common/testing');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var testing_3 = require('@angular/router/testing');
var note_1 = require('../_models/note');
var index_1 = require('../_services/index');
var note_detail_component_1 = require('./note-detail.component');
var fixture;
var comp;
var de;
var el;
describe('NoteDetailComponent Test', function () {
    var expectedNote = new note_1.Note();
    expectedNote.subject = 'Some subject here.';
    expectedNote.body = 'Som body of the subject here.';
    expectedNote.userId = 1;
    expectedNote.version = 2;
    var mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    var FakeNoteService = {};
    var FakeAlertService = {};
    var FakeActivatedRoute = {};
    var mockLocation = {
        back: jasmine.createSpy('back')
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [note_detail_component_1.NoteDetailComponent],
            providers: [
                { provide: Location, useClass: testing_2.SpyLocation },
                { provide: index_1.NoteService, useValue: FakeNoteService },
                { provide: router_1.Router, useValue: mockRouter },
                { provide: router_1.ActivatedRoute, useValue: FakeActivatedRoute },
                { provide: index_1.AlertService, useValue: FakeAlertService }
            ],
            imports: [forms_1.FormsModule, testing_3.RouterTestingModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(note_detail_component_1.NoteDetailComponent);
        comp = fixture.componentInstance;
        //set note
        comp.note = expectedNote;
        //override ngOnInit to not call the service
        comp.ngOnInit = function () { };
        fixture.detectChanges();
    });
    it('should show the note detail information', function (done) {
        fixture.detectChanges();
        //test subject value
        de = fixture.debugElement.query(platform_browser_1.By.css('#subject'));
        el = de.nativeElement;
        expect(el.getAttribute('ng-reflect-model')).toEqual(expectedNote.subject);
        //test body value
        de = fixture.debugElement.query(platform_browser_1.By.css('#body'));
        el = de.nativeElement;
        expect(el.getAttribute('ng-reflect-model')).toEqual(expectedNote.body);
        //test version value
        de = fixture.debugElement.query(platform_browser_1.By.css('#version'));
        el = de.nativeElement;
        expect(+(el.getAttribute('ng-reflect-model'))).toEqual(expectedNote.version);
        done();
    });
});
//# sourceMappingURL=note-detail.component.spec.js.map