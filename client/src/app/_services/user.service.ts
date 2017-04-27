import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { contentHeaders } from '../../common/headers';
import {credentials} from '../_guards/crediential';

import { User } from '../_models/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(credentials.host + '/v1/users/', this.jwt()).map((response: Response) => response.json());
    }

    getUserById(id: number) {
        return this.http.get(credentials.host + '/v1/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
       return this.http.post(credentials.host + '/v1/auth/signup/', user,  { headers: contentHeaders }).map((response: Response) => response.json())
        //console.log(user);
    }
     mail(user: User) {
       // console.log(user);
       // this.http.post(credentials.host + '/v1/auth/signup/', user,  { headers: contentHeaders }).map((response: Response) => response.json()),
       return  this.http.post(credentials.host + '/v1/emails/send', user, this.jwt()).map((response: Response) => response.json())
        //console.log(user);
    }
    uploadfile(fileList) {
       //console.log(fileList);
       if(fileList.length > 0) {

        let file: File = fileList[0];
        let formData:FormData = new FormData();
        //console.log(file);
        formData.append('file', file, file.name);
        
        //console.log(formData);
        return this.http.post(credentials.host + '/v1/fileuploads/uploadFile', formData, this.jwt())
            .map((response: Response) => response.json())
            //.catch(error => Observable.throw(error))
        }
    }
    // create(user: User): Observable<any> {
    //     //console.log(user);
    //     var userDetail = user;
    //     return Observable.forkJoin([
            
    //         this.http.post(credentials.host + '/v1/auth/signup/', user,  { headers: contentHeaders }).map((response: Response) => response.json()),
    //         this.http.post(credentials.host + '/v1/emails/send', userDetail, this.jwt()).map((response: Response) => response.json())
    //     ])
    //     .map((data: any[]) => {
    //         let inuser: any = data[0];
    //         let mail: any[] = data[1];
    //         //console.log(inuser.data);
    //         return inuser = inuser.data;
    //     });
    // }

    // create(user: User) : Observable<any>{
    //     //console.log(user);
    //     return this.http.post(credentials.host + '/v1/auth/signup/', user,  { headers: contentHeaders }).map((response: Response) => response.json())
    //     .flatMap((insertUser: any) => {
    //         //console.log(insertUser.data.user);
    //         if (insertUser.length > 0) {
    //             return Observable.forkJoin(
    //             insertUser.map((inuser: any) => {
    //                 console.log(inuser);
    //                 return this.http.post(credentials.host + '/v1/mails/send/', insertUser.data.user)
    //                 .map((res: any) => {
    //                     let newuser: any = res.json();
    //                     console.log(newuser);
    //                     newuser.data = newuser;
    //                     return newuser;
    //                 });
    //             })
    //             );
    //         }
    //     });
    // }

    update(user: User) : Observable<any> {
        return this.http.put(credentials.host + '/v1/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(credentials.host + '/v1/users/' + id, this.jwt()).map((response: Response) => response.json());
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