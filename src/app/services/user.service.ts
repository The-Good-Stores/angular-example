import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:8000/user/test/reg'
  constructor(private http: HttpClient) {}

  userRegister(user: any) : Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
