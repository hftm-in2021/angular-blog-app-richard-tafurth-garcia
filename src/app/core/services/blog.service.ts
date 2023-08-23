import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BlogDetails, BlogDetailSchema } from './blog-details';
import { ArrayBlogOverview, ArrayBlogOverviewSchema } from './blog-overview';
import { NewBlog } from './new-blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getEntries(): Observable<ArrayBlogOverview> {
    console.log('Getting /entries');
    return this.http
      .get<ArrayBlogOverview>(`${environment.apiUrl}entries`)
      .pipe(map((response) => ArrayBlogOverviewSchema.parse(response)));
  }

  getEntry(blogId: number): Observable<BlogDetails> {
    console.log(`Getting /entries/${blogId}`);
    return this.http
      .get<BlogDetails>(`${environment.apiUrl}entries/${blogId}`)
      .pipe(map((response) => BlogDetailSchema.parse(response)));
  }

  searchEntries(keyword: string): Observable<ArrayBlogOverview> {
    console.log(keyword);
    return this.http
      .get<ArrayBlogOverview>(`${environment.apiUrl}entries`, {
        params: {
          searchstring: keyword,
        },
      })
      .pipe(map((response) => ArrayBlogOverviewSchema.parse(response)));
  }

  addEntry(newBlog: NewBlog): Observable<NewBlog> {
    return this.http.post<NewBlog>(`${environment.apiUrl}entries`, newBlog);
  }
}
