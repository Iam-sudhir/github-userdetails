import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }
  getRepoData(_pageQuery: any): Observable<any> {
    return this.http.get<any>(_pageQuery);
  }
}
