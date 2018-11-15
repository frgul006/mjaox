import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { SharedMjaoxUiTagsModule } from '../tags';
import { BlogPostComponent } from './blog-post.component';

const COMPONENTS = [BlogPostComponent];
const MATERIAL_DESIGN = [MatChipsModule, MatCardModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_DESIGN,
    SharedMjaoxUiTagsModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUiBlogPostModule {}
