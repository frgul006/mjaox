import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AuthorComponent } from './author.component';

const COMPONENTS = [AuthorComponent];

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUiAuthorModule {}
