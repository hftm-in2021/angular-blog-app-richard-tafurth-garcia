import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Blog } from '@app/models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getEntries(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.apiUrl}/entries`);
  }

  searchEntries(keyword: string): Observable<Blog[]> {
    console.log(keyword);
    return this.http.get<Blog[]>(`${environment.apiUrl}/entries`, {
      params: {
        searchstring: keyword,
      },
    });
  }
}
