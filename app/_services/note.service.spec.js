"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var note_service_1 = require('./note.service');
describe('Note Service Test', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                note_service_1.NoteService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                    useFactory: function (backend, defaulOtions) {
                        return new http_1.Http(backend, defaulOtions);
                    }
                }
            ],
            imports: [http_1.HttpModule]
        });
    }));
    it('should get notes using user id', testing_1.inject([note_service_1.NoteService, testing_2.MockBackend], function (service, MockBackend) {
        var resultSet = [{}, {}];
        var response = new http_1.Response(new http_1.ResponseOptions({ body: resultSet, status: 200 }));
        MockBackend.connections.subscribe(function (connection) { return connection.mockRespond(response); });
        service.getByUserId(1).subscribe(function (res) { return expect(res.length).toEqual(2); });
    }));
    it('should get a note using note id', testing_1.inject([note_service_1.NoteService, testing_2.MockBackend], function (service, MockBackend) {
        var resultSet = [{}];
        var response = new http_1.Response(new http_1.ResponseOptions({ body: resultSet, status: 200 }));
        MockBackend.connections.subscribe(function (connection) { return connection.mockRespond(response); });
        service.getByUserId(1).subscribe(function (res) { return expect(res.length).toEqual(1); });
    }));
});
//# sourceMappingURL=note.service.spec.js.map