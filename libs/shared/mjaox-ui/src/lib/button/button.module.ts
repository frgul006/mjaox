import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class MjaoxButtonModule {}
