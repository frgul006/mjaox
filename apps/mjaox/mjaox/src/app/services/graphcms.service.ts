import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, first } from 'rxjs/operators';
import { Post } from './graphcms.model';
import { Observable, of } from 'rxjs';
import { BlogPosts, BlogPostsResponse, BlogPost } from './graphcms.queries';

@Injectable({
  providedIn: 'root'
})
export class GraphCMSService {
  private blogPost: Observable<Post>;

  constructor(private apollo: Apollo) {}

  getBlogPosts(): Observable<Post[]> {
    return this.apollo
      .watchQuery<BlogPostsResponse>({
        query: BlogPosts
      })
      .valueChanges.pipe(map(changes => changes.data.posts as Post[]));
  }

  getBlogPostByPrettyUrl(prettyurl: string): Observable<Post> {
    return this.apollo
      .watchQuery<BlogPostsResponse>({
        query: BlogPost,
        variables: {
          prettyurl
        }
      })
      .valueChanges.pipe(map(changes => changes.data.posts[0]));
  }
}
