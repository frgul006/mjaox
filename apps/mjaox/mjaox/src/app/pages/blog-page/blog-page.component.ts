import { Component, OnInit } from '@angular/core';
import { Post } from '@mjaox/shared/mjaox-model';
import { Observable } from 'rxjs';
import { GraphCMSService } from '../../services/graphcms.service';

@Component({
  selector: 'mjaox-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private graphSvc: GraphCMSService) {}

  ngOnInit() {
    this.posts = this.graphSvc.getBlogPosts();
  }
}
