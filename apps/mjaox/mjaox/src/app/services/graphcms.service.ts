import { Injectable } from '@angular/core';
import { Post } from '@mjaox/shared/mjaox-model';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as queries from './queries';

@Injectable({
  providedIn: 'root'
})
export class GraphCMSService {
  constructor(private apollo: Apollo) {}

  getAllPosts(): Observable<Post[]> {
    return this.apollo
      .watchQuery<queries.GetAllPostsResponse>({
        query: queries.getAllPosts
      })
      .valueChanges.pipe(map(changes => changes.data.posts as Post[]));
  }

  getPostByPrettyUrl(prettyurl: string): Observable<Post> {
    return this.apollo
      .watchQuery<queries.GetPostByPrettyUrlResponse>({
        query: queries.getPostByPrettyUrl,
        variables: {
          prettyurl
        }
      })
      .valueChanges.pipe(map(changes => changes.data.posts[0]));
  }
}
