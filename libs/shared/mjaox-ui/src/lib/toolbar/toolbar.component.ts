import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MjaoxToolbarOptions } from './toolbar-options.model';

@Component({
  selector: 'mjaox-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Input()
  options: MjaoxToolbarOptions = {
    links: []
  };
}
