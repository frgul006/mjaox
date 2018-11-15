import { Apollo } from 'apollo-angular';
import { BlogPost, BlogPosts, BlogPostsResponse } from './graphcms.queries';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@mjaox/shared/mjaox-model';

@Injectable({
  providedIn: 'root'
})
export class GraphCMSService {
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
