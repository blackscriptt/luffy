import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Category } from 'src/app/shared/models/category';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'ly-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  categories: Category[] = [];
  posts: Post[] = [];

  constructor(
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getPosts();
  }
  

  getCategories(): void {
    this.blogService.getCategories()
      .subscribe({
        next: (x) => {
          this.categories = x;
        },
        error: (err) => { }
      });
  }

  getPosts(): void {
    this.blogService.getPosts()
    .subscribe({
      next: (x) => {
        this.posts = x;
      },
      error: (err) => { }
    });
  }



}
