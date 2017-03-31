import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contentHeaders } from '../../common/headers';

import { Plan } from '../_models/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://127.0.0.1:3000/v1/plans', this.jwt()).map((response: Response) => response.json());
    }

    getUserById(id: number) {
        return this.http.get('http://127.0.0.1:3000/v1/plans/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: Plan) : Observable<any>{
        //console.log(user);
        return this.http.post('http://127.0.0.1:3000/v1/plans', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: Plan) : Observable<any> {
        return this.http.put('http://127.0.0.1:3000/v1/plans/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://127.0.0.1:3000/v1/plans/' + id, this.jwt()).map((response: Response) => response.json());
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