import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SharedMjaoxUiAuthorModule,
  SharedMjaoxUiBlogPostModule,
  SharedMjaoxUiTagsModule
} from '@mjaox/shared/mjaox-ui';
import { MarkdownModule } from 'ngx-markdown';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const COMPONENTS = [
  BlogPageComponent,
  AboutPageComponent,
  BlogDetailsPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMjaoxUiBlogPostModule,
    SharedMjaoxUiTagsModule,
    SharedMjaoxUiAuthorModule,
    MarkdownModule.forChild()
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class PagesModule {}
