import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { MjaoxToolbarOptions } from './toolbar-options.model';

@Component({
  selector: 'mjaox-toolbar',
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
