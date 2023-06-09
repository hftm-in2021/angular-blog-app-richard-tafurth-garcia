import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ArrayBlog, ArrayBlogSchema, BlogSchema } from '@app/schemas/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getEntries(): Observable<ArrayBlog> {
    return this.http
      .get<ArrayBlog>(`${environment.apiUrl}/entries`)
      .pipe(map((response) => ArrayBlogSchema.parse(response)));
  }

  searchEntries(keyword: string): Observable<ArrayBlog> {
    console.log(keyword);
    return this.http
      .get<ArrayBlog>(`${environment.apiUrl}/entries`, {
        params: {
          searchstring: keyword,
        },
      })
      .pipe(map((response) => ArrayBlogSchema.parse(response)));
  }
}
