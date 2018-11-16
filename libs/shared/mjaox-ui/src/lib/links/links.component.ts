import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from '@mjaox/shared/mjaox-model';

@Component({
  selector: 'mjaox-ui-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksComponent {
  @Input() links: Link[] = [];
}
