import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '@mjaox/shared/mjaox-model';

@Component({
  selector: 'mjaox-ui-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent {
  @Input() post: Post;
}
