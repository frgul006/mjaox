import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatChipsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const COMPONENTS = [
  BlogPageComponent,
  AboutPageComponent,
  BlogDetailsPageComponent
];

const MATERIAL_DESIGN = [MatChipsModule, MatCardModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...MATERIAL_DESIGN],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class PagesModule {}
