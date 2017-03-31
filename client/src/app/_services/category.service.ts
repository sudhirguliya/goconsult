import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contentHeaders } from '../../common/headers';

import { Category } from '../_models/index';

@Injectable()
export class CategoryService {
    constructor(private http: Http) { }

    

   

getAll() {
        return this.http.get('http://127.0.0.1:3000/v1/categories', this.jwt()).map((response: Response) => response.json());
    }

	create(category: Category) {
        //console.log(user);
        return this.http.post('http://127.0.0.1:3000/v1/categories', category, this.jwt())
        .map((response: Response) =>response.json());
    }
	update(category: Category) {
        return this.http.put('http://127.0.0.1:3000/v1/categories/'+category.id , category, this.jwt()).map((response: Response) => response.json());
    }
     delete(id: number) {
        return this.http.delete('http://127.0.0.1:3000/v1/categories/' + id, this.jwt()).map((response: Response) => response.json());
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