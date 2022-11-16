import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CallApiService {
  constructor(private http: HttpClient) {}

  public getJSONPH(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
