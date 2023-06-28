import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  ArrayBlogOverview,
  ArrayBlogOverviewSchema,
} from '@app/schemas/blog-overview';
import { BlogDetails, BlogDetailSchema } from '@app/schemas/blog-details';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private cachedBlogs$?: Observable<BlogDetails[]>;

  constructor(private http: HttpClient) {}

  getEntries(): Observable<ArrayBlogOverview> {
    return this.http
      .get<ArrayBlogOverview>(`${environment.apiUrl}entries`)
      .pipe(map((response) => ArrayBlogOverviewSchema.parse(response)));
  }

  getEntry(blogId: number): Observable<BlogDetails> {
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
}
