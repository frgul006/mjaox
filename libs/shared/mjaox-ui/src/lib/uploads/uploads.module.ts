import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMjaoxUiFileIconModule } from '../file-icon';
import { UploadsComponent } from './uploads.component';

const COMPONENTS = [UploadsComponent];

@NgModule({
  imports: [CommonModule, SharedMjaoxUiFileIconModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUiUploadsModule {}
