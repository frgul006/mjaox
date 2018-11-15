import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Author } from '@mjaox/shared/mjaox-model';

@Component({
  selector: 'mjaox-ui-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent {
  @Input() author: Author;
}
