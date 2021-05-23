import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }
  getRepoData(): Observable<any>{
  const url = ' https://api.github.com/users/johnpapa/repos?per_page=10&page=2';
  return this.http.get<any>(url);
  }
}
