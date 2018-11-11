import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

export { MjaoxToolbarLink } from './toolbar-link.model';
export { MjaoxToolbarOptions } from './toolbar-options.model';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class MjaoxToolbarModule {}
