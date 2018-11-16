import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FileIconComponent } from './file-icon.component';

const COMPONENTS = [FileIconComponent];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUiFileIconModule {}
