import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contentHeaders } from '../../common/headers';
import { credentials } from '../_guards/crediential';
import { EmailTemplate } from '../_models/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailTemplateService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(credentials.host + '/v1/email_templates/', this.jwt()).map((response: Response) => response.json());
    }

    getUserById(id: number) : Observable<any> {
        return this.http.get(credentials.host + '/v1/email_templates/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: EmailTemplate) : Observable<any> {
        //console.log(user);
        return this.http.post(credentials.host + '/v1/email_templates/', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: EmailTemplate) : Observable<any> {
        return this.http.put(credentials.host + '/v1/email_templates/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) : Observable<any> {
        return this.http.delete(credentials.host + '/v1/email_templates/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + token });
            return new RequestOptions({ headers: headers });
        }
    }
}