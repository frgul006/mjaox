import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinksComponent } from './links.component';

const COMPONENTS = [LinksComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUiLinksModule {}
