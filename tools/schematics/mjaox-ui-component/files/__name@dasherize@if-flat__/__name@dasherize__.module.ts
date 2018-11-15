
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

const COMPONENTS = [<%= classify(name) %>Component];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedMjaoxUi<%= classify(name) %>Module {}
