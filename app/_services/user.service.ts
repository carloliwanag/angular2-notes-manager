import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    create(user) {
        return this.http.post('http://localhost:3020/api/users', user).map((response: Response) => response.json());
    }

}