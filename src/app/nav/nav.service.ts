import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NavService {

  constructor(
    private http: HttpClient
  ) { }

listBooks(): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=quilting');
  }

}