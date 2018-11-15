import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagsComponent } from './tags.component';
import { MatChipsModule } from '@angular/material/chips';

const COMPONENTS = [TagsComponent];
const MATERIAL_DESIGN = [MatChipsModule];

@NgModule({
  imports: [CommonModule, ...MATERIAL_DESIGN],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUiTagsModule {}
