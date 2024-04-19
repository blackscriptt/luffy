import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../shared/models/category';
import { Post } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl: string = "/assets/db/";

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + "categories.json");
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + "posts.json");
  }
}
