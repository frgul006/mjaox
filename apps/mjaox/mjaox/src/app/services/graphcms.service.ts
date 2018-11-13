import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Post } from './graphcms.model';
import { Observable } from 'rxjs';
import { BlogPosts, BlogPostsResponse } from './graphcms.queries';

@Injectable({
  providedIn: 'root'
})
export class GraphCMSService {
  private blogPosts: Observable<Post[]>;

  constructor(private apollo: Apollo) {
    this.blogPosts = this.apollo
      .watchQuery<BlogPostsResponse>({
        query: BlogPosts
      })
      .valueChanges.pipe(map(changes => changes.data.posts as Post[]));
  }

  getBlogPosts() {
    return this.blogPosts;
  }
}
