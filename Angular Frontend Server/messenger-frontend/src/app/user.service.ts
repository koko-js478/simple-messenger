
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ 
    providedIn: 'root' 
    })
    
export class UserService {
    users;

    constructor(
        private http: HttpClient
        ) { }

    registerUser(userData): Observable<any> {
        return this.http.post('http://127.0.0.1:8000/chat/signup/', userData);
    }    

    loginUser(userData): Observable<any> {
        return this.http.post('http://127.0.0.1:8000/chat/api-auth/', userData);
    }

    getallUsers(): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/chat/users/?format=json');
    }

    

    getCurrentUser(tokenkey): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Token ${tokenkey}`
            })
        };
        return this.http.get('http://127.0.0.1:8000/chat/getcurrentuser/', httpOptions);
    }
}