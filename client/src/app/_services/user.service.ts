import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contentHeaders } from '../../common/headers';

import { User } from '../_models/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://127.0.0.1:3000/v1/users', this.jwt()).map((response: Response) => response.json());
    }

    getUserById(id: number) {
        return this.http.get('http://127.0.0.1:3000/v1/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) : Observable<any>{
        //console.log(user);
        return this.http.post('http://127.0.0.1:3000/v1/auth/signup', user,  { headers: contentHeaders })
        // .map((response: Response) => {
        //      // login successful if there's a jwt token in the response
        //         let res = response.json();
        //         //console.log(user);
        //         if (res && res.data.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(res.data.user));
        //             localStorage.setItem('token', JSON.stringify(res.data.token));
        //         }
        // });
        .map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('http://127.0.0.1:3000/v1/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://127.0.0.1:3000/v1/users/' + id, this.jwt()).map((response: Response) => response.json());
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