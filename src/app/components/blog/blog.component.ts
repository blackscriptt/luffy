import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/shared/models/post';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  post: Post = new Post();
  url: string = "";

  constructor(
    private blogService: BlogService,
    private activadetRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.activadetRoute.paramMap
      .subscribe({
        next: (param) => {
          this.url = param.get("url")!;
          this.getPost();
        }
      });

  }

  getPost(): void {


    this.blogService.getPosts()
      .pipe(map(x => x.find(y => y.url == this.url)))
      .subscribe({
        next: (x) => {
          if(!x) this.router.navigateByUrl("/404");
          this.post = x!;
        },
        error: (err) => {
          
        }
      })

  }
}
