"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
var user_1 = require('../_models/user');
var user_service_1 = require('./user.service');
describe('User Service Test', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                user_service_1.UserService,
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
    it('should create a user', testing_1.inject([user_service_1.UserService, testing_2.MockBackend], function (service, MockBackend) {
        var responseBody = {
            respCode: '000',
            message: 'User Successfully created.'
        };
        var response = new http_1.Response(new http_1.ResponseOptions({ body: responseBody, status: 200 }));
        MockBackend.connections.subscribe(function (connection) { return connection.mockRespond(response); });
        service.create(new user_1.User()).subscribe(function (res) {
            expect(res.respCode).toEqual(responseBody.respCode);
        });
    }));
});
//# sourceMappingURL=user.service.spec.js.map