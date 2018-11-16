import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Upload } from '@mjaox/shared/mjaox-model';

@Component({
  selector: 'mjaox-ui-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadsComponent {
  @Input() uploads: Upload[] = [];
}
