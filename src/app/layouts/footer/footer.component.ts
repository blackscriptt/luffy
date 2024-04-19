import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Category } from 'src/app/shared/models/category';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'ly-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
