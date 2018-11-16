import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Upload } from '@mjaox/shared/mjaox-model';

@Component({
  selector: 'mjaox-ui-file-icon',
  templateUrl: './file-icon.component.html',
  styleUrls: ['./file-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileIconComponent implements OnInit {
  @Input() file: Upload;

  icon: string;

  ngOnInit(): void {
    switch (this.file ? this.file.mimeType : '') {
      case 'application/zip': {
        this.icon = '';
        break;
      }
      default: {
        this.icon = '';
        break;
      }
    }
  }
}
