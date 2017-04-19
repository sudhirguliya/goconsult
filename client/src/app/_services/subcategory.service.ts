import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contentHeaders } from '../../common/headers';
import { SubCategory } from '../_models/index';
import {credentials} from '../_guards/crediential';

@Injectable()
export class SubCategoryService {
    constructor(private http: Http) { }

    

   

getAll() {
        return this.http.get(credentials.host + '/v1/subcategories/getSubCategory', this.jwt()).map((response: Response) => response.json());
    }

	create(category: SubCategory) {
        //console.log(user);
        return this.http.post(credentials.host + '/v1/subcategories/', category, this.jwt())
        .map((response: Response) =>response.json());
    }
	update(category: SubCategory) {
        return this.http.put(credentials.host + '/v1/subcategories/'+category.id , category, this.jwt()).map((response: Response) => response.json());
    }
     delete(id: number) {
        return this.http.delete(credentials.host + '/v1/subcategories/' + id, this.jwt()).map((response: Response) => response.json());
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