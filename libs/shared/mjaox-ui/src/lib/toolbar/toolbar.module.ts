import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar.component';

export { MjaoxToolbarLink } from './toolbar-link.model';
export { MjaoxToolbarOptions } from './toolbar-options.model';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class SharedMjaoxUiToolbarModule {}
