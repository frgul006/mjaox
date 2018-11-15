import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tag } from '@mjaox/shared/mjaox-model';

@Component({
  selector: 'mjaox-ui-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {
  @Input() tags: Tag[];
}
